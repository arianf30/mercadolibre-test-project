import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import { RootProps } from '../interfaces/root-props'

import Routes from './routes'

const Router: React.FC<RootProps> = ({ ssProps, isBot }): React.ReactElement => {
  return (
    <Switch>
      {Routes.map((route, index) => (
        <Route path={route.path} exact={route.exact} key={index}>
          <route.component ssProps={ssProps} isBot={isBot} />
        </Route>
      ))}
    </Switch>
  )
}

export default Router
