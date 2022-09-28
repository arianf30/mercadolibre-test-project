import * as React from 'react'

interface ButtonProps {
  label: string
}

const ButtonPrimary: React.FC<ButtonProps> = ({ label }) => {
  const className = 'dsmeli-button-container'
  return <button className={className} tabIndex={-1}>{label}</button>
}

export default ButtonPrimary
