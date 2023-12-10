import app from '../src/app'
import supertest from 'supertest'

describe('GET /', () => {
  it('responds with JSON containing the welcome message', async () => {
    const response = await supertest(app).get('/')
    expect(response.status).toStrictEqual(200)
    expect(response.body).toStrictEqual({ message: 'Hello human, you have just arrived at cloud-bff' })
  })
})
