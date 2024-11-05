import { authService } from '../services'
import type {
  GenerateOtpApiResponse,
  LoginApiResponse,
  LogoutResBody,
  ResetPasswordApiResponse,
  ValidateApiResponse,
  VerifyOtpApiResponse
} from '../typing/auth'
import type { Request } from 'express'
import type { User } from '../typing/user'

export const authController = {
  login(request: Request): Promise<LoginApiResponse> {
    return authService.login(request)
  },

  generateOtp(request: Request): Promise<GenerateOtpApiResponse> {
    return authService.generateOtp(request)
  },

  verifyOtp(request: Request): Promise<VerifyOtpApiResponse> {
    return authService.verifyOtp(request)
  },

  resetPassword(request: Request): Promise<ResetPasswordApiResponse> {
    return authService.resetPassword(request)
  },

  validate(request: Request): Promise<ValidateApiResponse> {
    return authService.validate(request)
  },

  updateToken(request: Request): Promise<LoginApiResponse> {
    return authService.updateToken(request)
  },

  getUserDetails(request: Request): Promise<User> {
    return authService.getUserDetails(request)
  },

  logout(request: Request): Promise<LogoutResBody> {
    return authService.logout(request)
  }
} as const
