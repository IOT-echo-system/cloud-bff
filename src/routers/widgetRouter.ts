import express from 'express'
import { handleRequest } from './handleRequest'
import { widgetController } from '../controllers'
import { collectionOfButtonsWidgetRouter, invoiceWidgetRouter, levelMonitorWidgetRouter } from './widgets'

const widgetRouter = express.Router()

widgetRouter.post('', handleRequest(widgetController.addWidget))
widgetRouter.post('/update-widget', handleRequest(widgetController.updateWidget))
widgetRouter.put('/:widgetId/title', handleRequest(widgetController.updateTitle))
widgetRouter.use('/invoices', invoiceWidgetRouter)
widgetRouter.use('/collection-of-buttons', collectionOfButtonsWidgetRouter)
widgetRouter.use('/level-monitor', levelMonitorWidgetRouter)

export default widgetRouter
