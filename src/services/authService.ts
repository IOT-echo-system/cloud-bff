import { apiConfig } from '../config/apiConfig'
import type {
  GenerateOtpApiResponse,
  LoginApiResponse,
  ResetPasswordApiResponse,
  SignUpApiResponse,
  ValidateApiResponse,
  VerifyOtpApiResponse
} from '../typing/auth'
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
  },

  generateOtp(request: Request): Promise<GenerateOtpApiResponse> {
    return WebClient.post<GenerateOtpApiResponse>({
      baseUrl: authConfig.baseUrl,
      path: authConfig.generateOtp,
      body: request.body as Record<string, unknown>,
      headers: request.headers as Record<string, string>
    })
  },

  verifyOtp(request: Request): Promise<VerifyOtpApiResponse> {
    return WebClient.post<VerifyOtpApiResponse>({
      baseUrl: authConfig.baseUrl,
      path: authConfig.verifyOtp,
      body: request.body as Record<string, unknown>,
      headers: request.headers as Record<string, string>
    })
  },

  resetPassword(request: Request): Promise<ResetPasswordApiResponse> {
    return WebClient.post<ResetPasswordApiResponse>({
      baseUrl: authConfig.baseUrl,
      path: authConfig.resetPassword,
      body: request.body as Record<string, unknown>,
      headers: request.headers as Record<string, string>
    })
  },

  validate(request: Request): Promise<ValidateApiResponse> {
    return WebClient.get<ValidateApiResponse>({
      baseUrl: authConfig.baseUrl,
      path: authConfig.validate,
      headers: request.headers as Record<string, string>
    })
  },

  updateToken(request: Request): Promise<LoginApiResponse> {
    return WebClient.post<LoginApiResponse>({
      baseUrl: authConfig.baseUrl,
      path: authConfig.updateToken,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, unknown>
    })
  }
} as const
