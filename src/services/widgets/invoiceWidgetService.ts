import { apiConfig } from '../../config/apiConfig'
import type { Request } from 'express'
import WebClient from '../webClient'
import { widgetConfig } from './widgetConfig'
import type { InvoiceWidget } from '../../typing/widgets/invoice'

const invoiceConfig = widgetConfig.invoice
const baseUrl = apiConfig.widgets.baseUrl + invoiceConfig.baseUrl

export const invoiceWidgetService = {
  updateTitle(request: Request): Promise<InvoiceWidget> {
    return WebClient.put<InvoiceWidget>({
      baseUrl: baseUrl,
      path: invoiceConfig.updateTitle,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }
} as const
