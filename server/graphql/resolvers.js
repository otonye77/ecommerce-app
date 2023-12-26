const {
  getProducts,
  getProductById,
  createProduct,
} = require("../services");
const { createOrder } = require("../services/order");

const resolvers = {
  Query: {
    product: (_, { id }) => getProductById(id),
    products: (_, { searchTerm }) => getProducts(searchTerm),
  },
  Mutation: {
    createProduct: (_, { input }) => createProduct(input),
    createOrder: (_, { productIds }) => createOrder(productIds),
  },
};

module.exports = {
  resolvers,
};
