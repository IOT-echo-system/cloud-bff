import { projectService } from '../services'
import type { ProjectsWithRoleResponse, ProjectWithRoles } from '../typing/project'
import type { Request } from 'express'

export const projectController = {
  getProjectsWithRoles(request: Request): Promise<ProjectsWithRoleResponse> {
    return projectService.getProjectsWithRoles(request)
  },

  addProject(request: Request): Promise<ProjectWithRoles> {
    return projectService.createNewProject(request)
  },

  getProjectDetails(request: Request): Promise<ProjectWithRoles> {
    return projectService.getProjectDetails(request)
  }
} as const
