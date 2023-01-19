import Fastify from "fastify";

const app = Fastify()

/**
 *  Método HTTP: get, post, put, patch, delete
 */

app.get('/hello', () => {
    return 'Hello world'
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP server running')
})