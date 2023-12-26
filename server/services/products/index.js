const { productData } = require("../../productData");

const getProducts = (searchTerm) => {
  try {
    if (!searchTerm) {
      return productData;
    }
    const searchTermLowerCase = searchTerm.toLowerCase();
    const filteredProducts = productData.filter((product) => {
      const nameLowerCase = product.name.toLowerCase();
      return nameLowerCase.includes(searchTermLowerCase);
    });
    return filteredProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const getProductById = (id) => {
  try {
    const product = productData.find((p) => p.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error) {
    console.log(error);
  }
};

const createProduct = (input) => {
  try {
    const newProduct = {
      id: String(productData.length + 1),
      ...input,
    };
    productData.push(newProduct);
    return newProduct;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create product");
  }
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
};
