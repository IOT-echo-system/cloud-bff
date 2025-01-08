import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Board } from '../typing/board'
import WebClient from 'web-client-starter'

const { board: boardConfig } = apiConfig

export const boardService = {
  async getBoards(request: Request): Promise<Board[]> {
    return WebClient.get<Board[]>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>
    })
  },

  async createNewBoard(request: Request): Promise<Board> {
    return WebClient.post<Board>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }
} as const
