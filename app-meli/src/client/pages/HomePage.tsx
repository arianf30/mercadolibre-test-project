import * as React from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
// Domain
import { Items } from '../../domain/models/item/items'

export const Home = ({ ssProps }: { ssProps: any }): React.ReactElement => {
  const [counter, setCounter] = React.useState(0)
  React.useEffect(() => {
    console.log(ssProps)
  }, [])

  return (<>
    <Helmet>
      <title>HomePage of de Local</title>
      <meta property='og:title' content="HomePage of de Local" />
    </Helmet>
    <ul className='tipo'>Resultados de la búsqueda: {counter}
      <li></li>
    </ul>
    <button onClick={() => setCounter(prev => prev + 1)}>Sumar</button>
  </>)
}

const getSsProps = async ({ query }: { query: string }): Promise<any> => {
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
  component: Home
}
