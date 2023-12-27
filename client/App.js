import AppNavigator from "./navigation/AppNavigator/AppNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App() {
  const client = new ApolloClient({
    uri: 'http://192.168.1.28:7000/graphql',
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
         <AppNavigator />
      </ApolloProvider>
    </>
  );
}
