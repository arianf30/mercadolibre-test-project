import { Router } from 'express'
import { AdapterRoute } from '../adapters/express-adapter'
import { makeFindItemsController, makeGetItemByIdController } from '../factories/item'

/* eslint-disable @typescript-eslint/no-misused-promises */
export default (router: Router): void => {
  router.get('/items', AdapterRoute(makeFindItemsController()))
  router.get('/items/:id', AdapterRoute(makeGetItemByIdController()))
}
