import { boardService } from '../services'
import type { Board, BoardResponse, BoardSecretKeyResponse } from '../typing/board'
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

  updateBoardName(request: Request): Promise<BoardResponse> {
    return boardService.updateBoardName(request)
  },

  getSecretKey(request: Request): Promise<BoardSecretKeyResponse> {
    return boardService.getSecretKey(request)
  },

  updateSecretKey(request: Request): Promise<BoardSecretKeyResponse> {
    return boardService.updateSecretKey(request)
  }
} as const
