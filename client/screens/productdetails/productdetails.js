import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../../graphql/mutation";


const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const [createOrderMutation] = useMutation(CREATE_ORDER);

   const handleAddToOrder = async () => {
     try {
      const response = await createOrderMutation({
        variables: {productIds: [product.id]}
      })
      console.log("Order created:", response.data.createOrder);
     } catch (error) {
      console.error("Error adding product to order:", error.message);
     }
   }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.photo }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <Button onPress={handleAddToOrder}>Add to Cart</Button>
      {/* <Button onPress={handleAddToOrder}>Add To Order</Button> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  productImage: {
    width: "100%",
    height: 500,
    borderRadius: 8,
    marginBottom: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3498db", // Set the desired color
  },
});

export default ProductDetails;
