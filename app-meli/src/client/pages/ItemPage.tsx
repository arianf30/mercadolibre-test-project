import * as React from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import { Item } from '../../domain/models/item/item'
import HeaderNavbar from '../components/HeaderNavbar'
import DynamicRendering from '../hooks/DynamicRendering'
import { ItemIdResult } from '@meli-project/ds.meli-react'
import '@meli-project/ds.meli/lib/ItemIdResult.css'
import '@meli-project/ds.meli/lib/Breadcrumb.css'
import '@meli-project/ds.meli/lib/ButtonPrimary.css'

const InsideComponent = ({ ssProps }: { ssProps: Item }): React.ReactElement => {
  const [itemCS, setItemCS] = React.useState<Item>()
  const { id }: { id: string } = useParams()

  React.useEffect(() => {
    axios.get(`/api/items/${id}`).then(res => {
      setItemCS(res?.data)
    }).catch(e => { return null })
  }, [id])

  return (<>
    <Helmet>
      <title>{itemCS?.item?.title ?? ssProps?.item?.title} - Envíos gratis en el día 📦</title>
      <meta name="description" content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles." data-head-react="true" />
      <meta name="keywords" content="vehículos, inmueble, supermercado, tecnología, hogar y muebles, electrodomésticos, herramientas, construcción" />
      <meta property='og:title' content="Mercado Libre Argentina - Envíos gratis en el día" />
      <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" data-head-react="true" />
      <meta name="google-site-verification" content="eLTYYI8nc5Fnsl6MUIz18z_ZWCnNemC0PNIx7Q1p_qQ" data-head-react="true" />
    </Helmet>
    <header role='banner'>
      <HeaderNavbar id={id} />
    </header>
    <main>
      {ssProps !== undefined && itemCS === undefined &&
        <ItemIdResult resItem={ssProps} />
      }
      {itemCS !== undefined && <ItemIdResult resItem={itemCS} />}
    </main>
  </>)
}

const ItemPage = ({ ssProps, isBot }: { ssProps: { props: Item }, isBot: boolean }): JSX.Element => {
  return <DynamicRendering isBot={isBot}>
    <InsideComponent ssProps={ssProps} />
  </DynamicRendering>
}

const getSsProps = async ({ id }: { id: string }): Promise<any> => {
  const baseUrl: string = process.env?.BASEURL ?? ''
  const response = await axios.get(`${baseUrl}/api/items/${id}`)

  return { props: response.data }
}

export default {
  getSsProps,
  component: ItemPage
}
