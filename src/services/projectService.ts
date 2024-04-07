import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Project, ProjectDetails, ProjectWithRoles } from '../typing/project'
import WebClient from './webClient'
import { roleService } from './roleService'
import { policyService } from './policyService'

const projectConfig = apiConfig.project

export const projectService = {
  async getProjectsWithRoles(request: Request): Promise<ProjectWithRoles[]> {
    const projects = await WebClient.get<Project[]>({
      baseUrl: projectConfig.baseUrl,
      path: projectConfig.accounts,
      headers: request.headers as Record<string, string>
    })
    request.app.locals.roleIds = projects.flatMap(project => project.user.roleIds)
    const roles = await roleService.getRolesByRoleIds(request)
    return projects.map(project => {
      return {
        name: project.name,
        projectId: project.projectId,
        roles: project.user.roleIds.map(roleId => roles.find(role => role.roleId === roleId)).filter(role => role)
      } as ProjectWithRoles
    })
  },

  async createNewProject(request: Request): Promise<ProjectWithRoles> {
    const project = await WebClient.post<Project>({
      baseUrl: projectConfig.baseUrl,
      path: projectConfig.accounts,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
    request.app.locals.roleIds = project.user.roleIds
    const roles = await roleService.getRolesByRoleIds(request)
    return {
      name: project.name,
      projectId: project.projectId,
      roles: project.user.roleIds.map(roleId => roles.find(role => role.roleId === roleId)).filter(role => role)
    } as ProjectWithRoles
  },

  async getProjectDetails(request: Request): Promise<ProjectDetails> {
    const project = await WebClient.get<Project>({
      baseUrl: projectConfig.baseUrl,
      path: projectConfig.accountDetails,
      headers: request.headers as Record<string, string>
    })
    request.app.locals.roleIds = project.user.roleIds
    const [roles, policies] = await Promise.all([
      roleService.getRolesByRoleIds(request),
      policyService.getPolicies(request)
    ])
    return { projectId: project.projectId, name: project.name, roles, policies } as ProjectDetails
  }
} as const
