import express from 'express'
import { levelMonitorWidgetController } from '../../controllers/widgets'
import { handleRequest } from '../handleRequest'

const levelMonitorWidgetRouter = express.Router()

levelMonitorWidgetRouter.put('/:widgetId/values', handleRequest(levelMonitorWidgetController.updateValues))

export default levelMonitorWidgetRouter
