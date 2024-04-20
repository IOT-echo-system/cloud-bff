type WidgetType = 'INVOICE' | 'COLLECTION_OF_BUTTONS'

export type Widget = {
  projectId: string
  boardId: string
  widgetId: string
  widgetType: WidgetType
  title: string
} & Record<string, unknown>

type WidgetTypeWithWidgets = { widgetType: WidgetType; widgets: Widget[] }
