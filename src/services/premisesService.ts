import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Premises } from '../typing/premises'
import WebClient from 'web-client-starter'

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

  async getPremisesDetails(request: Request): Promise<Premises> {
    return WebClient.get<Premises>({
      baseUrl: premisesConfig.baseUrl,
      path: premisesConfig.premisesDetails,
      headers: request.headers as Record<string, string>,
      uriVariables: request.params
    })
    // const [premises, zones, boards] = await Promise.all([
    //   WebClient.get<Premises>({
    //     baseUrl: premisesConfig.baseUrl,
    //     path: premisesConfig.premisesDetails,
    //     headers: request.headers as Record<string, string>,
    //     uriVariables: request.params
    //   }),
    //   zoneService.getZonesByPremises(request, request.params.premisesId),
    //   boardService.getBoardsByPremises(request, request.params.premisesId)
    // ])
    //
    // return {
    //   ...premises,
    //   zones,
    //   zoneIds: zones.map(zone => zone.zoneId),
    //   boards,
    //   boardIds: boards.map(board => board.boardId)
    // }
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
