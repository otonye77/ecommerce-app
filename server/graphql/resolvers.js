const { getProducts } = require("../services");

const resolvers = {
  Query: {
    products: (_, { searchTerm }) => getProducts(searchTerm),
  },
};

module.exports = {
  resolvers,
};