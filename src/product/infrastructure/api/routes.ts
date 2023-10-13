import { Router } from 'express'

import { search, getId } from '@/product/application/index.ts'
import { productRepo } from '@/product/infrastructure/json-repo/index.ts'

export function createRouter() {
  const router = Router()

  router.get('/', async (req, res) => {
    const q = req.query.q
    if (q !== undefined && typeof q === 'string') {
      const products = await search({ q, repo: productRepo })
      res.json(products)
      return
    }
    res.json([])
  })

  router.get('/:id', async (req, res) => {
    const id = req.params.id

    const product = await getId({ repo: productRepo, id })
    if (product === null) {
      res.status(404).json({ error: 'Product not found' })
      return
    }
    res.json(product)
  })

  return router
}
