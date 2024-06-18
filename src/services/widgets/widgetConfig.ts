export const widgetConfig = {
  invoice: {
    baseUrl: '/invoices',
    seed: '/{widgetId}/seed',
    updateSeed: '/{widgetId}/seed/{seedCode}',
    payment: '/{widgetId}/payment'
  },
  collectionOfButtons: {
    baseUrl: '/collection-of-buttons',
    buttons: '/{widgetId}/buttons',
    button: '/{widgetId}/buttons/{buttonId}',
    buttonValue: '/{widgetId}/buttons/{buttonId}/value'
  },
  levelMonitor: {
    baseUrl: '/level-monitor',
    updateValues: '/{widgetId}/values'
  }
} as const
