import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { BoardResponse } from '../typing/board'
import WebClient from './webClient'

const boardConfig = apiConfig.board

export const boardService = {
  // getProjectsWithRoles(request: Request): Promise<ProjectsWithRoleResponse> {
  //   return WebClient.get<ProjectsWithRoleResponse>({
  //     baseUrl: boardConfig.baseUrl,
  //     path: boardConfig.accounts,
  //     headers: request.headers as Record<string, string>
  //   })
  // },

  createNewBoard(request: Request): Promise<BoardResponse> {
    return WebClient.post<BoardResponse>({
      baseUrl: boardConfig.baseUrl,
      path: boardConfig.boards,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }
  //
  // getProjectDetails(request: Request): Promise<Project> {
  //   return WebClient.get<Project>({
  //     baseUrl: boardConfig.baseUrl,
  //     path: boardConfig.accountDetails,
  //     headers: request.headers as Record<string, string>
  //   })
  // }
} as const
