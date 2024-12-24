import express from 'express'
import { handleRequest } from './handleRequest'
import { zoneController } from '../controllers'

const zoneRouter = express.Router()

zoneRouter.post('', handleRequest(zoneController.addZone))

export default zoneRouter
