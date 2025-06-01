import { readProducts } from '../utils/readProducts.js';

export const getUniqueCategories = async () => {
  try {
    const allProducts = await readProducts();

    const uniqueCategories = allProducts.reduce((acc, product) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []);

    return uniqueCategories;
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  const uniqueCategories = await getUniqueCategories();
  console.log(uniqueCategories);
})();
