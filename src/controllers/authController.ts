import { authService } from '../services'
import type {
  GenerateOtpApiResponse,
  LoginApiResponse, LogoutResBody,
  ResetPasswordApiResponse,
  SignUpApiResponse,
  ValidateApiResponse,
  VerifyOtpApiResponse
} from '../typing/auth'
import type { Request } from 'express'
import { User } from '../typing/user'

export const authController = {
  signUp(request: Request): Promise<SignUpApiResponse> {
    return authService.signUp(request)
  },

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
