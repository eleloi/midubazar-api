import { Router } from 'express'

import { allProducts } from '@/product/application/all-products.ts'
import { productRepo } from '@/product/infrastructure/json-repo/index.ts'

export function createRouter() {
  const router = Router()

  router.get('/', async (req, res) => {
    const products = await allProducts(productRepo)
    res.json(products)
  })

  return router
}
