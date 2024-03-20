import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Board, BoardResponse } from '../typing/board'
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

  createNewBoard(request: Request): Promise<BoardResponse> {
    return WebClient.post<BoardResponse>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }
  //
  // getProjectDetails(request: Request): Promise<Project> {
  //   return WebClient.get<Project>({
  //     baseUrl: boardConfig.baseUrl,
  //     path: boardConfig.accountDetails,
  //     headers: request.headers as Record<string, string>
  //   })
  // }
} as const
