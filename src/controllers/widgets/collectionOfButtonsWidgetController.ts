import type { Request } from 'express'
import { collectionOfButtonsWidgetService } from '../../services/widgets'
import type { Widget } from '../../typing/widget'

export const collectionOfButtonsWidgetController = {
  addButton(request: Request): Promise<Widget> {
    return collectionOfButtonsWidgetService.addButton(request)
  }
} as const
