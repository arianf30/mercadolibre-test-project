import axios from 'axios'
import { ItemID } from '../../domain/models/item/itemId'
import { GetItemById } from '../../domain/useCases/item/getItemById'
import { ErrorClient } from '../../main/interfaces/error'

const itemConstructor = async (item: any): Promise<ItemID> => {
  const itemId: string = item.id
  const getItemDescription = await axios(`https://api.mercadolibre.com/items/${itemId}/description`)
  const itemDescription = getItemDescription.data.plain_text

  return {
    author: {
      name: 'Arián',
      lastname: 'Fernández'
    },
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
      sold_quantity: item.sold_quantity,
      description: itemDescription
    }
  }
}

export const getItemByIdData: GetItemById = {
  getItem: async (id: string): Promise<ItemID | ErrorClient> => {
    try {
      const response = await axios(`https://api.mercadolibre.com/items/${id}`)
      return await itemConstructor(response.data)
    } catch (e: any) {
      throw new Error(e.message)
    }
  }
}
