export type SignUpApiResponse = { success: boolean; message: string }
export type LoginApiResponse = { token: string }
export type GenerateOtpApiResponse = { success: boolean; otpId: string; generateAt: Date }
export type VerifyOtpApiResponse = { success: boolean; token: string }
export type ResetPasswordApiResponse = { success: boolean }
