import type { Response, Request } from 'express'
import express from 'express'
import router from './router'
import { logRequestAndResponse } from './middleware/logger'

const app = express()
app.use(express.json())
app.get('/', (_req: Request, res: Response) => {
  res.send({ message: 'Hello human, you have just arrived at cloud-bff' })
})

app.use(logRequestAndResponse)
app.use('/api', router)

app.use((_req: Request, res: Response) => {
  res.status(404).send({ message: 'invalid request' })
})

export default app
