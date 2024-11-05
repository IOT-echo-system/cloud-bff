import express from 'express'
import { handleRequest } from './handleRequest'
import { authController } from '../controllers'

const authRouter = express.Router()

authRouter.post('/login', handleRequest(authController.login))
authRouter.post('/generate-otp', handleRequest(authController.generateOtp))
authRouter.post('/verify-otp', handleRequest(authController.verifyOtp))
authRouter.post('/reset-password', handleRequest(authController.resetPassword))
authRouter.get('/validate', handleRequest(authController.validate))
authRouter.post('/update-token', handleRequest(authController.updateToken))
authRouter.get('/user-details', handleRequest(authController.getUserDetails))
authRouter.get('/logout', handleRequest(authController.logout))

export default authRouter
