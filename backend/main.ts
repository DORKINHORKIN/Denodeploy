import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/api', (c) => {
  return c.json({ message: 'Hello from API' })
})

Deno.serve({ port: 3000 }, app.fetch)
