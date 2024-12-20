import type { Role } from './role'
import type { Policy } from './policy'

export type ProjectWithRoles = { name: string; projectId: string; roles: Role[] }
export type Premises = { premisesId: string; name: string }
export type ProjectDetails = { projectId: string; name: string; roles: Role[]; policies: Policy[] }
