import { Express, Router } from 'express'
import itemRoutes from '../routes/item-routes'
import { matchPath } from 'react-router-dom'
import renderer from '../../client/helpers/renderer'
import Routes from '../../client/router/routes'

interface CurrentRoute {
  index: number
  pathFound?: {
    path: string
    url: string
    isExact: boolean
    params?: object
  }
}

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  // API routes
  itemRoutes(router)

  // Client routing
  app.get('*', (req, res) => {
    (async () => {
      // Get Server Side Props
      const getSsProps = async (): Promise<any> => {
        // Path Find
        let currentRoute: CurrentRoute = { index: 0 }
        Routes.forEach((route, index) => {
          const pathFound = matchPath(req.path, {
            path: route.path,
            exact: route.exact
          })
          if (pathFound !== null) {
            currentRoute = { index, pathFound }
            return currentRoute
          }
        })
        const indexCurrentRoute: number = currentRoute.index
        if (indexCurrentRoute > 0) {
          const route = Routes[`${indexCurrentRoute}`]
          if (route?.getSsProps !== undefined) {
            const params = currentRoute?.pathFound?.params
            const getSsPropsRoute = await route.getSsProps(params)
            return getSsPropsRoute
          }
        }
      }
      const ssProps = await getSsProps()

      // Print SSR Page
      return res.send(renderer(req, ssProps))
    })().catch(e =>
      res.status(500).send('Internal server error.'))
  })
}
