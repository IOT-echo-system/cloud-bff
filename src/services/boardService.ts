import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Board, BoardResponse } from '../typing/board'
import WebClient from './webClient'
import { widgetService } from './widgetService'

const boardConfig = apiConfig.board

export const boardService = {
  async getBoards(request: Request): Promise<Board[]> {
    const boards = await WebClient.get<BoardResponse[]>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>
    })
    const boardIds = boards.map(board => board.boardId)
    const widgets = await widgetService.getWidgetsByBoardIds(request, boardIds)
    return boards.map(board => {
      return { ...board, widgets: widgets.filter(widget => widget.boardId === board.boardId) } as Board
    })
  },

  createNewBoard(request: Request): Promise<Board> {
    return WebClient.post<Board>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  },

  updateBoardName(request: Request): Promise<Board> {
    return WebClient.put<Board>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.updateBoardName,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>,
      uriVariables: { boardId: request.params.boardId }
    })
  }
} as const
