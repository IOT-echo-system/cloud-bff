import { setupServer } from 'msw/node'
import { authHandlers } from './authHandlers'
import { userHandlers } from './userHandlers'
import { premisesHandlers } from './premisesHandlers'

export const mockServer = setupServer(...authHandlers, ...userHandlers, ...premisesHandlers)
