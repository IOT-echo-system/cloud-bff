import { authService } from '../../src/services'
import WebClient from 'web-client-starter/lib'
import type { Request } from 'express'

describe('Auth Service', () => {
  beforeEach(jest.clearAllMocks)

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

  it('should call the generate otp api', () => {
    jest.spyOn(WebClient, 'post').mockResolvedValue({ success: true, otpId: 'otpId' })
    const mockRequest = { body: { email: 'email' }, headers: {} } as Request

    authService.generateOtp(mockRequest)

    expect(WebClient.post).toHaveBeenCalledTimes(1)
    expect(WebClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      body: { email: 'email' },
      path: '/generate-otp',
      headers: {}
    })
  })

  it('should call the verify otp api', () => {
    jest.spyOn(WebClient, 'post').mockResolvedValue({ success: true, token: 'token' })
    const mockRequest = { body: { otpId: 'otpId', otp: '123456' }, headers: {} } as Request

    authService.verifyOtp(mockRequest)

    expect(WebClient.post).toHaveBeenCalledTimes(1)
    expect(WebClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      body: { otp: '123456', otpId: 'otpId' },
      path: '/verify-otp',
      headers: {}
    })
  })

  it('should call the reset password api', () => {
    jest.spyOn(WebClient, 'post').mockResolvedValue({ success: true })
    const mockRequest = { body: { password: 'password' }, headers: {} } as Request

    authService.resetPassword(mockRequest)

    expect(WebClient.post).toHaveBeenCalledTimes(1)
    expect(WebClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      body: { password: 'password' },
      path: '/reset-password',
      headers: {}
    })
  })

  it('should call the validate api', () => {
    jest.spyOn(WebClient, 'get').mockResolvedValue({ userId: 'userId' })
    const mockRequest = { headers: {} } as Request

    authService.validate(mockRequest)

    expect(WebClient.get).toHaveBeenCalledTimes(1)
    expect(WebClient.get).toHaveBeenCalledWith({
      baseUrl: '/auth',
      path: '/validate',
      headers: {}
    })
  })
})
