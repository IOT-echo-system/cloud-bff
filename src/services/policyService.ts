import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import WebClient from './webClient'
import type { Policy } from '../typing/policy'

const policyConfig = apiConfig.policy

export const policyService = {
  async getPolicies(request: Request): Promise<Policy[]> {
    return WebClient.get<Policy[]>({
      baseUrl: policyConfig.baseUrl,
      path: policyConfig.policies,
      headers: request.headers as Record<string, string>
    })
  }
} as const
