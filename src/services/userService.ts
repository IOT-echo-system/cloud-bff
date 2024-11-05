import { apiConfig } from '../config/apiConfig'
import type { SignUpApiResponse } from '../typing/auth'
import type { Request } from 'express'
import WebClient from 'web-client-starter'

const userConfig = apiConfig.user

export const userService = {
  registration(request: Request): Promise<SignUpApiResponse> {
    return WebClient.post<SignUpApiResponse>({
      baseUrl: userConfig.baseUrl,
      path: userConfig.registration,
      body: request.body as Record<string, unknown>,
      headers: request.headers as Record<string, string>
    })
  }
} as const
