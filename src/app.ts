import { createApp } from './product/infrastructure/api/index.js'

const PORT = process.env.PORT ?? 4321

const app = createApp()
console.log('running')

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
