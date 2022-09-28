import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import '@meli-project/ds.meli/lib/global.css'

const root = document.getElementById('root') as HTMLElement
const initialData = window && window.__INITIAL_DATA__

ReactDOM.hydrate(
  <div>
    <BrowserRouter>
      <Router ssProps={initialData.props} isBot={initialData.isBot} />
    </BrowserRouter>
  </div>,
  root
)
