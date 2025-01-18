import express from 'express'
import { handleRequest } from './handleRequest'
import { feedController } from '../controllers'

const feedRouter = express.Router()

feedRouter.post('', handleRequest(feedController.addFeed))
feedRouter.get('', handleRequest(feedController.getFeeds))
feedRouter.put('/:feedId/name', handleRequest(feedController.updateName))

export default feedRouter
