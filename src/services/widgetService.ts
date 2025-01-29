import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Widget } from '../typing/widget'
import WebClient from 'web-client-starter'

class WidgetService_ {
  widgetConfig = apiConfig.widgets

  async updateTitle(request: Request): Promise<Widget> {
    return WebClient.put<Widget>({
      baseUrl: this.widgetConfig.baseUrl,
      path: this.widgetConfig.updateTitle,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }

  addWidget(request: Request): Promise<Widget> {
    return WebClient.post<Widget>({
      baseUrl: this.widgetConfig.baseUrl,
      path: this.widgetConfig.widgets,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }

  getWidgets(request: Request): Promise<Widget[]> {
    return WebClient.get<Widget[]>({
      baseUrl: this.widgetConfig.baseUrl,
      path: this.widgetConfig.widgets,
      headers: request.headers as Record<string, string>
    })
  }
}

export const WidgetService = new WidgetService_()
