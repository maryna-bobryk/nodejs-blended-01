import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  const allProducts = await readProducts();
  for (let i = 0; i < number; i++) {
    const newProduct = createFakeProduct();
    allProducts.push(newProduct);
  }

  try {
    await writeProducts(allProducts);
  } catch (error) {
    console.log(error);
  }
};

generateProducts(10);
