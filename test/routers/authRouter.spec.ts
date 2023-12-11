import supertest from 'supertest'
import { authController } from '../../src/routers/controller'
import app from '../../src/app'

jest.mock('../../src/routers/controller')
describe('Auth Router', () => {
  it('should test for post sign up api', async () => {
    jest.spyOn(authController, 'signUp').mockResolvedValue({ username: 'username' })

    const response = await supertest(app).post('/api/auth/sign-up').send({ username: 'name' })

    expect(response.status).toStrictEqual(200)
    expect(response.body).toStrictEqual({ username: 'username' })

    expect(authController.signUp).toHaveBeenCalledTimes(1)
    expect(authController.signUp).toHaveBeenCalledWith({ username: 'name' })
  })

  it('should test for post login api', async () => {
    jest.spyOn(authController, 'login').mockResolvedValue({ username: 'username' })

    const response = await supertest(app).post('/api/auth/login').send({ username: 'name' })

    expect(response.status).toStrictEqual(200)
    expect(response.body).toStrictEqual({ username: 'username' })

    expect(authController.login).toHaveBeenCalledTimes(1)
    expect(authController.login).toHaveBeenCalledWith({ username: 'name' })
  })
})
