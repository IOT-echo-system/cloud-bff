import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Board } from '../typing/board'
import WebClient from 'web-client-starter'

const { board: boardConfig } = apiConfig

export const boardService = {
  getBoardsByPremises(request: Request): Promise<Board[]> {
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
      body: request.body as Record<string, string>,
      uriVariables: request.params
    })
  },

  updateBoardName(request: Request): Promise<Board> {
    return WebClient.put<Board>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.updateName,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>,
      uriVariables: request.params
    })
  }
} as const
