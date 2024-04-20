import { apiConfig } from '../../config/apiConfig'
import type { Request } from 'express'
import WebClient from '../webClient'
import { widgetConfig } from './widgetConfig'
import type { Widget } from '../../typing/widget'

const collectionOfButtonsConfig = widgetConfig.collectionOfButtons
const baseUrl = apiConfig.widgets.baseUrl + collectionOfButtonsConfig.baseUrl

export const collectionOfButtonsWidgetService = {
  addButton(request: Request): Promise<Widget> {
    return WebClient.post<Widget>({
      baseUrl: baseUrl,
      path: collectionOfButtonsConfig.buttons,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }
} as const
