export type InvoiceWidget = {
  projectId: string
  boardId: string
  widgetId: string
  widgetType: 'INVOICE'
  title: string
}

export type InvoiceSeed = { code: string; name: string; pricePerUnit: number }
