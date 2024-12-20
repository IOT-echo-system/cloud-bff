import { apiConfig } from '../config/apiConfig'
import type { SignUpApiResponse } from '../typing/auth'
import type { Request } from 'express'
import WebClient from 'web-client-starter'
import type { User } from '../typing/user'
import { authService } from './authService'

const userConfig = apiConfig.user

export const userService = {
  registration(request: Request): Promise<SignUpApiResponse> {
    return WebClient.post<SignUpApiResponse>({
      baseUrl: userConfig.baseUrl,
      path: userConfig.registration,
      body: request.body as Record<string, unknown>,
      headers: request.headers as Record<string, string>
    })
  },

  async me(request: Request): Promise<User> {
    const user = await WebClient.get<User>({
      baseUrl: userConfig.baseUrl,
      path: userConfig.me,
      headers: request.headers as Record<string, string>
    })
    user.policies = await authService.getPolicies(request)
    return user
  }
} as const
