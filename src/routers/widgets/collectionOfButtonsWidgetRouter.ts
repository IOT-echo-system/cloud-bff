import express from 'express'
import { collectionOfButtonsWidgetController } from '../../controllers/widgets'
import { handleRequest } from '../handleRequest'

const collectionOfButtonsWidgetRouter = express.Router()

collectionOfButtonsWidgetRouter.post('/:widgetId/buttons', handleRequest(collectionOfButtonsWidgetController.addButton))
collectionOfButtonsWidgetRouter.put(
  '/:widgetId/buttons/:buttonId',
  handleRequest(collectionOfButtonsWidgetController.updateButton)
)
collectionOfButtonsWidgetRouter.delete(
  '/:widgetId/buttons/:buttonId',
  handleRequest(collectionOfButtonsWidgetController.deleteButton)
)
collectionOfButtonsWidgetRouter.put(
  '/:widgetId/buttons/:buttonId/value',
  handleRequest(collectionOfButtonsWidgetController.updateButtonValue)
)

export default collectionOfButtonsWidgetRouter
