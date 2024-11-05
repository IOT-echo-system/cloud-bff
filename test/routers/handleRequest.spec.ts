import webClient from 'web-client-starter'
import supertest from 'supertest'
import app from '../../src/app'
import logger from 'logging-starter'
import type { AxiosError, AxiosResponse } from 'axios'

describe('handle request test', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(console, 'log').mockImplementation()
    jest.spyOn(logger, 'error').mockImplementation()
  })

  afterEach(jest.clearAllMocks)

  it('should handle api failure', async () => {
    const error = new Error('Api down')
    jest.spyOn(webClient, 'post').mockRejectedValue(error)

    const response = await supertest(app)
      .post('/api/auth/login')
      .set('x-trace-id', 'trace-id')
      .send({ username: 'name' })

    expect(response.status).toStrictEqual(500)
    expect(response.body).toStrictEqual({ errorCode: 'IOT-3001', message: 'Internal server error' })

    expect(webClient.post).toHaveBeenCalledTimes(1)
    expect(webClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      path: '/login',
      body: { username: 'name' },
      headers: {
        'accept-encoding': 'gzip, deflate',
        connection: 'close',
        'content-length': '19',
        'content-type': 'application/json',
        host: expect.any(String),
        'x-trace-id': 'trace-id'
      }
    })
    expect(logger.error).toHaveBeenCalledTimes(1)
    expect(logger.error).toHaveBeenCalledWith({
      error,
      errorCode: 'API_FAILURE',
      errorMessage: 'Api failure response',
      searchableFields: { traceId: 'trace-id' }
    })
  })

  it('should handle axios error', async () => {
    const mockResponse: AxiosResponse = {
      data: { error: 'Some error message' },
      status: 403,
      statusText: 'Internal Server Error',
      headers: {},
      config: {}
    } as unknown as AxiosResponse

    const axiosError: AxiosError = {
      name: 'AxiosError',
      message: 'Request failed with status code 500',
      config: { headers: {} },
      code: 'ECONNABORTED',
      request: {},
      response: mockResponse,
      isAxiosError: true
    } as unknown as AxiosError
    jest.spyOn(webClient, 'post').mockRejectedValue(axiosError)

    const response = await supertest(app)
      .post('/api/auth/login')
      .set('x-trace-id', 'trace-id')
      .send({ username: 'name' })

    expect(response.status).toStrictEqual(403)
    expect(response.body).toStrictEqual({ error: 'Some error message' })

    expect(webClient.post).toHaveBeenCalledTimes(1)
    expect(webClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      path: '/login',
      body: { username: 'name' },
      headers: {
        'accept-encoding': 'gzip, deflate',
        connection: 'close',
        'content-length': '19',
        'content-type': 'application/json',
        host: expect.any(String),
        'x-trace-id': 'trace-id'
      }
    })
    expect(logger.error).toHaveBeenCalledTimes(1)
    expect(logger.error).toHaveBeenCalledWith({
      error: axiosError,
      errorCode: 'API_FAILURE',
      errorMessage: 'Api failure response',
      searchableFields: { traceId: 'trace-id' }
    })
  })

  it('should handle axios error without data', async () => {
    const mockResponse: AxiosResponse = {
      statusText: 'Internal Server Error',
      headers: {},
      config: {}
    } as unknown as AxiosResponse

    const axiosError: AxiosError = {
      name: 'AxiosError',
      message: 'Request failed with status code 500',
      config: { headers: {} },
      code: 'ECONNABORTED',
      request: {},
      response: mockResponse,
      isAxiosError: true
    } as unknown as AxiosError
    jest.spyOn(webClient, 'post').mockRejectedValue(axiosError)

    const response = await supertest(app)
      .post('/api/auth/login')
      .set('x-trace-id', 'trace-id')
      .send({ username: 'name' })

    expect(response.status).toStrictEqual(500)
    expect(response.body).toStrictEqual({ errorCode: 'IOT-3001', message: 'API failure' })

    expect(webClient.post).toHaveBeenCalledTimes(1)
    expect(webClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      path: '/login',
      body: { username: 'name' },
      headers: {
        'accept-encoding': 'gzip, deflate',
        connection: 'close',
        'content-length': '19',
        'content-type': 'application/json',
        host: expect.any(String),
        'x-trace-id': 'trace-id'
      }
    })
    expect(logger.error).toHaveBeenCalledTimes(1)
    expect(logger.error).toHaveBeenCalledWith({
      error: axiosError,
      errorCode: 'API_FAILURE',
      errorMessage: 'Api failure response',
      searchableFields: { traceId: 'trace-id' }
    })
  })
})
