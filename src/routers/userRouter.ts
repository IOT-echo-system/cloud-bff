import express from 'express'
import { handleRequest } from './handleRequest'
import { userController } from '../controllers'

const userRouter = express.Router()

userRouter.post('/registration', handleRequest(userController.registration))
userRouter.get('/me', handleRequest(userController.me))

export default userRouter
