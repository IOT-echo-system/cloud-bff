import supertest from 'supertest'
import app from '../../src/app'
import webClient from '../../src/services/webClient'

jest.mock('web-client-starter')
describe('Auth Router', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(console, 'log').mockImplementation()
  })

  afterEach(jest.clearAllMocks)

  it('should test for post sign up api', async () => {
    jest.spyOn(webClient, 'post').mockResolvedValue({ success: true, message: 'successfully registered user' })

    const response = await supertest(app)
      .post('/api/auth/sign-up')
      .set('x-trace-id', 'trace-id')
      .send({ username: 'name' })

    expect(response.status).toStrictEqual(200)
    expect(response.body).toStrictEqual({ success: true, message: 'successfully registered user' })

    expect(webClient.post).toHaveBeenCalledTimes(1)
    expect(webClient.post).toHaveBeenCalledWith({
      baseUrl: '/auth',
      path: '/sign-up',
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
  })

  it('should test for post login api', async () => {
    jest.spyOn(webClient, 'post').mockResolvedValue({ token: 'token' })

    const response = await supertest(app)
      .post('/api/auth/login')
      .set('x-trace-id', 'trace-id')
      .send({ username: 'name' })

    expect(response.status).toStrictEqual(200)
    expect(response.body).toStrictEqual({ token: 'token' })

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
  })
})
