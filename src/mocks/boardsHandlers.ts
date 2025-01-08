import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Board } from '../typing/board'

const boardConfig = apiConfig.board

export const boards: Board[] = [
  {
    boardId: '0000001',
    name: 'Board 1',
    premisesId: '00001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000002',
    name: 'Board 2',
    premisesId: '00001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  }
]

export const boardsHandlers = [
  // Get Policies
  http.post(`${boardConfig.baseUrl}/premises/:premisesId/boards`, () => {
    return HttpResponse.json<Board>(boards[0])
  }),

  http.get(`${boardConfig.baseUrl}/premises/:premisesId/boards`, () => {
    return HttpResponse.json<Board[]>(boards)
  })
]
