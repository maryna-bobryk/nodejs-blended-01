import { writeFile } from 'node:fs/promises';
import { PATH_FILES_DIR } from '../constants/products.js';
import { readProducts } from '../utils/readProducts.js';
import path from 'node:path';

export const createProductsFiles = async () => {
  try {
    const allProducts = await readProducts();

    for (const product of allProducts) {
      const fileName =
        product.name.toLowerCase().split(' ').join('-') + '.json';
      const filePath = path.join(PATH_FILES_DIR, fileName);
      await writeFile(filePath, JSON.stringify(product, null, 2));
    }
  } catch (error) {
    console.log(error);
  }
};

createProductsFiles();
