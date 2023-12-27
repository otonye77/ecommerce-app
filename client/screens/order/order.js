import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, Alert } from "react-native";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../graphql/query";
import { DELETE_ORDER, RESET_ORDER } from "../../graphql/mutation";

const Order = () => {
  const { loading, error, data, refetch } = useQuery(GET_ORDERS);
  const [totalPrice, setTotalPrice] = useState(0);
  const [resetOrderMutation] = useMutation(RESET_ORDER);
  const [deleteOrderMutation] = useMutation(DELETE_ORDER)

  useEffect(() => {
    const fetchData = async () => {
      try {
        await refetch();
      } catch (error) {
        console.error("Error refetching orders:", error.message);
      }
    };

    fetchData();
  }, [refetch]);

  useEffect(() => {
    const calculateTotalPrice = () => {
      let total = 0;
      data?.orders.forEach((order) => {
        order.products.forEach((product) => {
          total += product.price * product.quantity;
        });
      });
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [data]);

  const handleDeleteOrder = async (orderId) => {
    try {
      const { data: deletedOrderData } = await deleteOrderMutation({
        variables: { orderId },
      });
  
      if (deletedOrderData && deletedOrderData.deleteOrder) {
        Alert.alert("Order Deleted", "The order has been successfully deleted.");
        refetch();
      } else {
        Alert.alert("Error", "Failed to delete the order.");
      }
    } catch (error) {
      console.error("Error deleting order:", error.message);
      Alert.alert("Error", "Failed to delete the order.");
    }
  };
  

 
  const handleSimulatePayment = async () => {
    try {
      console.log("Simulating payment...");
      const { data: resetOrderData } = await resetOrderMutation();
      if (resetOrderData && resetOrderData.resetOrder) {
        Alert.alert("Payment Successful", "Order has been successfully paid.");
        refetch();
      } else {
        Alert.alert("Error", "Failed to reset orders after payment.");
      }
    } catch (error) {
      console.error("Error simulating payment:", error.message);
      Alert.alert("Error", "Failed to simulate payment.");
    }
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const orders = data?.orders || [];

  console.log("These are the orders", orders);

  return (
    <View style={styles.container}>
      {orders.length === 0 && <View><Text>You have no orders</Text></View>}
      <FlatList
        data={orders}
        keyExtractor={(order) => order.id}
        renderItem={({ item: order }) => (
          <View style={styles.orderItem}>
            <Text>Order ID: {order.id}</Text>
            <Text>Status: {order.status}</Text>
            <FlatList
              data={order.products}
              keyExtractor={(product) => product.id}
              renderItem={({ item: product }) => (
                <View style={styles.productItem}>
                  <Text>Name: {product.name}</Text>
                  <Text>Price: ${product.price}</Text>
                </View>
              )}
            />
             <Button title="Delete" onPress={() => handleDeleteOrder(order.id)} />
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
        <Button title="Make Payment" onPress={handleSimulatePayment} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  orderItem: {
    marginBottom: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
  },
  productItem: {
    marginTop: 8,
  },
  totalContainer: {
    marginTop: 16,
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default Order;
