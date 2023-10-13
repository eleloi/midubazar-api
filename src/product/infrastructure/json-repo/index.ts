import { type Product, validateProducts } from '@/product/domain/index.ts'
import { type ProductRepo } from '@/product/application/index.ts'

import data from './products.json'

if (!validateProducts(data.products)) {
  throw new Error('Invalid data')
}

async function allProducts() {
  return data.products as Product[]
}

async function search({ q }: { q: string }) {
  const parsedQ = q.toLowerCase().trim()
  return data.products.filter((product) => {
    const title = product.title.toLowerCase()
    const description = product.description.toLowerCase()
    return title.includes(parsedQ) ?? description.includes(parsedQ)
  })
}

async function getId({ productId }: { productId: Product['id'] }) {
  return data.products.find((product) => product.id === productId) ?? null
}

export const productRepo: ProductRepo = {
  allProducts,
  search,
  getId
}
