// resolvers.js

const {
  getProducts,
  getProductById,
  createProduct,
} = require("../services");

const {
  createOrder,
  deleteOrder,
  getOrders,
  resetOrder,
} = require("../services/order");

const { createUser, getUserById } = require("../services/users/index");

const resolvers = {
  Query: {
    product: (_, { id }) => getProductById(id),
    products: (_, { searchTerm }) => getProducts(searchTerm),
    orders: () => getOrders(),
  },
  Mutation: {
    createUser: (_, { input }) => createUser(input),
    createProduct: (_, { input }) => createProduct(input),
    createOrder: (_, { productIds, userId }) => createOrder(productIds, userId),
    deleteOrder: (_, { orderId, userId }) => deleteOrder(orderId, userId),
    resetOrder: () => resetOrder(),
  },
};

module.exports = {
  resolvers,
};
