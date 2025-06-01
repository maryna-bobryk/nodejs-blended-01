import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

export const writeProducts = async (newProducts) => {
  const products = JSON.stringify(newProducts, null, 2);
  try {
    await fs.writeFile(PATH_DB, products, 'utf-8');
  } catch (error) {
    console.log(error);
  }
};
