const { getProductById } = require("../products");
const orders = [];
const createOrder = (productIds) => {
  try {
    console.log('Creating order with productIds:', productIds);
    const products = productIds.map((productId) => getProductById(productId));
    if (products.some((product) => !product)) {
      throw new Error("One or more products not found");
    }

    const newOrder = {
      id: String(orders.length + 1),
      products,
      status: "Pending",
    };

    orders.push(newOrder);
    return newOrder;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create order");
  }
};

module.exports = {
    createOrder
}
