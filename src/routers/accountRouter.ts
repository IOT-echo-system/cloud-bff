import express from 'express'
import { handleRequest } from './handleRequest'
import { accountController } from '../controllers'

const accountRouter = express.Router()

accountRouter.get('', handleRequest(accountController.getAccountsWithRoles))
accountRouter.post('', handleRequest(accountController.addAccount))

export default accountRouter
