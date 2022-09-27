import * as React from 'react'
// import axios from 'axios'
import { Helmet } from 'react-helmet'
import DynamicRendering from '../components/DynamicRendering'

const InsideComponent = ({ ssProps }: { ssProps: {} }): React.ReactElement => {
  const [counter, setCounter] = React.useState(0)
  return (
    <>
      <Helmet>
        <title>AdminPage of de Local</title>
        <meta property='og:title' content="HomePage of de Local" />
      </Helmet>
      <div>Estás en <strong>ADMIN</strong>!</div>
      <h1>{counter}</h1>
      <button onClick={() => setCounter(prev => prev + 1)}>Aumentar</button>
    </>
  )
}

const Admin = ({ ssProps, isBot }: { ssProps: {}, isBot: boolean }): JSX.Element => {
  return <DynamicRendering isBot={isBot}>
    <InsideComponent ssProps={ssProps} />
  </DynamicRendering>
}

const getSsProps = async ({ query }: { query: string }): Promise<{}> => {
  return { props: { name: query } }
}

export default {
  getSsProps,
  component: Admin
}
