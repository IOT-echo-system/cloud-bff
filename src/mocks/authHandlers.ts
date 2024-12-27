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
      { policyId: '0004', name: 'PREMISES:DELETE' },
      { policyId: '0005', name: 'ZONE:CREATE' },
      { policyId: '0006', name: 'ZONE:READ' },
      { policyId: '0007', name: 'ZONE:UPDATE' },
      { policyId: '0008', name: 'ZONE:DELETE' },
      { policyId: '0009', name: 'DEVICE:CREATE' },
      { policyId: '0010', name: 'DEVICE:READ' },
      { policyId: '0011', name: 'DEVICE:UPDATE' },
      { policyId: '0012', name: 'DEVICE:DELETE' }
    ])
  })
]
