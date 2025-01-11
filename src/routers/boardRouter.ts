import express from 'express'
import { handleRequest } from './handleRequest'
import { boardController } from '../controllers'

const boardRouter = express.Router()

boardRouter.post('', handleRequest(boardController.addBoard))
boardRouter.get('', handleRequest(boardController.getBoardsByPremises))
boardRouter.put('/:boardId/name', handleRequest(boardController.updateBoardName))

export default boardRouter
