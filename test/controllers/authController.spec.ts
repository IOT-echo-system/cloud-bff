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
})
