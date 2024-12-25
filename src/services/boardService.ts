import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { BoardResponse } from '../typing/board'
import WebClient from 'web-client-starter'

const { board: boardConfig } = apiConfig

export const boardService = {
  async getBoards(request: Request): Promise<BoardResponse[]> {
    return WebClient.get<BoardResponse[]>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>
    })
  },

  async createNewBoard(request: Request): Promise<BoardResponse> {
    return WebClient.post<BoardResponse>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }
} as const
