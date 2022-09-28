import * as React from 'react'
import InputSearch from '../../atoms/InputSearch'
import '@meli-project/ds.meli/lib/SearchForm.css'
import Image from '../../atoms/Image'

interface SearchFormProps {
  placeholder?: string
  ariaLabel?: string
  tabIndex?: number
}

const SearchForm: React.FC<SearchFormProps> = ({ placeholder, ariaLabel, tabIndex }) => {
  const className = 'dsmeli-searchform-container'
  return <div className={className}>
    <form action='/'>
      <InputSearch placeholder={placeholder} ariaLabel={ariaLabel} tabIndex={tabIndex} />
      <div className='dsmeli-searchform-icon'>
        <Image src='/assets/ic_Search@2x.png.png.png' thumb='' alt='Icono de búsqueda' />
      </div>
    </form>
  </div>
}

export default SearchForm
