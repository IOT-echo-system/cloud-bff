import express from 'express'
import { handleRequest } from './handleRequest'
import { premisesController } from '../controllers'

const premisesRouter = express.Router()

premisesRouter.post('', handleRequest(premisesController.addPremises))
premisesRouter.get('', handleRequest(premisesController.getPremises))
premisesRouter.put('/:projectId/name', handleRequest(premisesController.updateProjectName))

export default premisesRouter
