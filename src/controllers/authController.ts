import { authService } from '../services'
import type { LoginApiResponse, SignUpApiResponse } from '../typing/auth'
import type { Request } from 'express'

export const authController = {
  signUp(request: Request): Promise<SignUpApiResponse> {
    return authService.signUp(request)
  },

  login(request: Request): Promise<LoginApiResponse> {
    return authService.login(request)
  },

  generateOtp(request: Request) {
    return authService.generateOtp(request)
  },

  verifyOtp(request: Request) {
    return authService.verifyOtp(request)
  },

  resetPassword(request: Request) {
    return authService.resetPassword(request)
  }
} as const
