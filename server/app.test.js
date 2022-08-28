import request from 'supertest'
import app from './app.js'

describe('Test the root path', () => {
  test('It should response the GET method with a not found', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(404)
  })
})

describe('Test the status path', () => {
  test('It should response the GET method with a not found', async () => {
    const response = await request(app).get('/api/status')
    expect(response.statusCode).toBe(200)
  })
})

describe('Test the api path', () => {
  test('It should response the GET method with an empty body', async () => {
    const response = await request(app).get('/api/grocery/1')
    const body = await response.body
    expect(body).toBe('')
  })

  test('It should response the PUT method with an status ok', async () => {
    const response = await request(app)
      .put('/api/grocery/1')
      .send({ title: 'foo' })
    const body = await response.body
    expect(body).toEqual({ status: 'ok' })
  })

  test('It should response the GET method with now a real list', async () => {
    const response = await request(app).get('/api/grocery/1')
    const body = await response.body
    expect(body).toEqual({ title: 'foo' })
  })
})
