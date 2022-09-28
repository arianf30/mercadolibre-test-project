import * as React from 'react'
import '@meli-project/ds.meli/lib/InputSearch.css'

interface InputProps {
  placeholder?: string
  ariaLabel?: string
  tabIndex?: number
}

const InputSearch: React.FC<InputProps> = ({ placeholder = '', ariaLabel, tabIndex }) => {
  const className = 'dsmeli-inputsearch'
  return <input className={className} placeholder={placeholder} aria-label={ariaLabel} maxLength={120} tabIndex={tabIndex} />
}

export default InputSearch
