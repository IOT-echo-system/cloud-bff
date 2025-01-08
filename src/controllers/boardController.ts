import { boardService } from '../services'
import type { Request } from 'express'
import type { Board } from '../typing/board'

export const boardController = {
  getBoards(request: Request): Promise<Board[]> {
    return boardService.getBoards(request)
  },

  addBoard(request: Request): Promise<Board> {
    return boardService.createNewBoard(request)
  }
} as const
