import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Zone } from '../typing/zone'
import WebClient from 'web-client-starter'

const zoneConfig = apiConfig.premises

export const zoneService = {
  addZone(request: Request): Promise<Zone> {
    return WebClient.post<Zone>({
      baseUrl: zoneConfig.baseUrl,
      path: zoneConfig.zones,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  },

  getZonesByPremises(request: Request): Promise<Zone[]> {
    return WebClient.get<Zone[]>({
      baseUrl: zoneConfig.baseUrl,
      path: zoneConfig.zones,
      headers: request.headers as Record<string, string>
    })
  },

  updateZoneName(request: Request): Promise<Zone> {
    return WebClient.put<Zone>({
      baseUrl: zoneConfig.baseUrl,
      path: zoneConfig.updateZoneName,
      headers: request.headers as Record<string, string>,
      uriVariables: request.params
    })
  }
} as const
