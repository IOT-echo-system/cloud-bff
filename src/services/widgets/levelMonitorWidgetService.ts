import { apiConfig } from '../../config/apiConfig'
import type { Request } from 'express'
import WebClient from '../webClient'
import { widgetConfig } from './widgetConfig'
import type { LevelMonitorWidget } from '../../typing/widgets'

const levelMonitorConfig = widgetConfig.levelMonitor
const baseUrl = apiConfig.widgets.baseUrl + levelMonitorConfig.baseUrl

export const levelMonitorWidgetService = {
  updateValues(request: Request): Promise<LevelMonitorWidget> {
    return WebClient.put<LevelMonitorWidget>({
      baseUrl: baseUrl,
      path: levelMonitorConfig.updateValues,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>,
      body: request.body as Record<string, unknown>
    })
  }
} as const
