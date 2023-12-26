import express from 'express'
import { handleRequest } from './handleRequest'
import { authController } from '../controllers'

const authRouter = express.Router()

authRouter.post('/sign-up', handleRequest(authController.signUp))
authRouter.post('/login', handleRequest(authController.login))
authRouter.post('/generate-otp', handleRequest(authController.generateOtp))
authRouter.post('/verify-otp', handleRequest(authController.verifyOtp))
authRouter.post('/reset-password', handleRequest(authController.resetPassword))

export default authRouter
