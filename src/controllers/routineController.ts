import { routineService } from '../services'
import type { Routine } from '../typing/routine'
import type { Request } from 'express'

export const routineController = {
  getRoutines(request: Request): Promise<Routine[]> {
    return routineService.getRoutines(request)
  },

  addRoutine(request: Request): Promise<Routine> {
    return routineService.createNewRoutine(request)
  },

  updateRoutineName(request: Request): Promise<Routine> {
    return routineService.updateRoutineName(request)
  }
} as const
