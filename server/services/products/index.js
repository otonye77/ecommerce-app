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

module.exports = {
  getProducts,
};
