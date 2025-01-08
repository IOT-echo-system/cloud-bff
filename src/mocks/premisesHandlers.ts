import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Premises, PremisesDetails } from '../typing/premises'
import { zones } from './zoneHandlers'
import { boards } from './boardsHandlers'

const baseUrl = apiConfig.premises.baseUrl

const premises: Premises[] = [
  {
    premisesId: '0001',
    name: 'Luck apartment',
    address: {
      address1: 'Luck apartment, Blunt square',
      address2: 'Mawaiya, Durgapuri',
      state: 'Uttar Pradesh',
      district: 'Lucknow',
      pincode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0002',
    name: 'Store no 156',
    address: {
      address1: 'Luck apartment, Blunt square',
      address2: 'Mawaiya, Durgapuri',
      state: 'Uttar Pradesh',
      district: 'Lucknow',
      pincode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0003',
    name: 'Luck apartment',
    address: {
      address1: 'Village Tikuriyan Purwa',
      address2: 'Address 2',
      state: 'State',
      district: 'District',
      pincode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0004',
    name: 'Store no 156',
    address: {
      address1: 'Address 1',
      address2: 'Address 2',
      state: 'State',
      district: 'District',
      pincode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0005',
    name: 'Luck apartment',
    address: {
      address1: 'Address 1',
      address2: 'Address 2',
      state: 'State',
      district: 'District',
      pincode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0006',
    name: 'Store no 156',
    address: {
      address1: 'Address 1',
      address2: 'Address 2',
      state: 'State',
      district: 'District',
      pincode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  }
]

export const premisesHandlers = [
  // Add premises
  http.post(`${baseUrl}/premises`, () => {
    return HttpResponse.json<Premises>(premises[0])
  }),

  // get premises
  http.get(`${baseUrl}/premises`, () => {
    return HttpResponse.json<Premises[]>(premises)
  }),

  // get premises details
  http.get(`${baseUrl}/premises/:premisesId`, ({ params }) => {
    const { premisesId } = params
    const currentPremises = premises.find(prem => prem.premisesId === premisesId)
    if (currentPremises) {
      return HttpResponse.json<PremisesDetails>({
        ...currentPremises,
        zoneIds: ['0000001', '0000002', '0000003', '0000004'],
        boardIds: ['0000001', '0000002'],
        zones,
        boards
      })
    }
    return new HttpResponse(JSON.stringify({ errorCode: 'IOT-4001', message: 'Premises not found' }), {
      status: 404,
      statusText: 'Out Of Apples'
    })
  }),

  // get premises details
  http.put(`${baseUrl}/premises/:premisesId`, async ({ params, request }) => {
    const { premisesId } = params
    const updatePremises = (await request.json()) as Premises
    return HttpResponse.json<Premises>({ ...premises.find(prem => prem.premisesId === premisesId)!, ...updatePremises })
  })
]
