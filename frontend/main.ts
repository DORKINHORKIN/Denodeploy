Deno.serve({ port: 8000 }, (req) => {
  const url = new URL(req.url)
  if (url.pathname === '/' || url.pathname === '/index.html') {
    return new Response(Deno.readTextFileSync('./frontend/index.html'), {
      headers: { 'content-type': 'text/html' }
    })
  }
  return new Response('Not found', { status: 404 })
})
