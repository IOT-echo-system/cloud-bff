import express from 'express'
import { invoiceWidgetController } from '../../controllers/widgets'
import { handleRequest } from '../handleRequest'

const invoiceWidgetRouter = express.Router()

invoiceWidgetRouter.put('/:widgetId/title', handleRequest(invoiceWidgetController.updateTitle))

export default invoiceWidgetRouter