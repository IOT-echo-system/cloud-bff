import { authService } from '../../src/services'
import { authController } from '../../src/controllers'
import type { Request } from 'express'

describe('Auth Controller', () => {
  beforeEach(jest.clearAllMocks)

  it('should call the sign up api', () => {
    jest.spyOn(authService, 'signUp').mockResolvedValue({ success: true, message: 'Successfully registered user' })
    const mockRequest = { body: { username: 'username' }, headers: {} } as Request

    authController.signUp(mockRequest)

    expect(authService.signUp).toHaveBeenCalledTimes(1)
    expect(authService.signUp).toHaveBeenCalledWith(mockRequest)
  })

  it('should call the login api', () => {
    jest.spyOn(authService, 'login').mockResolvedValue({ token: 'token' })
    const mockRequest = { body: { username: 'username' }, headers: {} } as Request

    authController.login(mockRequest)

    expect(authService.login).toHaveBeenCalledTimes(1)
    expect(authService.login).toHaveBeenCalledWith(mockRequest)
  })

  it('should call the generate otp api', () => {
    jest.spyOn(authService, 'generateOtp').mockResolvedValue({ otpId: 'otpId', success: true, generateAt: new Date() })
    const mockRequest = { body: { username: 'username' }, headers: {} } as Request

    authController.generateOtp(mockRequest)

    expect(authService.generateOtp).toHaveBeenCalledTimes(1)
    expect(authService.generateOtp).toHaveBeenCalledWith(mockRequest)
  })

  it('should call the verify otp api', () => {
    jest.spyOn(authService, 'verifyOtp').mockResolvedValue({ success: true, token: 'token' })
    const mockRequest = { body: { otpId: 'otpId', otp: '123456' }, headers: {} } as Request

    authController.verifyOtp(mockRequest)

    expect(authService.verifyOtp).toHaveBeenCalledTimes(1)
    expect(authService.verifyOtp).toHaveBeenCalledWith(mockRequest)
  })

  it('should call the reset password api', () => {
    jest.spyOn(authService, 'resetPassword').mockResolvedValue({ success: true })
    const mockRequest = { body: { password: 'password' }, headers: {} } as Request

    authController.resetPassword(mockRequest)

    expect(authService.resetPassword).toHaveBeenCalledTimes(1)
    expect(authService.resetPassword).toHaveBeenCalledWith(mockRequest)
  })
})
