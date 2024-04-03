import type { Request } from 'express'
import { invoiceWidgetService } from '../../services/widgets'
import type { InvoiceSeed, InvoiceWidget } from '../../typing/widgets/invoice'

export const invoiceWidgetController = {
  updateTitle(request: Request): Promise<InvoiceWidget> {
    return invoiceWidgetService.updateTitle(request)
  },

  getSeedData(request: Request): Promise<InvoiceSeed[]> {
    return invoiceWidgetService.getSeedData(request)
  },

  addSeedData(request: Request): Promise<InvoiceSeed> {
    return invoiceWidgetService.addSeedData(request)
  }
} as const
