import { boardService } from '../services'
import type { Request } from 'express'
import type { Board } from '../typing/board'

export const boardController = {
  addBoard(request: Request): Promise<Board> {
    return boardService.createNewBoard(request)
  },

  getBoardsByPremises(request: Request): Promise<Board[]> {
    return boardService.getBoardsByPremises(request)
  },

  updateBoardName(request: Request): Promise<Board> {
    return boardService.updateBoardName(request)
  }
} as const
