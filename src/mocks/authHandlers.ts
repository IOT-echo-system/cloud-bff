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
      { policyId: '0009', name: 'BOARD:CREATE' },
      { policyId: '0010', name: 'BOARD:READ' },
      { policyId: '0011', name: 'BOARD:UPDATE' },
      { policyId: '0012', name: 'BOARD:DELETE' },
      { policyId: '0013', name: 'FEED:CREATE' },
      { policyId: '0014', name: 'FEED:READ' },
      { policyId: '0015', name: 'FEED:UPDATE' },
      { policyId: '0016', name: 'FEED:DELETE' },
      { policyId: '0017', name: 'WIDGET:CREATE' },
      { policyId: '0018', name: 'WIDGET:READ' },
      { policyId: '0019', name: 'WIDGET:UPDATE' },
      { policyId: '0020', name: 'WIDGET:DELETE' }
    ])
  })
]
