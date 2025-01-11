import express from 'express'
import { handleRequest } from './handleRequest'
import { zoneController } from '../controllers'

const zoneRouter = express.Router()

zoneRouter.post('', handleRequest(zoneController.addZone))
zoneRouter.get('', handleRequest(zoneController.getZonesByPremises))
zoneRouter.put('/:zoneId/name', handleRequest(zoneController.updateZoneName))

export default zoneRouter
