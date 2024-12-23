import express from 'express'
import { handleRequest } from './handleRequest'
import { premisesController } from '../controllers'

const premisesRouter = express.Router()

premisesRouter.post('', handleRequest(premisesController.addPremises))
premisesRouter.get('', handleRequest(premisesController.getPremises))
premisesRouter.get('/:premisesId', handleRequest(premisesController.getPremisesDetails))
premisesRouter.put('/:premisesId', handleRequest(premisesController.updatePremisesDetails))

export default premisesRouter
