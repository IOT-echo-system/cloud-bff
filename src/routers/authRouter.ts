import type { Request, Response } from 'express'
import express from 'express'
import type { Document } from '../typing'
import { authController } from './controller'

const authRouter = express.Router()

authRouter.post('/sign-up', (req: Request, res: Response) => {
  authController.signUp(req.body as Document).then(data => res.send(data))
})

authRouter.post('/login', (req: Request, res: Response) => {
  authController.login(req.body as Document).then(data => res.send(data))
})

export default authRouter
