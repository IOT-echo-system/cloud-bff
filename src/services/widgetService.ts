import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Widget, WidgetType, WidgetTypeWithWidgets } from '../typing/widget'
import WebClient from './webClient'
import { unique } from '../utils/utils'

const widgetPaths = { INVOICE: '/invoices' } as const

class WidgetService_ {
  widgetConfig = apiConfig.widgets

  async getWidgetsByBoardIds(request: Request, boardIds: string[]): Promise<Widget[]> {
    const parentWidgets = await WebClient.get<Widget[]>({
      baseUrl: this.widgetConfig.baseUrl,
      path: this.widgetConfig.widgets,
      headers: request.headers as Record<string, string>,
      queryParams: { boardIds: boardIds.join(',') } as Record<string, string>
    })
    const widgetTypes = unique(parentWidgets.map(widget => widget.widgetType))
    const widgetTypeWithWidgets = widgetTypes.map(
      widgetType =>
        ({
          widgetType,
          widgets: parentWidgets.filter(widget => widget.widgetType === widgetType)
        }) as WidgetTypeWithWidgets
    )
    const realWidgets = await this.getWidgetsByWidgetIds(request, widgetTypeWithWidgets)
    return parentWidgets
      .map(widget => realWidgets.find(realWidget => realWidget.widgetId === widget.widgetId))
      .filter(widget => widget) as Widget[]
  }

  async getWidgetsByWidgetIds(request: Request, widgetTypeWithWidgets: WidgetTypeWithWidgets[]): Promise<Widget[]> {
    const widgets = await Promise.all(
      widgetTypeWithWidgets.map(widgetTypeWithWidget => {
        return WebClient.get<Widget[]>({
          baseUrl: this.widgetConfig.baseUrl,
          path: widgetPaths[widgetTypeWithWidget.widgetType as keyof typeof widgetPaths],
          headers: request.headers as Record<string, string>,
          queryParams: { widgetIds: widgetTypeWithWidget.widgets.map(widget => widget.widgetId).join(',') }
        })
      })
    )
    return widgets.flatMap(widget => widget)
  }

  updateTitle(request: Request): Promise<Widget> {
    return WebClient.put<Widget>({
      baseUrl: this.widgetConfig.baseUrl,
      path: this.widgetConfig.updateTitle,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>
    })
  }

  addWidget(request: Request): Promise<Widget> {
    return WebClient.post<Widget>({
      baseUrl: this.widgetConfig.baseUrl,
      path: widgetPaths[(request.body as { type: WidgetType }).type as keyof typeof widgetPaths],
      headers: request.headers as Record<string, string>
    })
  }
}

export const WidgetService = new WidgetService_()
