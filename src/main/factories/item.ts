import { findItemsController } from '../../application/controllers/item/findItems'
import { getItemByIdController } from '../../application/controllers/item/getItemById'
import { findItemsData } from '../../infrastructure/useCases/findItems'
import { getItemByIdData } from '../../infrastructure/useCases/getItemById'
import { Controller } from '../interfaces/controller'

// Find Items
export const makeFindItemsController = (): Controller => {
  return findItemsController(findItemsData)
}

// Get Items By ID
export const makeGetItemByIdController = (): Controller => {
  return getItemByIdController(getItemByIdData)
}
