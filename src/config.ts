export const Config = {
  AUTH_SERVICE_BASE_URL: process.env.AUTH_SERVICE_BASE_URL ?? 'http://auth-service:9001',
  SIGN_UP_PATH: '/auth/sign-up',
  LOGIN_PATH: '/auth/login'
} as const
