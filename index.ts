import logger from 'logging-starter'
import app from './src/app'
import wss from './src/websocketServer'
import { mockServer } from './src/mocks/node'

const port = Number(process.env.PORT ?? '3001')

if (process.env.ENV === 'development') {
  mockServer.listen()
}

const server = app.listen(port, () => {
  logger.info({ message: `cloud bff is started on port ${port}` })
})

server.on('upgrade', wss.listener(app))
