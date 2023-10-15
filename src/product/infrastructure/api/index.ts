import express, { json } from 'express'
import audit from 'express-requests-logger'

import { createRouter } from './routes.ts'

export function createApp() {
  const app = express()
  app.use(json())
  app.use(audit())
  app.disable('x-powered-by')

  const router = createRouter()
  app.use('/api/items', router)

  return app
}
