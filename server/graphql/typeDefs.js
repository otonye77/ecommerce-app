const { gql } = require('graphql-tag');

const typeDefs = gql`
  type Product {
    id: String!
    name: String!
    price: Float!
    photo: String
    description: String
  }
  type Query {
    product(id: String): Product
    products(searchTerm: String): [Product]!
  }
`;

module.exports = {
    typeDefs
};
