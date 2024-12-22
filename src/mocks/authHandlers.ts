import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { PoliciesResBody } from '../typing/auth'

const baseUrl = apiConfig.auth.baseUrl

export const authHandlers = [
  // Get Policies
  http.get(`${baseUrl}/policies`, () => {
    return HttpResponse.json<PoliciesResBody>([
      { policyId: '0001', name: 'PREMISES:CREATE' },
      { policyId: '0002', name: 'PREMISES:READ' },
      { policyId: '0003', name: 'PREMISES:UPDATE' },
      { policyId: '0004', name: 'PREMISES:DELETE' }
    ])
  })
]