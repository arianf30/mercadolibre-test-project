import { findItemsData } from './findItems'

describe('findItems', () => {
  test('send query and receive array data', async () => {
    const response = await findItemsData.find('adidas')
    expect(Array.isArray(response.items)).toBeTruthy()
  })

  test('send empty query and receive empty array', async () => {
    const response = await findItemsData.find('')
    expect(Array.isArray(response.items) && response.items.length === 0).toBeTruthy()
  })
})
