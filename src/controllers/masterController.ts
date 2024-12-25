import { masterService } from '../services'
import type { BoardsResponse } from '../typing/master'
import type { Request } from 'express'

export const masterController = {
  getBoards(request: Request): Promise<BoardsResponse[]> {
    return masterService.getBoards(request)
  }
} as const
