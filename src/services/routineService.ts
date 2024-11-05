import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Routine } from '../typing/routine'
import WebClient from 'web-client-starter'

const { routine: routineConfig } = apiConfig

export const routineService = {
  async getRoutines(request: Request): Promise<Routine[]> {
    return WebClient.get<Routine[]>({
      baseUrl: routineConfig.baseUrl,
      path: routineConfig.routines,
      headers: request.headers as Record<string, string>
    })
  },

  async createNewRoutine(request: Request): Promise<Routine> {
    return WebClient.post<Routine>({
      baseUrl: routineConfig.baseUrl,
      path: routineConfig.routines,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  },

  updateRoutineName(request: Request): Promise<Routine> {
    return WebClient.put<Routine>({
      baseUrl: routineConfig.baseUrl,
      path: routineConfig.name,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>,
      uriVariables: { routineId: request.params.routineId }
    })
  }
} as const
