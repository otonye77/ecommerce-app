import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "../../screens/product/product";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
