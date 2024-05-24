import express from 'express'
import { handleRequest } from './handleRequest'
import { routineController } from '../controllers'

const routineRouter = express.Router()

routineRouter.get('', handleRequest(routineController.getRoutines))
routineRouter.post('', handleRequest(routineController.addRoutine))
routineRouter.put('/:routineId/name', handleRequest(routineController.updateRoutineName))

export default routineRouter
