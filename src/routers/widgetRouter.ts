import express from 'express'
import { handleRequest } from './handleRequest'
import { widgetController } from '../controllers'

const widgetRouter = express.Router()

widgetRouter.post('', handleRequest(widgetController.addWidget))
widgetRouter.get('', handleRequest(widgetController.getWidgets))
widgetRouter.post('/update-widget', handleRequest(widgetController.updateWidget))
widgetRouter.put('/:widgetId/title', handleRequest(widgetController.updateTitle))

export default widgetRouter
