import * as React from 'react'
import Image from '../../atoms/Image'
import SearchForm from '../../molecules/SearchForm'

interface NavbarProps {
  logoUrl: string
  logoSrc: any
  logoThumb: any
  placeholder: string
  value?: string
  ariaLabel: string
  handleSubmit: any
}

const Navbar: React.FC<NavbarProps> = ({ logoUrl, logoSrc, logoThumb, placeholder = 'Placeholder', value, ariaLabel = 'Ingresar texto', handleSubmit }): React.ReactElement => {
  return <div className='dsmeli-navbar-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-0-md col-1-lg' />
        <div className='col-1-md'>
          <a className='dsmeli-navbar-logo' href={logoUrl} tabIndex={1}>
            <Image src={logoSrc} thumb={logoThumb} height={36} width={53} alt="Mercado Libre Argentina - Donde comprar y vender de todo. Click para volver al inicio." />
          </a>
        </div>
        <div className='col-9-md'>
          <SearchForm value={value} placeholder={placeholder} ariaLabel={ariaLabel} handleSubmit={handleSubmit} tabIndex={2} />
        </div>
        <div className='col-0-md col-1-lg' />
      </div>
    </div>
  </div >
}

export default Navbar
