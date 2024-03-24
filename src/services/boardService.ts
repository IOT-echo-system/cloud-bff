import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Board } from '../typing/board'
import WebClient from './webClient'

const boardConfig = apiConfig.board

export const boardService = {
  getBoards(request: Request): Promise<Board[]> {
    return WebClient.get<Board[]>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>
    })
  },

  createNewBoard(request: Request): Promise<Board> {
    return WebClient.post<Board>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  },

  updateBoardName(request: Request): Promise<Board> {
    return WebClient.put<Board>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.updateBoardName,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>,
      uriVariables: { boardId: request.params.boardId }
    })
  }
} as const
