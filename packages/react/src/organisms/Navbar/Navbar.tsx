import * as React from 'react'
import Image from '../../atoms/Image'
import SearchForm from '../../molecules/SearchForm'
import '@meli-project/ds.meli/lib/Navbar.css'

interface NavbarProps {
  logoSrc: any
  logoThumb: any
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, logoThumb }): React.ReactElement => {
  return <div className='dsmeli-navbar-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-1-xl' />
        <div className='col-1-xl'>
          <Image src={logoSrc} thumb={logoThumb} height={36} width={53} alt="Logo de Mercado Libre" />
        </div>
        <div className='col-9-xl'>
          <SearchForm placeholder='Nunca dejes de buscar' />
        </div>
        <div className='col-1-xl' />
      </div>
    </div>
  </div>
}

export default Navbar
