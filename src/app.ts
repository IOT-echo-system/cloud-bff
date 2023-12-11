import type { Response, Request } from 'express'
import express from 'express'
import router from './router'

const app = express()
app.use(express.json())
app.get('/', (_req: Request, res: Response) => {
  res.send({ message: 'Hello human, you have just arrived at cloud-bff' })
})

app.use('/api', router)

export default app
