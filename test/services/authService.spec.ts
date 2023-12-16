import { AuthService } from '../../src/services'
import WebClient from 'web-client-starter/lib'

describe('Auth Service', () => {
  const authService = new AuthService()

  beforeEach(jest.clearAllMocks)

  it('should call the sign up api', () => {
    jest.spyOn(WebClient, 'post').mockResolvedValue({ username: 'username' })

    authService.signUp({ username: 'username' })

    expect(WebClient.post).toHaveBeenCalledTimes(1)
    expect(WebClient.post).toHaveBeenCalledWith({
      baseUrl: 'http://api-gateway:9100',
      body: { username: 'username' },
      path: '/auth/sign-up'
    })
  })

  it('should call the login api', () => {
    jest.spyOn(WebClient, 'post').mockResolvedValue({ username: 'username' })

    authService.login({ username: 'username' })

    expect(WebClient.post).toHaveBeenCalledTimes(1)
    expect(WebClient.post).toHaveBeenCalledWith({
      baseUrl: 'http://api-gateway:9100',
      body: { username: 'username' },
      path: '/auth/login'
    })
  })
})
