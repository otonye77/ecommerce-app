const { gql } = require("graphql-tag");

const typeDefs = gql`
  type Product {
    id: String!
    name: String!
    price: Float!
    photo: String
    description: String
  }

  type User {
    id: String!
    username: String!
    email: String!
    orders: [Order]
  }

  input UserInput {
    username: String!
    email: String!
  }

  input ProductInput {
    name: String!
    price: Float!
    photo: String
    description: String
  }

  type OrderProduct {
    id: String!
    name: String!
    price: Float!
    photo: String
    description: String
    quantity: Int!
  }

  type Order {
    id: String!
    user: User!
    products: [OrderProduct]!
    status: String!
  }

  type Query {
    product(id: String): Product
    products(searchTerm: String): [Product]!
    orders: [Order]!
  }

  type Mutation {
    createProduct(input: ProductInput): Product!
    createUser(input: UserInput): User!
    createOrder(productIds: [String]!): Order!
    deleteOrder(orderId: String!): OrderDeletionResponse
    resetOrder: Boolean
  }

  type OrderDeletionResponse {
    id: String!
    products: [OrderProduct]!
    status: String!
  }
`;

module.exports = {
  typeDefs,
};
