import { premisesService } from '../services'
import type { Premises } from '../typing/premises'
import type { Request } from 'express'

export const premisesController = {
  addPremises(request: Request): Promise<Premises> {
    return premisesService.addPremises(request)
  },

  getPremises(request: Request): Promise<Premises[]> {
    return premisesService.getPremises(request)
  },

  getPremisesDetails(request: Request): Promise<Premises> {
    return premisesService.getPremisesDetails(request)
  },

  updatePremisesDetails(request: Request): Promise<Premises> {
    return premisesService.updatePremisesDetails(request)
  }
} as const
