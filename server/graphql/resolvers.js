const { getProducts, getProductById, createProduct } = require("../services");

const resolvers = {
  Query: {
    product: (_, { id }) => getProductById(id),
    products: (_, { searchTerm }) => getProducts(searchTerm),
  },
  Mutation: {
    createProduct: (_, {input}) => createProduct(input)
  }
};

module.exports = {
  resolvers,
};
