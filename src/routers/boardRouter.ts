import express from 'express'
import { handleRequest } from './handleRequest'
import { boardController } from '../controllers'

const boardRouter = express.Router()

boardRouter.post('/:premisesId/boards', handleRequest(boardController.addBoard))
boardRouter.get('/:premisesId/boards', handleRequest(boardController.getBoardsByPremises))

export default boardRouter
