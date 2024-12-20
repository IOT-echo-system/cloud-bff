import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Premises } from '../typing/premises'
import WebClient from 'web-client-starter'
import '../utils/extensions'

const premisesConfig = apiConfig.premises

export const premisesService = {
  async addPremises(request: Request): Promise<Premises> {
    return WebClient.post<Premises>({
      baseUrl: premisesConfig.baseUrl,
      path: premisesConfig.premises,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  },

  updateProjectName(request: Request): Promise<Premises> {
    return WebClient.put<Premises>({
      baseUrl: premisesConfig.baseUrl,
      path: premisesConfig.name,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>,
      uriVariables: { boardId: request.params.projectId }
    })
  }
} as const
