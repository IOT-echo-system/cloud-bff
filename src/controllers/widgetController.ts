import { widgetService } from '../services'
import type { Widget } from '../typing/widget'
import type { Request } from 'express'

export const widgetController = {
  addWidget(request: Request): Promise<Widget> {
    return widgetService.addWidget(request)
  }
} as const
