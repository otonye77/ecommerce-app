import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "../../screens/product/product";
import ProductDetails from "../../screens/productdetails/productdetails";
import Order from "../../screens/order/order";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "black",
        }}
      >
        <Stack.Screen name="Products" component={Product} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Order" component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
