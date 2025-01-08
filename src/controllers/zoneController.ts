import { zoneService } from '../services'
import type { Request } from 'express'
import type { Zone } from '../typing/zone'

export const zoneController = {
  addZone(request: Request): Promise<Zone> {
    return zoneService.addZone(request)
  },

  getZonesByPremises(request: Request): Promise<Zone[]> {
    return zoneService.getZonesByPremises(request)
  }
} as const
