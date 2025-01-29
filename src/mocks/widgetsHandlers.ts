import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Widget } from '../typing/widget'

const boardConfig = apiConfig.widgets

export const widgets: Widget[] = [
  {
    feedId: '0000001',
    name: 'Motion',
    boardId: '0000002',
    premisesId: '0001',
    widgetId: '0001',
    type: 'TOGGLE',
    config: {},
    zoneId: '0001'
  },
  {
    feedId: '0000003',
    name: 'Lamp 1',
    boardId: '0000001',
    premisesId: '0001',
    widgetId: '0003',
    type: 'TOGGLE',
    config: {},
    zoneId: '0001'
  },
  {
    widgetId: '0002',
    feedId: '0000002',
    name: 'Temperature',
    boardId: '0000001',
    premisesId: '0001',
    type: 'SLIDER',
    config: {
      min: 0,
      max: 60,
      step: 0,
      label: '°C'
    },
    zoneId: '0001'
  },
  {
    widgetId: '0004',
    feedId: '0000004',
    name: 'Fan',
    boardId: '0000001',
    premisesId: '0001',
    type: 'SLIDER',
    config: {
      min: 0,
      max: 100,
      step: 10,
      label: '%'
    },
    zoneId: '0001'
  }
]

export const widgetsHandlers = [
  http.post(`${boardConfig.baseUrl}/widgets`, () => {
    return HttpResponse.json<Widget>(widgets[0])
  }),

  http.get(`${boardConfig.baseUrl}/widgets`, () => {
    return HttpResponse.json<Widget[]>(widgets)
  }),

  http.put(`${boardConfig.baseUrl}/widgets/:widgetId/name`, () => {
    return HttpResponse.json<Widget>({ ...widgets[0], name: 'Updated name' })
  })
]
