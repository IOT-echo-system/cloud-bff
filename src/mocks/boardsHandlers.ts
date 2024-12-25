import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { BoardResponse } from '../typing/board'

const boardConfig = apiConfig.board

const boards: BoardResponse[] = [
  {
    boardId: '0000001',
    name: 'Board 1',
    premisesId: '00001',
    createdBy: '000001',
    type: 'ESP32',
    createdAt: new Date(2024, 1, 1, 1, 1)
  }
]

export const boardsHandlers = [
  // Get Policies
  http.post(`${boardConfig.baseUrl}${boardConfig.boards}`, () => {
    return HttpResponse.json<BoardResponse>(boards[0])
  })
]
