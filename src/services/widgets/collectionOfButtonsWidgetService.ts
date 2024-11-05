import { apiConfig } from '../../config/apiConfig'
import type { Request } from 'express'
import WebClient from 'web-client-starter'
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
  },

  updateButton(request: Request): Promise<Widget> {
    return WebClient.put<Widget>({
      baseUrl: baseUrl,
      path: collectionOfButtonsConfig.button,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId, buttonId: request.params.buttonId } as Record<string, string>,
      body: request.body as Record<string, string>
    })
  },

  deleteButton(request: Request): Promise<Widget> {
    return WebClient.deleteAPI<Widget>({
      baseUrl: baseUrl,
      path: collectionOfButtonsConfig.button,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId, buttonId: request.params.buttonId } as Record<string, string>
    })
  },

  updateButtonValue(request: Request): Promise<Widget> {
    return WebClient.put<Widget>({
      baseUrl: baseUrl,
      path: collectionOfButtonsConfig.buttonValue,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId, buttonId: request.params.buttonId } as Record<string, string>,
      body: request.body as Record<string, unknown>
    })
  }
} as const
