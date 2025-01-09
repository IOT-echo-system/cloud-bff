export const apiConfig = {
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
    baseUrl: process.env.PREMISES_SERVICE_BASE_URL ?? 'http://localhost:9004',
    premises: '/premises',
    premisesDetails: '/premises/{premisesId}',
    zones: '/premises/{premisesId}/zones',
    updateZoneName: '/premises/{premisesId}/zones/{zoneId}/name'
  },
  master: {
    baseUrl: process.env.MASTER_DATA_SERVICE_BASE_URL ?? 'http://localhost:9005',
    boards: '/boards',
    locations: '/locations/{pincode}'
  },
  board: {
    baseUrl: process.env.DEVICE_SERVICE_BASE_URL ?? 'http://localhost:9006',
    boards: '/premises/{premisesId}/boards',
    updateName: '/premises/{premisesId}/boards/{boardId}/name'
  },
  role: {
    baseUrl: '/roles',
    roles: ''
  },
  policy: {
    baseUrl: '/policies',
    policies: ''
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
