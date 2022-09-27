import { Items } from '../../models/item/items'

export interface FindItems {
  find: (query: string) => Promise<Items>
}
