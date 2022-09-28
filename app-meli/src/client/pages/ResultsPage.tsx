import * as React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Items } from '../../domain/models/item/items'
import HeaderNavbar from '../components/HeaderNavbar'
import DynamicRendering from '../hooks/DynamicRendering'
import { ItemsResult } from '@meli-project/ds.meli-react'
import '@meli-project/ds.meli/lib/ItemsResult.css'
import '@meli-project/ds.meli/lib/Breadcrumb.css'

const InsideComponent = ({ ssProps }: { ssProps: Items }): React.ReactElement => {
  const [itemsCS, setItemsCS] = React.useState<Items>()
  const { query }: { query: string } = useParams()

  React.useEffect(() => {
    axios.get(`/api/items?query=${query}`).then(res => {
      setItemsCS(res?.data)
    }).catch(e => { return null })
  }, [query])
  const title = query.charAt(0).toUpperCase() + query.slice(1)
  return (<>
    <Helmet>
      <title>{title} | Mercado Libre Argentina</title>
      <meta name="description" content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles." data-head-react="true" />
      <meta name="keywords" content="vehículos, inmueble, supermercado, tecnología, hogar y muebles, electrodomésticos, herramientas, construcción" />
      <meta property='og:title' content="Mercado Libre Argentina - Envíos gratis en el día" />
      <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" data-head-react="true" />
      <meta name="google-site-verification" content="eLTYYI8nc5Fnsl6MUIz18z_ZWCnNemC0PNIx7Q1p_qQ" data-head-react="true" />
    </Helmet>
    <header role='banner'>
      <HeaderNavbar query={query} />
    </header>
    <main>
      {ssProps !== undefined && itemsCS === undefined &&
        <ItemsResult resItems={ssProps} />
      }
      {itemsCS !== undefined && <ItemsResult resItems={itemsCS} />}
    </main>
  </>)
}

const ResultsPage = ({ ssProps, isBot }: { ssProps: { props: Items }, isBot: boolean }): JSX.Element => {
  return <DynamicRendering isBot={isBot}>
    <InsideComponent ssProps={ssProps} />
  </DynamicRendering>
}

const getSsProps = async ({ query }: { query: string }): Promise<any> => {
  const baseUrl: string = process.env?.BASEURL ?? ''
  const response = await axios.get(`${baseUrl}/api/items?query=${query}`)

  return { props: response.data }
}

export default {
  getSsProps,
  component: ResultsPage
}
