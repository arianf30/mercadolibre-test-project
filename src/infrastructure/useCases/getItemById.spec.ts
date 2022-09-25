import { getItemByIdData } from './getItemById'

describe('getItemById', () => {
  test('send correct ID and receive data item', async () => {
    const response = await getItemByIdData.getItem('MLA1110356781')
    expect(typeof response).toBe('object')
  })
})
