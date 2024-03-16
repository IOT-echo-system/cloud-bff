import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { ProjectsWithRoleResponse, ProjectWithRoles } from '../typing/project'
import WebClient from './webClient'

const projectConfig = apiConfig.project

export const projectService = {
  getProjectsWithRoles(request: Request): Promise<ProjectsWithRoleResponse> {
    return WebClient.get<ProjectsWithRoleResponse>({
      baseUrl: projectConfig.baseUrl,
      path: projectConfig.accounts,
      headers: request.headers as Record<string, string>
    })
  },

  createNewProject(request: Request): Promise<ProjectWithRoles> {
    return WebClient.post<ProjectWithRoles>({
      baseUrl: projectConfig.baseUrl,
      path: projectConfig.accounts,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  },

  getProjectDetails(request: Request): Promise<ProjectWithRoles> {
    return WebClient.get<ProjectWithRoles>({
      baseUrl: projectConfig.baseUrl,
      path: projectConfig.accountDetails,
      headers: request.headers as Record<string, string>
    })
  }
} as const
