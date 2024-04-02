import type { Request } from 'express'
import { invoiceWidgetService } from '../../services/widgets'
import type { InvoiceWidget } from '../../typing/widgets/invoice'

export const invoiceWidgetController = {
  updateTitle(request: Request): Promise<InvoiceWidget> {
    return invoiceWidgetService.updateTitle(request)
  }
} as const
