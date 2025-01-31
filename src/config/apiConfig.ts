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
    zones: '/zones',
    updateZoneName: '/zones/{zoneId}/name'
  },
  master: {
    baseUrl: process.env.MASTER_DATA_SERVICE_BASE_URL ?? 'http://localhost:9006',
    boards: '/boards',
    locations: '/locations/{pincode}'
  },
  board: {
    baseUrl: process.env.FEED_SERVICE_BASE_URL ?? 'http://localhost:9005',
    boards: '/boards',
    updateName: '/boards/{boardId}/name'
  },
  feed: {
    baseUrl: process.env.FEED_SERVICE_BASE_URL ?? 'http://localhost:9005',
    feeds: '/feeds',
    updateName: '/feeds/{feedId}/name',
    updateValue: '/feeds/{feedId}/value'
  },
  widgets: {
    baseUrl: process.env.FEED_SERVICE_BASE_URL ?? 'http://localhost:9005',
    widgets: '/widgets',
    updateTitle: '/{widgetId}/title'
  },
  routine: {
    baseUrl: '/routines',
    routines: '',
    name: '/{routineId}/name'
  }
} as const
