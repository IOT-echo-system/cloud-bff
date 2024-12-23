import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Premises } from '../typing/premises'

const baseUrl = apiConfig.premises.baseUrl

const premises: Premises[] = [
  {
    premisesId: '0001',
    name: 'Luck apartment',
    address: {
      address1: 'Luck apartment, Blunt square',
      address2: 'Mawaiya, Durgapuri',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      district: 'Lucknow',
      zipCode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0002',
    name: 'Store no 156',
    address: {
      address1: 'Luck apartment, Blunt square',
      address2: 'Mawaiya, Durgapuri',
      city: 'Lucknow',
      state: 'Uttar Pradesh',
      district: 'Lucknow',
      zipCode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0003',
    name: 'Luck apartment',
    address: {
      address1: 'Village Tikuriyan Purwa',
      address2: 'Address 2',
      city: 'City',
      state: 'State',
      district: 'District',
      zipCode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0004',
    name: 'Store no 156',
    address: {
      address1: 'Address 1',
      address2: 'Address 2',
      city: 'City',
      state: 'State',
      district: 'District',
      zipCode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0005',
    name: 'Luck apartment',
    address: {
      address1: 'Address 1',
      address2: 'Address 2',
      city: 'City',
      state: 'State',
      district: 'District',
      zipCode: 123456
    },
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    premisesId: '0006',
    name: 'Store no 156',
    address: {
      address1: 'Address 1',
      address2: 'Address 2',
      city: 'City',
      state: 'State',
      district: 'District',
      zipCode: 123456
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
    return HttpResponse.json<Premises>(premises.find(prem => prem.premisesId === premisesId))
  }),

  // get premises details
  http.put(`${baseUrl}/premises/:premisesId`, ({ params }) => {
    const { premisesId } = params
    return HttpResponse.json<Premises>(premises.find(prem => prem.premisesId === premisesId))
  })
]
