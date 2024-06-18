import type { Request } from 'express'
import { levelMonitorWidgetService } from '../../services/widgets'
import type { LevelMonitorWidget } from '../../typing/widgets'

export const levelMonitorWidgetController = {
  updateValues(request: Request): Promise<LevelMonitorWidget> {
    return levelMonitorWidgetService.updateValues(request)
  }
} as const
