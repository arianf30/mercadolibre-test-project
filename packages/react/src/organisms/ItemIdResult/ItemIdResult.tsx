import * as React from 'react'
import Breadcrumb from '../../atoms/Breadcrumb'
import ButtonPrimary from '../../atoms/ButtonPrimary'
import Image from '../../atoms/Image'

interface ItemIdResultProps {
  resItem: any
}

const ItemIdResult: React.FC<ItemIdResultProps> = ({ resItem }): React.ReactElement => {
  const item = resItem.item
  const itemPriceNumber: number = item.price.amount.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  })
  const categories = resItem.item.path_from_root.map((itemCat: any) => { return itemCat.name })
  let itemCondition = ''
  if (item.condition === 'new') { itemCondition = 'Nuevo' }
  if (item.condition === 'used') { itemCondition = 'Usado' }

  let categoryText = 'Las categorías de esta sección son: '
  categories.forEach((categoria: string) => {
    categoryText = `${categoryText} ${categoria}; `
  })

  return <section className='dsmeli-itemidresult-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-1-md' />
        <div className='col-10-md' tabIndex={3} aria-label={categoryText}>
          <Breadcrumb items={categories} />
        </div>
        <div className='col-1-md' />
      </div>
      <div className='row'>
        <div className='col-0-md col-1-lg' />
        <div className='col-10-md'>
          <div className='container-elements'>

            <div className='dsmeli-product__id'>
              <div className='dsmeli-productid__image_container' aria-label={item.title} tabIndex={4}>
                <Image src={item.picture} thumb={item.picture} />
              </div>
              <div className='dsmeli-productid__body'>
                <p className='dsmeli-productid__status' tabIndex={5} aria-label={`El producto es: ${itemCondition}. Cantidad vendida: ${item.sold_quantity}`}>{itemCondition} - {item.sold_quantity} vendidos</p>
                <div className='dsmeli-productid__title_a'>
                  <h1 className='dsmeli-productid__title'>{item.title}</h1>
                </div>
                <p className='dsmeli-productid__price' tabIndex={6} aria-label={`El precio es: ${itemPriceNumber} pesos`}>
                  {item.price.amount.toLocaleString('es-ar', {
                    style: 'currency',
                    currency: 'ARS',
                    minimumFractionDigits: 2
                  }).split(',')[0]}
                </p>
                <div tabIndex={7} aria-label='Para comprar, click aquí'>
                  <ButtonPrimary label='Comprar' />
                </div>
              </div>
            </div>

            <div className='dsmeli-product__desc_container'>
              <h2 className='dsmeli-product__subtitle' tabIndex={7}>
                Descripción del producto
              </h2>
              <p className='dsmeli-product__description' tabIndex={8}>
                {item.description}
              </p>
            </div>

          </div>
        </div>
        <div className='col-1-md' />
      </div>
    </div>
  </section >
}

export default ItemIdResult
