import { Hono } from 'hono'
import { serveStatic } from 'hono/deno'

const app = new Hono()

// Serve the main index.html at root and /index.html
app.get('/', (c) => {
  const html = Deno.readTextFileSync('./frontend/index.html')
  return c.html(html)
})

app.get('/index.html', (c) => {
  const html = Deno.readTextFileSync('./frontend/index.html')
  return c.html(html)
})

// Optional: Add a health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', service: 'frontend' })
})

Deno.serve({ port: 8000 }, app.fetch)
