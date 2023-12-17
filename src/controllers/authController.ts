import { authService } from '../services'
import type { LoginApiResponse, SignUpApiResponse } from '../typing/auth'
import type { Request } from 'express'

export const authController = {
  signUp(request: Request): Promise<SignUpApiResponse> {
    return authService.signUp(request)
  },

  login(request: Request): Promise<LoginApiResponse> {
    return authService.login(request)
  }
} as const
