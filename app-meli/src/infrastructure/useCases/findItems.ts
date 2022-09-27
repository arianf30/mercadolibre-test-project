import axios from 'axios'
import { Item } from '../../domain/models/item/item'
import { Items } from '../../domain/models/item/items'
import { FindItems } from '../../domain/useCases/item/findItems'

const itemsConstructor = async (itemsFound: []): Promise<Items> => {
  const categories: string[] = []
  const items: Item[] = []

  const list = itemsFound.map(async (item: any) => {
    const categoryId: string = item.category_id
    const category = await axios(`https://api.mercadolibre.com/categories/${categoryId}`)
    const categoryName: string = category.data.name
    return {
      category: categoryName,
      item: {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: item.price.toString().split('.')[1]?.length ?? 0
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping
      }
    }
  })

  await Promise.all(list).then(resp => {
    resp.forEach(item => {
      const repeatCategory = categories.includes(item.category)
      if (!repeatCategory) {
        categories.push(item.category)
      }
      items.push(item.item)
    })
  }).catch(e => { console.log(e) })

  return {
    author: {
      name: 'Arián',
      lastname: 'Fernández'
    },
    categories,
    items
  }
}

export const findItemsData: FindItems = {
  find: async (query: string | null) => {
    try {
      let queryOk: string = ''
      if (typeof query === 'string') {
        queryOk = query
      }
      const response = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${queryOk}`)
      return await itemsConstructor(response.data.results)
    } catch (e) {
      throw new Error('Internal error.')
    }
  }
}
