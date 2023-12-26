const { getProducts, getProductById } = require("../services");

const resolvers = {
  Query: {
    product: (_, { id }) => getProductById(id),
    products: (_, { searchTerm }) => getProducts(searchTerm),
  },
};

module.exports = {
  resolvers,
};
