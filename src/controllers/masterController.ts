import { masterService } from '../services'
import type { BoardsResponse, LocationResponse } from '../typing/master'
import type { Request } from 'express'

export const masterController = {
  getBoards(request: Request): Promise<BoardsResponse[]> {
    return masterService.getBoards(request)
  },

  getLocation(request: Request): Promise<LocationResponse> {
    return masterService.getLocation(request)
  }
} as const
