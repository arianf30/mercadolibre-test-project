import * as React from 'react'
import { Helmet } from 'react-helmet'
import HeaderNavbar from '../components/HeaderNavbar'

export const Home: React.FC = (): React.ReactElement => {
  return (<>
    <Helmet>
      <title>Mercado Libre Argentina - Envíos gratis en el día</title>
      <meta name="description" content="Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles." data-head-react="true" />
      <meta name="keywords" content="vehículos, inmueble, supermercado, tecnología, hogar y muebles, electrodomésticos, herramientas, construcción" />
      <meta property='og:title' content="Mercado Libre Argentina - Envíos gratis en el día" />
      <meta property="og:image" content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2" data-head-react="true" />
      <meta name="google-site-verification" content="eLTYYI8nc5Fnsl6MUIz18z_ZWCnNemC0PNIx7Q1p_qQ" data-head-react="true" />
    </Helmet>
    <header role='banner'>
      <HeaderNavbar query='' />
    </header>
    <main></main>
  </>)
}

export default {
  component: Home
}
