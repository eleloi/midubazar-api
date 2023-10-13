import { type Product } from '../domain/index.ts'

interface ProductRepo {
  allProducts: () => Promise<Product[]>
  search: ({ q }: { q: string }) => Promise<Product[]>
}

export async function allProducts(repo: ProductRepo) {
  return await repo.allProducts()
}

export async function search({ repo, q }: { repo: ProductRepo; q: string }) {
  return await repo.search({ q })
}
