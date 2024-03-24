import { boardService } from '../services'
import type { Board, BoardResponse } from '../typing/board'
import type { Request } from 'express'

export const boardController = {
  getBoards(request: Request): Promise<Board[]> {
    return boardService.getBoards(request)
  },

  addBoard(request: Request): Promise<BoardResponse> {
    return boardService.createNewBoard(request)
  },

  updateBoardName(request: Request): Promise<Board> {
    return boardService.updateBoardName(request)
  }
} as const
