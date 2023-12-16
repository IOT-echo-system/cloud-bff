export const Config = {
  API_GATEWAY_BASE_URL: process.env.API_GATEWAY_BASE_URL ?? 'http://api-gateway:9100',
  SIGN_UP_PATH: '/auth/sign-up',
  LOGIN_PATH: '/auth/login'
} as const
