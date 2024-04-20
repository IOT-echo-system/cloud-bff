import express from 'express'
import { collectionOfButtonsWidgetController } from '../../controllers/widgets'
import { handleRequest } from '../handleRequest'

const collectionOfButtonsWidgetRouter = express.Router()

collectionOfButtonsWidgetRouter.post('/:widgetId/buttons', handleRequest(collectionOfButtonsWidgetController.addButton))

export default collectionOfButtonsWidgetRouter
