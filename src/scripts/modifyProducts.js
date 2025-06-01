import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const modifyProducts = async () => {
  try {
    const allProducts = await readProducts();
    const modifyProducts = allProducts.map(({ description, ...rest }) => rest);
    await writeProducts(modifyProducts);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  console.log('modify Products:', await modifyProducts());
  await modifyProducts();
})();
