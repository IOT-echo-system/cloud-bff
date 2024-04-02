import { boardService } from '../services'
import type { Board } from '../typing/board'
import type { Request } from 'express'

export const boardController = {
  getBoards(request: Request): Promise<Board[]> {
    return boardService.getBoards(request)
  },

  addBoard(request: Request): Promise<{
    projectId: string
    boardId: string
    name: string
    status: 'HEALTHY' | 'UNHEALTHY'
  }> {
    return boardService.createNewBoard(request)
  },

  updateBoardName(request: Request): Promise<Board> {
    return boardService.updateBoardName(request)
  }
} as const
