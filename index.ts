import Elysia from 'elysia'

const app = new Elysia()
  .mount('/', (response) => {
    return new Response(`I was a ${response.method} request`)
  })

app.listen(3000)
console.log('Server is running on http://localhost:3000')
