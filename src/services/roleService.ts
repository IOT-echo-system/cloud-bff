import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import WebClient from 'web-client-starter'
import { unique } from '../utils/utils'
import type { Role } from '../typing/role'

const roleConfig = apiConfig.role

export const roleService = {
  async getRolesByRoleIds(request: Request): Promise<Role[]> {
    return WebClient.get<Role[]>({
      baseUrl: roleConfig.baseUrl,
      path: roleConfig.roles,
      headers: request.headers as Record<string, string>,
      queryParams: { roleIds: unique((request.query.roleIds ?? request.app.locals.roleIds) as string[]).join(',') }
    })
  }
} as const
