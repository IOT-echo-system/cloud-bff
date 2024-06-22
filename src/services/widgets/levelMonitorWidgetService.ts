import { apiConfig } from '../../config/apiConfig'
import type { Request } from 'express'
import WebClient from '../webClient'
import { widgetConfig } from './widgetConfig'
import type { LevelMonitorWidget } from '../../typing/widgets'
import { MqttClient } from '../../mqtt'

const levelMonitorConfig = widgetConfig.levelMonitor
const baseUrl = apiConfig.widgets.baseUrl + levelMonitorConfig.baseUrl
const mqtt = MqttClient.getInstance()

export const levelMonitorWidgetService = {
  async updateValues(request: Request): Promise<LevelMonitorWidget> {
    const widget = await WebClient.put<LevelMonitorWidget>({
      baseUrl: baseUrl,
      path: levelMonitorConfig.updateValues,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>,
      body: request.body as Record<string, unknown>
    })
    await mqtt.updateWidget(widget)
    return widget
  },

  async captureValue(request: Request): Promise<LevelMonitorWidget> {
    const widget = await WebClient.put<LevelMonitorWidget>({
      baseUrl: baseUrl,
      path: levelMonitorConfig.captureValue,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>,
      body: request.body as Record<string, unknown>
    })
    await mqtt.updateWidget(widget)
    return widget
  }
} as const
