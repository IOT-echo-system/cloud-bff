export const apiConfig = {
  baseUrl: process.env.API_GATEWAY_BASE_URL!,
  auth: {
    baseUrl: process.env.AUTH_SERVICE_BASE_URL ?? 'http://localhost:9001',
    login: '/auth/login',
    generateOtp: '/generate-otp',
    verifyOtp: '/verify-otp',
    resetPassword: '/reset-password',
    validate: '/auth/validate',
    policies: '/policies',
    updateToken: '/update-token',
    userDetails: '/user-details',
    logout: '/logout'
  },
  user: {
    baseUrl: process.env.USER_SERVICE_BASE_URL ?? 'http://localhost:9002',
    registration: '/users/registration',
    login: '/login',
    me: '/users/me',
    generateOtp: '/generate-otp',
    verifyOtp: '/verify-otp',
    resetPassword: '/reset-password',
    validate: '/validate',
    updateToken: '/update-token',
    userDetails: '/user-details',
    logout: '/logout'
  },
  premises: {
    baseUrl: process.env.USER_SERVICE_BASE_URL ?? 'http://localhost:9004',
    premises: '/premises',
    name: '/premises/{premisesId}/name'
  },
  role: {
    baseUrl: '/roles',
    roles: ''
  },
  policy: {
    baseUrl: '/policies',
    policies: ''
  },
  board: {
    baseUrl: '/boards',
    boards: '',
    name: '/{boardId}/name',
    secretKey: '/{boardId}/secret-key'
  },
  routine: {
    baseUrl: '/routines',
    routines: '',
    name: '/{routineId}/name'
  },
  widgets: {
    baseUrl: '/widgets',
    widgets: '',
    updateTitle: '/{widgetId}/title'
  }
} as const
