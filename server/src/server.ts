import Fastify from "fastify"
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

/**
 *  Método HTTP: get, post, put, patch, delete
 */

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()

    return habits
})

app.listen({
    port: 3333
}).then(() => {
    console.log('HTTP server running')
})