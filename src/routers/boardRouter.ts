import express from 'express'
import { handleRequest } from './handleRequest'
import { boardController } from '../controllers'

const boardRouter = express.Router()

boardRouter.get('', handleRequest(boardController.getBoards))
boardRouter.post('', handleRequest(boardController.addBoard))
boardRouter.put('/:boardId/name', handleRequest(boardController.updateBoardName))
boardRouter.get('/:boardId/secret-key', handleRequest(boardController.getSecretKey))
boardRouter.put('/:boardId/secret-key', handleRequest(boardController.updateSecretKey))

export default boardRouter
