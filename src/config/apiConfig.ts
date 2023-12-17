export const apiConfig = {
  baseUrl: process.env.API_GATEWAY_BASE_URL!,
  auth: {
    baseUrl: '/auth',
    signUp: '/sign-up',
    login: '/login'
  }
} as const
