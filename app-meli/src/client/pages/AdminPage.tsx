import axios from 'axios'
import * as React from 'react'
// import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Items } from '../../domain/models/item/items'
import DynamicRendering from '../components/DynamicRendering'

const InsideComponent = ({ ssProps }: { ssProps: {} }): React.ReactElement => {
  const [counter, setCounter] = React.useState(0)
  console.log(ssProps)
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

const getSsProps = async ({ query }: any): Promise<any> => {
  const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
  const itemsResponse: Items = {
    author: {
      name: 'Arián',
      lastname: 'Fernández'
    },
    categories: [],
    items: []
  }
  response.data.results.forEach((item: any) => {
    itemsResponse.items.push({
      id: item.id,
      title: item.title,
      price: {
        currency: item.current_id,
        amount: item.price,
        decimals: item.price.toString().split('.')[1]?.length ?? 0
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    })
  })

  return { props: itemsResponse }
}

export default {
  getSsProps,
  component: Admin
}
