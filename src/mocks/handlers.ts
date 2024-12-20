import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('http://localhost:9001/auth/validate', () => {
    return HttpResponse.json({
      userId: '0001',
      roleId: '0001'
    })
  }),

  http.get('http://localhost:9001/policies', () => {
    return HttpResponse.json([
      { policyId: '0001', name: 'PREMISES:CREATE' },
      { policyId: '0002', name: 'PREMISES:READ' },
      { policyId: '0003', name: 'PREMISES:UPDATE' },
      { policyId: '0004', name: 'PREMISES:DELETE' }
    ])
  }),

  http.get('http://localhost:9002/users/me', () => {
    return HttpResponse.json({
      userId: '0001',
      name: 'Shivam Rajput',
      email: 'raj.shiviraj@gmail.com',
      registeredAt: new Date(2024, 1, 1, 1, 1, 1)
    })
  }),

  http.post('http://localhost:9004/premises', () => {
    return HttpResponse.json({
      premisesId: '0001',
      name: 'Luck apartment'
    })
  })
]
