import { jest } from '@jest/globals'

describe('Config', () => {
  beforeEach(jest.resetAllMocks)
  it('should use environment variables when set', () => {
    jest.replaceProperty(process, 'env', {
      ...process.env,
      API_GATEWAY_BASE_URL: 'http://custom-auth-service:8080'
    })

    const { API_GATEWAY_BASE_URL } = require('../src/config').Config

    expect(API_GATEWAY_BASE_URL).toStrictEqual('http://custom-auth-service:8080')
  })
})
