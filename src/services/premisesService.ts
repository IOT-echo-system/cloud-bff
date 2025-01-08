import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Premises, PremisesDetails } from '../typing/premises'
import WebClient from 'web-client-starter'
import { zoneService } from './zoneService'
import { boardService } from './boardService'

const premisesConfig = apiConfig.premises

export const premisesService = {
  addPremises(request: Request): Promise<Premises> {
    return WebClient.post<Premises>({
      baseUrl: premisesConfig.baseUrl,
      path: premisesConfig.premises,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  },

  getPremises(request: Request): Promise<Premises[]> {
    return WebClient.get<Premises[]>({
      baseUrl: premisesConfig.baseUrl,
      path: premisesConfig.premises,
      headers: request.headers as Record<string, string>
    })
  },

  async getPremisesDetails(request: Request): Promise<PremisesDetails> {
    const [premises, zones, boards] = await Promise.all([
      WebClient.get<Premises>({
        baseUrl: premisesConfig.baseUrl,
        path: premisesConfig.premisesDetails,
        headers: request.headers as Record<string, string>,
        uriVariables: request.params
      }),
      zoneService.getZonesByPremises(request),
      boardService.getBoardsByPremises(request)
    ])

    return {
      ...premises,
      zones,
      zoneIds: zones.map(zone => zone.zoneId),
      boards,
      boardIds: boards.map(board => board.boardId)
    }
  },

  updatePremisesDetails(request: Request): Promise<Premises> {
    return WebClient.put<Premises>({
      baseUrl: premisesConfig.baseUrl,
      path: premisesConfig.premisesDetails,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>,
      uriVariables: request.params
    })
  }
} as const
