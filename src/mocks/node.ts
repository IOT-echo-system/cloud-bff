import { setupServer } from 'msw/node'
import { authHandlers } from './authHandlers'
import { userHandlers } from './userHandlers'
import { premisesHandlers } from './premisesHandlers'
import { zoneHandlers } from './zoneHandlers'

export const mockServer = setupServer(...authHandlers, ...userHandlers, ...premisesHandlers, ...zoneHandlers)
