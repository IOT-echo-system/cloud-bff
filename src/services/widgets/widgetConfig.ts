export const widgetConfig = {
  invoice: {
    baseUrl: '/invoices',
    title: '/{widgetId}/title',
    seed: '/{widgetId}/seed',
    updateSeed: '/{widgetId}/seed/{seedCode}',
    payment: '/{widgetId}/payment'
  }
} as const
