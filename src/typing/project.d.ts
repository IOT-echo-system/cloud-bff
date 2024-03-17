export type Role = { roleId: string; name: string }
export type Policy = { policyId: string; name: string }
export type ProjectWithRoles = { name: string; projectId: string; roles: Role[] }
export type ProjectsWithRoleResponse = ProjectWithRoles[]
export type Project = ProjectWithRoles & { policies: Policy[] }
