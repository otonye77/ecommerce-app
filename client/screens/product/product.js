import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphql/query";
import { Searchbar, Button, Menu, Divider, Provider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Product = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState("default");
  const { loading, error, data } = useQuery(GET_ALL_PRODUCTS, {
    variables: { searchTerm: searchQuery }, 
  });


  const navigation = useNavigation();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const products = data?.products || [];

  return (
    <Provider>
      <View style={{ flex: 1, marginHorizontal: 10, marginVertical: 20 }}>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 80,
            right: 20,
            backgroundColor: "#EEE7F5",
            borderRadius: 50,
            width: 60,
            height: 60,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
          }}
          onPress={() => navigation.navigate("Order")}
        >
          <Text style={{ color: "black" }}>Go to order</Text>
        </TouchableOpacity>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <Text>Sort By: </Text>
        </View>

        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProductDetails", { product: item });
              }}
              style={styles.productItem}
            >
              <Image source={{ uri: item.photo }} style={styles.productImage} />
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>${item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  productItem: {
    marginVertical: 10,
    padding: 10,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
  },
  productImage: {
    width: "100%",
    height: 500,
    borderRadius: 5,
    marginBottom: 5,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#888",
  },
});

export default Product;
