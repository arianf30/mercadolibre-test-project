import supertest from 'supertest'
import app from '../main/config/app'

const api = supertest(app)

describe('API Item', () => {
  test('GET /api/items: returned status 200', async () => {
    await api
      .get('/api/items')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('GET /api/items: not send query and receive empty array', async () => {
    const response = await api.get('/api/items')
    expect(Array.isArray(response.body.items)).toBeTruthy()
  })

  test('GET /api/items?query=x: send query to api and receive items', async () => {
    const response = await api.get('/api/items?query=adidas')
    expect(response.body.items.length > 0).toBeTruthy()
  })

  test('GET /api/items/:id: send correct ID item and receive the item', async () => {
    const itemId = 'MLA1110356781'
    const response = await api.get(`/api/items/${itemId}`)
    expect(response.body.item.id).toBe(itemId)
  })

  test('GET /api/items/:id: send incorrect ID and return error', async () => {
    const itemId = 'incorrect'
    const response = await api.get(`/api/items/${itemId}`)
    expect(response.body.error).toBe('resource not found')
  })
})
