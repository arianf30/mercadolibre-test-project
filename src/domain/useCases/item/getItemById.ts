import { ItemID } from '../../models/item/itemId'
import { ErrorClient } from '../../../main/interfaces/error'

export interface GetItemById {
  getItem: (id: string) => Promise<ItemID | ErrorClient>
}
