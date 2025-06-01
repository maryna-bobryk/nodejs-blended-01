import { readProducts } from '../utils/readProducts.js';

export const groupProductsByCategories = async () => {
  try {
    const allProducts = await readProducts();
    const groupedProducts = allProducts.reduce((acc, { category, name }) => {
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(name);
      return acc;
    }, {});
    console.log(groupedProducts);
  } catch (error) {
    console.log(error);
  }
};
(async () => {
  console.log(await groupProductsByCategories());
})();
