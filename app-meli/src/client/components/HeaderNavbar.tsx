import * as React from 'react'
import { useHistory } from 'react-router'
import { Navbar } from '@meli-project/ds.meli-react'
import '@meli-project/ds.meli/lib/Image.css'
import '@meli-project/ds.meli/lib/InputSearch.css'
import '@meli-project/ds.meli/lib/Navbar.css'
import '@meli-project/ds.meli/lib/SearchForm.css'

interface HeaderNavbarProps {
  query: string
}

const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ query }): React.ReactElement => {
  const history = useHistory()
  const handleSubmit = (e: any): void => {
    e.preventDefault()
    const query: string = e.target.querySelector('input').value
    console.log(query)
    if (query.length > 1) {
      history.push(`/${query}`)
    }
  }

  return <Navbar value={query} logoUrl='/' logoSrc='/assets/Logo_ML@2x.png.png.png' logoThumb='/assets/Logo_ML.png' placeholder='Nunca dejes de buscar' ariaLabel='Ingresa lo que quieras encontrar' handleSubmit={handleSubmit} />
}

export default HeaderNavbar
