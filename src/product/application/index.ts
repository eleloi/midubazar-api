import { type Product } from '../domain/index.ts'

export interface ProductRepo {
  allProducts: () => Promise<Product[]>
  search: ({ q }: { q: string }) => Promise<Product[]>
  getId: ({
    productId
  }: {
    productId: Product['id']
  }) => Promise<Product | null>
}

export async function allProducts(repo: ProductRepo) {
  return await repo.allProducts()
}

export async function search({ repo, q }: { repo: ProductRepo; q: string }) {
  return await repo.search({ q })
}

export async function getId({ repo, id }: { repo: ProductRepo; id: string }) {
  const productId = +id
  return await repo.getId({ productId })
}
