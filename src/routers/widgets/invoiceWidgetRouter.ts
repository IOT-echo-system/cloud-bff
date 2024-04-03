import express from 'express'
import { invoiceWidgetController } from '../../controllers/widgets'
import { handleRequest } from '../handleRequest'

const invoiceWidgetRouter = express.Router()

invoiceWidgetRouter.put('/:widgetId/title', handleRequest(invoiceWidgetController.updateTitle))
invoiceWidgetRouter.get('/:widgetId/seed', handleRequest(invoiceWidgetController.getSeedData))
invoiceWidgetRouter.post('/:widgetId/seed', handleRequest(invoiceWidgetController.addSeedData))

export default invoiceWidgetRouter
