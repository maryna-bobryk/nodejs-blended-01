import { readProducts } from '../utils/readProducts.js';

export const getProductsByMinPrice = async (minPrice) => {
  try {
    const allProducts = await readProducts();
    const filteredProducts = allProducts.filter(
      (product) => product.price >= minPrice,
    );
    return filteredProducts;
  } catch (error) {
    console.log(error);
    return [];
  }
};

(async () => {
  const minPrice = 100;
  const filteredProducts = await getProductsByMinPrice(minPrice);
  console.log(filteredProducts);
})();
