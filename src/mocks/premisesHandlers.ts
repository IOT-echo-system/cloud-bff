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
  })
]
