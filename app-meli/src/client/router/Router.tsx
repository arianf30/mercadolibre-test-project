import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import Routes from './routes'

export default function Router({ ssProps, isBot }) {
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
