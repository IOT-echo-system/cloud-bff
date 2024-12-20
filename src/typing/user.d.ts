import type { PoliciesResBody } from './auth'

export type User = {
  userId: string
  name: string
  email: string
  registeredAt: Date
  policies: PoliciesResBody
}
