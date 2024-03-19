import { boardService } from '../services'
import type { BoardResponse } from '../typing/board'
import type { Request } from 'express'

export const boardController = {
  // getProjectsWithRoles(request: Request): Promise<ProjectsWithRoleResponse> {
  //   return boardService.getProjectsWithRoles(request)
  // },

  addBoard(request: Request): Promise<BoardResponse> {
    return boardService.createNewBoard(request)
  }
  //
  // getProjectDetails(request: Request): Promise<Project> {
  //   return boardService.getProjectDetails(request)
  // }
} as const
