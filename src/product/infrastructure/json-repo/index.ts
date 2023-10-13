import { type Product, validateProducts } from '@/product/domain/index.ts'

import data from './products.json'

if (!validateProducts(data.products)) {
  throw new Error('Invalid data')
}

async function allProducts() {
  return data.products as Product[]
}

export const productRepo = {
  allProducts
}
