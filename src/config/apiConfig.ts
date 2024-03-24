export const apiConfig = {
  baseUrl: process.env.API_GATEWAY_BASE_URL!,
  auth: {
    baseUrl: '/auth',
    signUp: '/sign-up',
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
    accountDetails: '/account-details'
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
    updateBoardName: '/{boardId}/name'
  }
} as const
