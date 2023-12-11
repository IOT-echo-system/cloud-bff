import { jest } from '@jest/globals'

describe('Config', () => {
  beforeEach(jest.resetAllMocks)
  it('should use environment variables when set', () => {
    jest.replaceProperty(process, 'env', {
      ...process.env,
      AUTH_SERVICE_BASE_URL: 'http://custom-auth-service:8080'
    })

    const { AUTH_SERVICE_BASE_URL } = require('../src/config').Config

    expect(AUTH_SERVICE_BASE_URL).toStrictEqual('http://custom-auth-service:8080')
  })
})
