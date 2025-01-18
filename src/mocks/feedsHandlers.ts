import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Feed } from '../typing/feed'

const boardConfig = apiConfig.board

export const feeds: Feed[] = [
  {
    boardId: '0000001',
    name: 'Feed 1',
    premisesId: '00001',
    feedId: '0000001',
    createdBy: '000001',
    type: 'INPUT',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    boardId: '0000002',
    name: 'Feed 2',
    premisesId: '00001',
    feedId: '00001',
    createdBy: '000001',
    type: 'OUTPUT',
    createdAt: new Date(2024, 1, 1, 1, 1)
  }
]

export const feedsHandlers = [
  http.post(`${boardConfig.baseUrl}/feeds`, () => {
    return HttpResponse.json<Feed>(feeds[0])
  }),

  http.get(`${boardConfig.baseUrl}/feeds`, () => {
    return HttpResponse.json<Feed[]>(feeds)
  }),

  http.put(`${boardConfig.baseUrl}/feeds/:feedId/name`, () => {
    return HttpResponse.json<Feed>({ ...feeds[0], name: 'Updated name' })
  })
]
