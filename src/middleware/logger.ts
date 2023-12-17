import type { NextFunction, Request, Response } from 'express'
import logger from 'logging-starter'

export const attachTraceId = (req: Request, _res: Response, next: NextFunction): void => {
  req.app.locals.traceId = req.header('x-trace-id') ?? 'missing-trace-id'
  next()
}

export const logRequestAndResponse = (req: Request, res: Response, next: NextFunction): void => {
  const startTime = new Date()
  const searchableFields = { 'x-trace-id': req.app.locals.traceId as string }
  logger.request({ message: 'Received Request', method: req.method, url: req.url, searchableFields })
  const send = res.send
  let isLogged = false
  res.send = function (data: Record<string, unknown>) {
    const responseTime: number = new Date().getTime() - startTime.getTime()
    if (!isLogged) {
      logger.response({
        message: 'Response for the request',
        method: req.method,
        url: req.url,
        statusCode: res.statusCode,
        responseTime,
        searchableFields
      })
      isLogged = true
    }
    return send.call(this, data)
  }
  next()
}
