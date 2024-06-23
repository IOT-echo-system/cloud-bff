import WebSocket from 'ws'
import type { IncomingMessage } from 'http'
import type { Duplex } from 'stream'
import type { Express } from 'express'
import logger from 'logging-starter'
import type { Widget } from './typing/widget'

export enum WSEvent {
  UPDATE_WIDGET = 'UPDATE_WIDGET',
  ERROR = 'ERROR'
}

export type WSData = {
  event: WSEvent
  data: Record<string, unknown>
}

export class WSS {
  private readonly wss: WebSocket.Server
  private static readonly instance = new WSS()

  constructor() {
    this.wss = new WebSocket.WebSocketServer({ noServer: true, path: '/websockets' })
    this.init()
  }

  broadcast(payload: WSData): WSData {
    this.wss.clients.forEach(client => {
      client.send(JSON.stringify(payload))
    })
    logger.info({ message: 'Successfully broadcast message to UI', data: payload })
    return payload
  }

  updateWidget(widget: Widget): WSData {
    return this.broadcast({ event: WSEvent.UPDATE_WIDGET, data: widget })
  }

  listener(app: Express) {
    return (request: IncomingMessage, socket: Duplex, head: Buffer): void => {
      app.locals.wss = { broadcast: this.broadcast.bind(this), updateWidget: this.updateWidget.bind(this) }
      this.wss.handleUpgrade(request, socket, head, (websocket: WebSocket) => {
        this.wss.emit('connection', websocket, request)
      })
    }
  }

  private init() {
    this.wss.on('connection', (_ws: WebSocket, req: IncomingMessage) => {
      logger.info({ message: 'new connection established', data: { ip: req.socket.remoteAddress } })
    })
  }

  static getInstance(): WSS {
    return this.instance
  }
}

const wss = WSS.getInstance()
export default wss
