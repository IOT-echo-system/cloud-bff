export const apiConfig = {
  baseUrl: process.env.API_GATEWAY_BASE_URL!,
  auth: {
    baseUrl: process.env.AUTH_SERVICE_BASE_URL!,
    login: '/auth/login',
    generateOtp: '/generate-otp',
    verifyOtp: '/verify-otp',
    resetPassword: '/reset-password',
    validate: '/validate',
    updateToken: '/update-token',
    userDetails: '/user-details',
    logout: '/logout'
  },
  user: {
    baseUrl: process.env.USER_SERVICE_BASE_URL!,
    registration: '/users/registration',
    login: '/login',
    generateOtp: '/generate-otp',
    verifyOtp: '/verify-otp',
    resetPassword: '/reset-password',
    validate: '/validate',
    updateToken: '/update-token',
    userDetails: '/user-details',
    logout: '/logout'
  },
  project: {
    baseUrl: '/accounts',
    accounts: '',
    accountDetails: '/account-details',
    name: '/{projectId}/name'
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
