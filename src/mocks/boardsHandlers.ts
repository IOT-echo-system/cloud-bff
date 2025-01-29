import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Board } from '../typing/board'

const boardConfig = apiConfig.board

export const boards: Board[] = [
  {
    boardId: '0000001',
    name: 'Board 1',
    premisesId: '0001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000002',
    name: 'Board 2',
    premisesId: '0001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000003',
    name: 'Board 3',
    premisesId: '0001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000004',
    name: 'Board 4',
    premisesId: '0001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000005',
    name: 'Board 5',
    premisesId: '0001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000006',
    name: 'Board 6',
    premisesId: '0001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000007',
    name: 'Board 7',
    premisesId: '0001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000008',
    name: 'Board 8',
    premisesId: '0001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  }
]

export const boardsHandlers = [
  http.post(`${boardConfig.baseUrl}/boards`, () => {
    return HttpResponse.json<Board>(boards[0])
  }),

  http.get(`${boardConfig.baseUrl}/boards`, () => {
    return HttpResponse.json<Board[]>(boards)
  }),

  http.put(`${boardConfig.baseUrl}/boards/:boardId/name`, () => {
    return HttpResponse.json<Board>({ ...boards[0], name: 'U>dated name' })
  })
]
