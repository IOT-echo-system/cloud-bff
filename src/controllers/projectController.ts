import { projectService } from '../services'
import type { Project, ProjectDetails, ProjectWithRoles } from '../typing/project'
import type { Request } from 'express'

export const projectController = {
  getProjectsWithRoles(request: Request): Promise<ProjectWithRoles[]> {
    return projectService.getProjectsWithRoles(request)
  },

  addProject(request: Request): Promise<ProjectWithRoles> {
    return projectService.createNewProject(request)
  },

  getProjectDetails(request: Request): Promise<ProjectDetails> {
    return projectService.getProjectDetails(request)
  },

  updateProjectName(request: Request): Promise<Project> {
    return projectService.updateProjectName(request)
  }
} as const
