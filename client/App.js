import AppNavigator from "./navigation/AppNavigator/AppNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export default function App() {
  const client = new ApolloClient({
    uri: 'http://172.20.10.2:5000/graphql',
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
