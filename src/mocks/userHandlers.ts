import { http, HttpResponse } from 'msw'
import { apiConfig } from '../config/apiConfig'
import type { User } from '../typing/user'

const baseUrl = apiConfig.user.baseUrl

export const userHandlers = [
  // User as Me
  http.get(`${baseUrl}/users/me`, () => {
    return HttpResponse.json<User>({
      userId: '0001',
      name: 'Shivam Rajput',
      email: 'raj.shiviraj@gmail.com',
      registeredAt: new Date(2024, 1, 1, 1, 1, 1),
      policies: []
    })
  })
]
