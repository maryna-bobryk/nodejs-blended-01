import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    if (!data) return [];
    const products = JSON.parse(data);
    return products;
  } catch (error) {
    console.log(error);
    return [];
  }
};
