import { apiConfig } from '../config/apiConfig'
import type { Request } from 'express'
import type { Zone } from '../typing/zone'
import WebClient from 'web-client-starter'

const zoneConfig = apiConfig.zone

export const zoneService = {
  addZone(request: Request): Promise<Zone> {
    return WebClient.post<Zone>({
      baseUrl: zoneConfig.baseUrl,
      path: zoneConfig.zones,
      headers: request.headers as Record<string, string>,
      body: request.body as Record<string, string>
    })
  }
} as const