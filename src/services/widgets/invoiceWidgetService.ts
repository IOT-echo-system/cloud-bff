import { apiConfig } from '../../config/apiConfig'
import type { Request } from 'express'
import WebClient from 'web-client-starter'
import { widgetConfig } from './widgetConfig'
import type { InvoiceSeed, InvoiceWidget } from '../../typing/widgets'

const invoiceConfig = widgetConfig.invoice
const baseUrl = apiConfig.widgets.baseUrl + invoiceConfig.baseUrl

export const invoiceWidgetService = {
  getSeedData(request: Request): Promise<InvoiceSeed[]> {
    return WebClient.get<InvoiceSeed[]>({
      baseUrl: baseUrl,
      path: invoiceConfig.seed,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>
    })
  },

  addSeedData(request: Request): Promise<InvoiceSeed> {
    return WebClient.post<InvoiceSeed>({
      baseUrl: baseUrl,
      path: invoiceConfig.seed,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>,
      body: request.body as Record<string, unknown>
    })
  },

  updateSeedData(request: Request): Promise<InvoiceSeed> {
    return WebClient.put<InvoiceSeed>({
      baseUrl: baseUrl,
      path: invoiceConfig.updateSeed,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId, seedCode: request.params.seedCode } as Record<string, string>,
      body: request.body as Record<string, unknown>
    })
  },

  updatePayment(request: Request): Promise<InvoiceWidget> {
    return WebClient.put<InvoiceWidget>({
      baseUrl: baseUrl,
      path: invoiceConfig.payment,
      headers: request.headers as Record<string, string>,
      uriVariables: { widgetId: request.params.widgetId } as Record<string, string>,
      body: request.body as Record<string, unknown>
    })
  }
} as const
