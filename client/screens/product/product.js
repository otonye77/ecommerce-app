import { Text, View } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCTS } from "../../graphql/query";


const Product = () => {
  const {loading, error, data} = useQuery(GET_ALL_PRODUCTS, {
    variables: {searchTerm: ''}
  })
  console.log(data);
  return (
    <View>
      <Text>This is the product page</Text>
    </View>
  );
};

export default Product;
