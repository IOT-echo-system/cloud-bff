import { WidgetService } from '../services'
import type { Widget } from '../typing/widget'
import type { Request } from 'express'

export const widgetController = {
  addWidget(request: Request): Promise<Widget> {
    return WidgetService.addWidget(request)
  },

  updateTitle(request: Request): Promise<Widget> {
    return WidgetService.updateTitle(request)
  }
} as const
