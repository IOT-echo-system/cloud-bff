type WidgetType = 'INVOICE'

export type Widget = {
  projectId: string
  boardId: string
  widgetId: string
  widgetType: WidgetType
} & Record<string, unknown>

type WidgetTypeWithWidgets = { widgetType: WidgetType; widgets: Widget[] }
