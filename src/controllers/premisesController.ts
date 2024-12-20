import { premisesService } from '../services'
import type { Premises } from '../typing/premises'
import type { Request } from 'express'

export const premisesController = {
  addPremises(request: Request): Promise<Premises> {
    return premisesService.addPremises(request)
  },

  updateProjectName(request: Request): Promise<Premises> {
    return premisesService.updateProjectName(request)
  }
} as const
