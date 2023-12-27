const {
  getProducts,
  getProductById,
  createProduct,
} = require("../services");
const { createOrder, deleteOrder, getOrders, resetOrder } = require("../services/order");

const resolvers = {
  Query: {
    product: (_, { id }) => getProductById(id),
    products: (_, { searchTerm }) => getProducts(searchTerm),
    orders: () => getOrders(),
  },
  Mutation: {
    createProduct: (_, { input }) => createProduct(input),
    createOrder: (_, { productIds }) => createOrder(productIds),
    deleteOrder: (_, { orderId }) => deleteOrder(orderId),
    resetOrder: () => resetOrder(),
  },
};

module.exports = {
  resolvers,
};
