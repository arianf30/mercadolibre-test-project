import { Router } from 'express'
import { AdapterRoute } from '../adapters/express-adapter'
import { makeFindItemsController } from '../factories/item'

export default (router: Router): void => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  router.get('/items', AdapterRoute(makeFindItemsController()))
}
