import * as React from 'react'
import StaticRendering from '../components/StaticRendering'

const InsideComponent = (): any => {
  console.log('cliente')
  return <div>Hola!!</div>
}

const Item = (): React.ReactElement => {
  return <StaticRendering>
    <InsideComponent />
  </StaticRendering>
}

export default {
  getSsrProps: null,
  component: Item
}
