import * as React from 'react'

interface ButtonProps {
  label: string
}

const Button: React.FC<ButtonProps> = ({ label }) => {
  return <button className='dsmeli-button-container'>{label}</button>
}

export default Button
