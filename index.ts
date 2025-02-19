import Elysia from 'elysia'

const app = new Elysia()
  .mount('/*', (request) => {
    console.log(request.method)
    return new Response(`I was a ${request.method} request`)
  })

app.listen(3000)
console.log('Server is running on http://localhost:3000')
