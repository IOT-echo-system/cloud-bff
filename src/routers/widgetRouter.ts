import express from 'express'
import { handleRequest } from './handleRequest'
import { widgetController } from '../controllers'
import { invoiceWidgetRouter } from './widgets'

const widgetRouter = express.Router()

widgetRouter.post('', handleRequest(widgetController.addWidget))
widgetRouter.put('/:widgetId/title', handleRequest(widgetController.updateTitle))
widgetRouter.use('/invoices', invoiceWidgetRouter)

export default widgetRouter
