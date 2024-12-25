import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import WebClient from 'web-client-starter'
import type { BoardsResponse } from '../typing/master'

const masterConfig = apiConfig.master

export const masterService = {
  getBoards(request: Request): Promise<BoardsResponse[]> {
    return WebClient.get<BoardsResponse[]>({
      baseUrl: masterConfig.baseUrl,
      path: masterConfig.boards,
      headers: request.headers as Record<string, string>
    })
  }
} as const
