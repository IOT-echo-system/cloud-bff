import express from 'express'
import { handleRequest } from './handleRequest'
import { zoneController } from '../controllers'

const zoneRouter = express.Router()

zoneRouter.post('/:premisesId/zones', handleRequest(zoneController.addZone))
zoneRouter.get('/:premisesId/zones', handleRequest(zoneController.getZonesByPremises))
zoneRouter.put('/:premisesId/zones/:zoneId/name', handleRequest(zoneController.updateZoneName))

export default zoneRouter
