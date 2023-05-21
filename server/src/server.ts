import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // toda URL de front-end pode acessar meu back-end
  // em produção, substutuir o 'true' para o endereço da aplicação
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('http server runing on http://localhost:3333')
  })
