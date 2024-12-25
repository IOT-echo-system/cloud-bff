import { boardService } from '../services'
import type { Request } from 'express'
import type { BoardResponse } from '../typing/board'

export const boardController = {
  getBoards(request: Request): Promise<BoardResponse[]> {
    return boardService.getBoards(request)
  },

  addBoard(request: Request): Promise<BoardResponse> {
    return boardService.createNewBoard(request)
  }
} as const
