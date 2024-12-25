import { setupServer } from 'msw/node'
import { authHandlers } from './authHandlers'
import { userHandlers } from './userHandlers'
import { premisesHandlers } from './premisesHandlers'
import { zoneHandlers } from './zoneHandlers'
import { masterHandlers } from './masterHandlers'
import { boardsHandlers } from './boardsHandlers'

export const mockServer = setupServer(
  ...authHandlers,
  ...userHandlers,
  ...premisesHandlers,
  ...zoneHandlers,
  ...masterHandlers,
  ...boardsHandlers
)
