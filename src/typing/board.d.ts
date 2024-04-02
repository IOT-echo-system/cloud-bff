import type { Widget } from './widget'

export type BoardResponse = { projectId: string; boardId: string; name: string; status: 'HEALTHY' | 'UNHEALTHY' }
export type Board = BoardResponse & { widgets: Widget[] }
