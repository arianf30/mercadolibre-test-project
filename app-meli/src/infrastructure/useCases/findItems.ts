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
      path_from_root: category.data.path_from_root,
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
        free_shipping: item.shipping.free_shipping,
        address: item.address.state_name
      }
    }
  })

  await Promise.all(list).then(resp => {
    resp.forEach((item: any, i: number) => {
      if (i === 0) {
        item.path_from_root.map((itemCat: any) => categories.push(itemCat.name))
      }
      delete item.path_from_root
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
      const response = await axios(`https://api.mercadolibre.com/sites/MLA/search?q=${queryOk}&limit=4`)
      return await itemsConstructor(response.data.results)
    } catch (e) {
      throw new Error('Internal error.')
    }
  }
}
