import express from 'express'
import { handleRequest } from './handleRequest'
import { userController } from '../controllers'

const userRouter = express.Router()

userRouter.post('/registration', handleRequest(userController.registration))

export default userRouter
