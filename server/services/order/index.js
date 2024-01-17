const { getProductById } = require("../products");
const { createUser, getUserById } = require("../users/index"); 
const orders = [];

const createOrder = (productIds, userId) => {
  try {
    console.log("Creating order with productIds:", productIds);

    const user = getUserById(userId);
    if (!user) {
      throw new Error(`User with ID ${userId} not found`);
    }

    const newOrder = {
      id: String(orders.length + 1),
      user,
      products: [],
      status: "Pending",
    };

    productIds.forEach((productId) => {
      const existingProductIndex = newOrder.products.findIndex(
        (product) => product.id === productId
      );

      if (existingProductIndex !== -1) {
        newOrder.products[existingProductIndex].quantity += 1;
      } else {
        const product = getProductById(productId);
        if (!product) {
          throw new Error(`Product with ID ${productId} not found`);
        }
        newOrder.products.push({ ...product, quantity: 1 });
      }
    });

    orders.push(newOrder);
    console.log(orders);
    return newOrder;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create order");
  }
};

const deleteOrder = (orderId, userId) => {
  try {
    console.log("Deleting order with ID:", orderId);
    console.log("Existing orders:", orders);

    const indexToDelete = orders.findIndex(
      (order) => order.id === String(orderId) && order.user.id === userId
    );

    if (indexToDelete === -1) {
      throw new Error("Order not found or unauthorized");
    }

    const deletedOrder = orders.splice(indexToDelete, 1)[0];

    return {
      id: deletedOrder.id,
      products: deletedOrder.products,
      status: deletedOrder.status,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete order");
  }
};


const getOrders = () => {
  return orders;
};

const resetOrder = () => {
  try {
    console.log("Resetting orders");
    orders.length = 0;
    return true;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to reset orders");
  }
};

module.exports = {
  createOrder,
  deleteOrder,
  getOrders,
  resetOrder,
};
