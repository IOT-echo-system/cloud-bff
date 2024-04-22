import type { Request } from 'express'
import { collectionOfButtonsWidgetService } from '../../services/widgets'
import type { Widget } from '../../typing/widget'

export const collectionOfButtonsWidgetController = {
  addButton(request: Request): Promise<Widget> {
    return collectionOfButtonsWidgetService.addButton(request)
  },

  updateButton(request: Request): Promise<Widget> {
    return collectionOfButtonsWidgetService.updateButton(request)
  },

  deleteButton(request: Request): Promise<Widget> {
    return collectionOfButtonsWidgetService.deleteButton(request)
  },

  updateButtonValue(request: Request): Promise<Widget> {
    return collectionOfButtonsWidgetService.updateButtonValue(request)
  }
} as const
