import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import WebClient from 'web-client-starter'
import type { BoardsResponse, LocationResponse } from '../typing/master'

const masterConfig = apiConfig.master

export const masterService = {
  getBoards(request: Request): Promise<BoardsResponse[]> {
    return WebClient.get<BoardsResponse[]>({
      baseUrl: masterConfig.baseUrl,
      path: masterConfig.boards,
      headers: request.headers as Record<string, string>
    })
  },

  getLocation(request: Request): Promise<LocationResponse> {
    return WebClient.get<LocationResponse>({
      baseUrl: masterConfig.baseUrl,
      path: masterConfig.locations,
      headers: request.headers as Record<string, string>,
      uriVariables: request.params as Record<string, string>
    })
  }
} as const
