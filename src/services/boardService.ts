import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Board, BoardResponse, BoardSecretKeyResponse } from '../typing/board'
import WebClient from 'web-client-starter'
import { WidgetService } from './widgetService'

const { board: boardConfig, auth: authConfig } = apiConfig

export const boardService = {
  async getBoards(request: Request): Promise<Board[]> {
    const boards = await WebClient.get<BoardResponse[]>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>
    })
    const boardIds = boards.map(board => board.boardId)
    const widgets = await WidgetService.getWidgetsByBoardIds(request, boardIds)
    return boards.map(board => {
      return { ...board, widgets: widgets.filter(widget => widget.boardId === board.boardId) } as Board
    })
  },

  async createNewBoard(request: Request): Promise<Board> {
    const board = await WebClient.post<Board>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
    return { ...board, widgets: [] }
  },

  updateBoardName(request: Request): Promise<BoardResponse> {
    return WebClient.put<BoardResponse>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.name,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>,
      uriVariables: { boardId: request.params.boardId }
    })
  },

  getSecretKey(request: Request): Promise<BoardSecretKeyResponse> {
    return WebClient.get<BoardSecretKeyResponse>({
      baseUrl: authConfig.baseUrl,
      path: boardConfig.baseUrl + boardConfig.secretKey,
      headers: request.headers as Record<string, string>,
      uriVariables: { boardId: request.params.boardId } as Record<string, string>
    })
  },

  updateSecretKey(request: Request): Promise<BoardSecretKeyResponse> {
    return WebClient.put<BoardSecretKeyResponse>({
      baseUrl: authConfig.baseUrl,
      path: boardConfig.baseUrl + boardConfig.secretKey,
      headers: request.headers as Record<string, string>,
      uriVariables: { boardId: request.params.boardId } as Record<string, string>
    })
  }
} as const
