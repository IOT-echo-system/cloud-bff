import { authService } from '../../src/services'
import WebClient from 'web-client-starter/lib'
import type { Request } from 'express'

describe('Auth Service', () => {
  beforeEach(jest.clearAllMocks)

  it('should call the sign up api', () => {
    jest.spyOn(WebClient, 'post').mockResolvedValue({ username: 'username' })
    const mockRequest = { body: { username: 'username' }, headers: {} } as Request

    authService.signUp(mockRequest)

    expect(WebClient.post).toHaveBeenCalledTimes(1)
    expect(WebClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      body: { username: 'username' },
      path: '/sign-up',
      headers: {}
    })
  })

  it('should call the login api', () => {
    jest.spyOn(WebClient, 'post').mockResolvedValue({ username: 'username' })
    const mockRequest = { body: { username: 'username' }, headers: {} } as Request

    authService.login(mockRequest)

    expect(WebClient.post).toHaveBeenCalledTimes(1)
    expect(WebClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      body: { username: 'username' },
      path: '/login',
      headers: {}
    })
  })
})
