import express from 'express'
import { handleRequest } from './handleRequest'
import { authController } from '../controllers'

const authRouter = express.Router()

authRouter.post('/sign-up', handleRequest(authController.signUp))
authRouter.post('/login', handleRequest(authController.login))

export default authRouter
