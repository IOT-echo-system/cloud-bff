import type { Role } from './role'
import type { Policy } from './policy'

export type ProjectWithRoles = { name: string; projectId: string; roles: Role[] }
export type Project = { projectId: string; name: string; user: { userId: string; roleIds: string[] } }
export type ProjectDetails = { projectId: string; name: string; roles: Role[]; policies: Policy[] }
