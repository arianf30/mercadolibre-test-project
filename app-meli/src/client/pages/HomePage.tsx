import * as React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '@meli-project/ds.meli-react/src/organisms/Navbar'

export const Home = ({ ssProps }: { ssProps: any }): React.ReactElement => {
  return (<>
    <Helmet>
      <title>Mercado Libre Argentina - Envíos gratis en el día</title>
      <meta property='og:title' content="HomePage of de Local" />
    </Helmet>
    <header role='banner'>
      <Navbar logoSrc='/assets/Logo_ML@2x.png.png.png' logoThumb='/assets/Logo_ML.png' />
    </header>
  </>)
}

const getSsProps = async (): Promise<any> => {
  // const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
  // const itemsResponse: Items = {
  //   author: {
  //     name: 'Arián',
  //     lastname: 'Fernández'
  //   },
  //   categories: [],
  //   items: []
  // }
  // response.data.results.forEach((item: any) => {
  //   itemsResponse.items.push({
  //     id: item.id,
  //     title: item.title,
  //     price: {
  //       currency: item.current_id,
  //       amount: item.price,
  //       decimals: item.price.toString().split('.')[1]?.length ?? 0
  //     },
  //     picture: item.thumbnail,
  //     condition: item.condition,
  //     free_shipping: item.shipping.free_shipping
  //   })
  // })

  return { props: 'holus' }
}

export default {
  getSsProps,
  component: Home
}
