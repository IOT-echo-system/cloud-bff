import express from 'express'
import { handleRequest } from './handleRequest'
import { widgetController } from '../controllers'
import { invoiceWidgetRouter } from './widgets'

const widgetRouter = express.Router()

widgetRouter.post('', handleRequest(widgetController.addWidget))
widgetRouter.use('/invoices', invoiceWidgetRouter)

export default widgetRouter
