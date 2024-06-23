import { WidgetService } from '../services'
import type { Widget } from '../typing/widget'
import type { Request } from 'express'
import type { WSData } from '../websocketServer'
import wss from '../websocketServer'

export const widgetController = {
  addWidget(request: Request): Promise<Widget> {
    return WidgetService.addWidget(request)
  },

  updateTitle(request: Request): Promise<Widget> {
    return WidgetService.updateTitle(request)
  },

  updateWidget(request: Request): Promise<WSData> {
    return new Promise(resolve => {
      resolve(wss.updateWidget(request.body as Widget))
    })
  }
} as const
