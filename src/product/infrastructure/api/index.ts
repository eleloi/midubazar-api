import express, { json } from 'express'

import { createRouter } from './routes.ts'

export function createApp() {
  const app = express()
  app.use(json())
  app.disable('x-powered-by')

  const router = createRouter()
  app.use('/api/items', router)

  return app
}
