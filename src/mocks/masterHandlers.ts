import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { BoardsResponse, LocationResponse } from '../typing/master'

const baseUrl = apiConfig.master.baseUrl

const boards: BoardsResponse[] = [
  {
    name: 'ESP-32',
    type: 'ESP-32'
  },
  {
    name: 'ESP8266',
    type: 'ESP8266'
  }
]

export const masterHandlers = [
  // get boards from master
  http.get(`${baseUrl}/boards`, () => {
    return HttpResponse.json<BoardsResponse[]>(boards)
  }),

  http.get(`${baseUrl}/locations/:location`, () => {
    return HttpResponse.json<LocationResponse>({
      pincode: '226004',
      district: 'Lucknow',
      state: 'Uttar pradesh',
      city: 'Lucknow'
    })
  })
]
