import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "http://localhost:3000/graphql", // Ganti dengan URL server GraphQL Anda
  cache: new InMemoryCache(),
});

export default apolloClient;
