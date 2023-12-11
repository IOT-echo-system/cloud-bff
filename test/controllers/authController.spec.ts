import { AuthController } from '../../src/controllers'
import { AuthService } from '../../src/services'

describe('Auth Controller', () => {
  const authService = new AuthService()
  const authController = new AuthController(authService)

  beforeEach(jest.clearAllMocks)

  it('should call the sign up api', () => {
    jest.spyOn(authService, 'signUp').mockResolvedValue({ username: 'username' })

    authController.signUp({ username: 'username' })

    expect(authService.signUp).toHaveBeenCalledTimes(1)
    expect(authService.signUp).toHaveBeenCalledWith({ username: 'username' })
  })

  it('should call the login api', () => {
    jest.spyOn(authService, 'login').mockResolvedValue({ username: 'username' })

    authController.login({ username: 'username' })

    expect(authService.login).toHaveBeenCalledTimes(1)
    expect(authService.login).toHaveBeenCalledWith({ username: 'username' })
  })
})
