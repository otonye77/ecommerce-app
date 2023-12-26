const { gql } = require('graphql-tag');

const typeDefs = gql`

  type Product {
    id: String!
    name: String!
    price: Float!
    photo: String
    description: String
  }

  input ProductInput {
    name: String!
    price: Float!
    photo: String
    description: String
  }

  type Order {
    id: String!
    products: [Product]!
    status: String!
  }

  type Query {
    product(id: String): Product
    products(searchTerm: String): [Product]!
  }

  type Mutation {
    createProduct(input: ProductInput): Product!
    createOrder(productIds: [String]!): Order!
  }

`;

module.exports = {
    typeDefs
};
