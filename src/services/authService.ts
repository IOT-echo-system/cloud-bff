import { apiConfig } from '../config/apiConfig'
import type { LoginApiResponse, SignUpApiResponse } from '../typing/auth'
import type { Request } from 'express'
import WebClient from './webClient'

const authConfig = apiConfig.auth

export const authService = {
  signUp(request: Request): Promise<SignUpApiResponse> {
    return WebClient.post<SignUpApiResponse>({
      baseUrl: authConfig.baseUrl,
      path: authConfig.signUp,
      body: request.body as Record<string, unknown>,
      headers: request.headers as Record<string, string>
    })
  },

  login(request: Request): Promise<LoginApiResponse> {
    return WebClient.post<LoginApiResponse>({
      baseUrl: authConfig.baseUrl,
      path: authConfig.login,
      body: request.body as Record<string, unknown>,
      headers: request.headers as Record<string, string>
    })
  }
} as const
