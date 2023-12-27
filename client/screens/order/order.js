import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_ORDERS } from "../../graphql/query";

const Order = () => {
  const { loading, error, data, refetch } = useQuery(GET_ORDERS);

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

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const orders = data?.orders || [];

  console.log("These are the orders", orders);

  return (
    <FlatList
      style={styles.container}
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
                <Text>Quantity: {product.quantity}</Text>
              </View>
            )}
          />
        </View>
      )}
    />
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
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});

export default Order;
