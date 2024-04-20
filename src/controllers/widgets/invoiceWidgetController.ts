import type { Request } from 'express'
import { invoiceWidgetService } from '../../services/widgets'
import type { InvoiceSeed, InvoiceWidget } from '../../typing/widgets'

export const invoiceWidgetController = {
  getSeedData(request: Request): Promise<InvoiceSeed[]> {
    return invoiceWidgetService.getSeedData(request)
  },

  addSeedData(request: Request): Promise<InvoiceSeed> {
    return invoiceWidgetService.addSeedData(request)
  },

  updateSeedData(request: Request): Promise<InvoiceSeed> {
    return invoiceWidgetService.updateSeedData(request)
  },

  updatePayment(request: Request): Promise<InvoiceWidget> {
    return invoiceWidgetService.updatePayment(request)
  }
} as const
