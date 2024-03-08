import type { Request, Response } from 'express'
import express from 'express'
import router from './router'
import { attachTraceId, logRequestAndResponse } from './middleware/logger'
import { HttpStatus } from './config/http'
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(cors({ origin: 'http://localhost:3000' }))

app.get('/', (_req: Request, res: Response) => {
  res.send({ message: 'Hello human, you have just arrived at cloud-bff' })
})

app.use(attachTraceId)
app.use(logRequestAndResponse)
app.use('/api', router)

app.use((_req: Request, res: Response) => {
  res.status(HttpStatus.NOT_FOUND).send({ message: 'Method not found!' })
})

export default app
