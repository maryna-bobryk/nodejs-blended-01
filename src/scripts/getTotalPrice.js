import { readProducts } from '../utils/readProducts.js';

export const getTotalPrice = async () => {
  try {
    const allProducts = await readProducts();
    const totalPrice = allProducts.reduce(
      (acc, product) => (acc += Number(product.price)),
      0,
    );
    return Math.ceil(totalPrice);
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  console.log('total Price:', await getTotalPrice());
})();
