import type { NextFunction, Request, Response } from 'express'
import logger from 'logging-starter'

export const logRequestAndResponse = (req: Request, res: Response, next: NextFunction): void => {
  const startTime = new Date()
  const url = req.url
  logger.request({
    message: 'Received Request',
    method: req.method,
    url: url,
    data: { body: req.body as Record<string, unknown> }
  })
  const send = res.send
  let isLogged = false
  res.send = function (data: Record<string, unknown>) {
    const responseTime: number = new Date().getTime() - startTime.getTime()
    if (!isLogged) {
      logger.response({
        message: 'Response for the request',
        method: req.method,
        url: url,
        statusCode: res.statusCode,
        responseTime,
        data: { body: req.body as Record<string, unknown> }
      })
      isLogged = true
    }
    return send.call(this, data)
  }
  next()
}
