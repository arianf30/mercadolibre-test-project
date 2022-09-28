import * as React from 'react'
import InputSearch from '../../atoms/InputSearch'
import Image from '../../atoms/Image'

interface SearchFormProps {
  placeholder?: string
  value?: string
  ariaLabel?: string
  tabIndex?: number
  handleSubmit: any
}

const SearchForm: React.FC<SearchFormProps> = ({ placeholder, value, ariaLabel, tabIndex, handleSubmit }): React.ReactElement => {
  const className = 'dsmeli-searchform-container'
  return <div className={className}>
    <form onSubmit={(e) => handleSubmit(e)}>
      <InputSearch value={value} placeholder={placeholder} ariaLabel={ariaLabel} tabIndex={tabIndex} />
      <button type='submit' className='dsmeli-searchform-submit' aria-label='Buscar' tabIndex={-1}>
        <Image src='/assets/ic_Search@2x.png.png.png' thumb='/assets/ic_Search.png' />
      </button>
    </form>
  </div>
}

export default SearchForm
