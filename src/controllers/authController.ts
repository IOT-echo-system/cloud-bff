import { authService } from '../services'
import type {
  GenerateOtpApiResponse,
  LoginApiResponse,
  ResetPasswordApiResponse,
  SignUpApiResponse,
  ValidateApiResponse,
  VerifyOtpApiResponse
} from '../typing/auth'
import type { Request } from 'express'

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
  }
} as const
