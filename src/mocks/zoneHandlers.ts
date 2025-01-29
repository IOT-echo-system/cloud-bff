import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Zone } from '../typing/zone'

const baseUrl = apiConfig.premises.baseUrl

export const zones: Zone[] = [
  {
    premisesId: '0001',
    name: 'Guard room',
    zoneId: '0000001',
    createdAt: new Date(2024, 1, 1, 1, 1),
    widgets: ['0001']
  },
  {
    premisesId: '0001',
    name: 'Kitchen',
    zoneId: '0000002',
    createdAt: new Date(2024, 1, 1, 1, 1),
    widgets: ['0002']
  },
  {
    premisesId: '0001',
    name: 'Office',
    zoneId: '0000003',
    createdAt: new Date(2024, 1, 1, 1, 1),
    widgets: []
  },
  {
    premisesId: '0001',
    name: 'Bedroom',
    zoneId: '0000004',
    createdAt: new Date(2024, 1, 1, 1, 1),
    widgets: ['0003', '0004']
  },
  {
    premisesId: '0001',
    name: 'Guard room',
    zoneId: '0000005',
    createdAt: new Date(2024, 1, 1, 1, 1),
    widgets: ['0001']
  },
  {
    premisesId: '0001',
    name: 'Kitchen',
    zoneId: '0000006',
    createdAt: new Date(2024, 1, 1, 1, 1),
    widgets: ['0002']
  },
  {
    premisesId: '0001',
    name: 'Office',
    zoneId: '0000007',
    createdAt: new Date(2024, 1, 1, 1, 1),
    widgets: []
  },
  {
    premisesId: '0001',
    name: 'Bedroom',
    zoneId: '0000008',
    createdAt: new Date(2024, 1, 1, 1, 1),
    widgets: ['0003', '0004']
  }
]

export const zoneHandlers = [
  // Add premises
  http.post(`${baseUrl}/zones`, () => {
    return HttpResponse.json<Zone>(zones[0])
  }),

  http.get(`${baseUrl}/zones`, () => {
    return HttpResponse.json<Zone[]>(zones)
  }),

  http.put(`${baseUrl}/zones/:zoneId/name`, () => {
    return HttpResponse.json<Zone>({ ...zones[0], name: 'Updated name' })
  })
]
