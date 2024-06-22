import { WidgetService } from '../services'
import type { MqttPacket, Widget } from '../typing/widget'
import type { Request } from 'express'
import { MqttClient } from '../mqtt'

export const widgetController = {
  addWidget(request: Request): Promise<Widget> {
    return WidgetService.addWidget(request)
  },

  updateTitle(request: Request): Promise<Widget> {
    return WidgetService.updateTitle(request)
  },

  updateWidget(request: Request): Promise<MqttPacket> {
    return MqttClient.getInstance().updateWidget(request.body as Widget)
  }
} as const
