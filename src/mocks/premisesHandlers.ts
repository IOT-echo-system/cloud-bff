import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Premises } from '../typing/premises'

const baseUrl = apiConfig.premises.baseUrl

export const premisesHandlers = [
  // Add premises
  http.post(`${baseUrl}/premises`, () => {
    return HttpResponse.json<Premises>({
      premisesId: '0001',
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
    })
  }),

  // Add premises
  http.get(`${baseUrl}/premises`, () => {
    return HttpResponse.json<Premises[]>([
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
        premisesId: '0001',
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
        premisesId: '0002',
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
        premisesId: '0001',
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
        premisesId: '0002',
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
    ])
  })
]
