import * as React from 'react'

interface InputProps {
  placeholder?: string
  value?: string
  ariaLabel?: string
  tabIndex?: number
}

const InputSearch: React.FC<InputProps> = ({ placeholder = '', value, ariaLabel, tabIndex }) => {
  const className = 'dsmeli-inputsearch'
  return <input defaultValue={value} className={className} placeholder={placeholder} aria-label={ariaLabel} maxLength={120} tabIndex={tabIndex} />
}

export default InputSearch
