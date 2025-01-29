import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { Feed } from '../typing/feed'

const boardConfig = apiConfig.board

export const feeds: Feed[] = [
  {
    feedId: '0000001',
    name: 'Feed 1',
    boardId: '0000001',
    premisesId: '0001',
    createdBy: '000001',
    type: 'INPUT',
    value: 1,
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    feedId: '0000003',
    name: 'Feed 1',
    boardId: '0000001',
    premisesId: '0001',
    createdBy: '000001',
    type: 'OUTPUT',
    value: 1,
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    feedId: '0000002',
    name: 'Feed 2',
    boardId: '0000002',
    premisesId: '0001',
    createdBy: '000001',
    value: 40,
    type: 'INPUT',
    createdAt: new Date(2024, 1, 1, 1, 1)
  },
  {
    feedId: '0000004',
    name: 'Feed 4',
    boardId: '0000001',
    premisesId: '0001',
    createdBy: '000004',
    value: 40,
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
  }),

  http.put(`${boardConfig.baseUrl}/feeds/:feedId/value`, async req => {
    const json = (await req.request.json()) as Record<string, unknown>
    const feed = feeds.find(fe => fe.feedId === req.params.feedId)
    return HttpResponse.json<Feed>({ ...feed!, ...json })
  })
]
