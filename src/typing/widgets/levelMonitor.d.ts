export type LevelMonitorWidget = {
  projectId: string
  boardId: string
  widgetId: string
  widgetType: 'LEVEL_MONITOR'
  title: string
  minValue: number
  maxValue: number
  value: number
  actualValue: number
  minRange: number
  maxRange: number
  symbol: string
}

export type LevelMonitorValues = {
  minValue: number
  maxValue: number
  value: number
}
