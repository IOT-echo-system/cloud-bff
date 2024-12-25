import express from 'express'
import { handleRequest } from './handleRequest'
import { masterController } from '../controllers'

const masterRouter = express.Router()

masterRouter.get('/boards', handleRequest(masterController.getBoards))
masterRouter.get('/locations/:pincode', handleRequest(masterController.getLocation))

export default masterRouter
