import { Author } from './author'
import { Item } from './item'

export interface Items {
  author: Author
  categories: string[]
  items: Item[]
}
