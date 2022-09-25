import { Router } from 'express'
import { AdapterRoute } from '../adapters/express-adapter'
import { makeFindItemsController } from '../factories/item'

export default (router: Router): void => {
  router.get('/items', AdapterRoute(makeFindItemsController()))
}
