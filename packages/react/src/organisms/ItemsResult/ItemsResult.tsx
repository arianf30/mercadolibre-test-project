import * as React from 'react'
import Breadcrumb from '../../atoms/Breadcrumb'
import Image from '../../atoms/Image'

interface ItemsResultProps {
  resItems: any
}

const ItemsResult: React.FC<ItemsResultProps> = ({ resItems }): React.ReactElement => {
  let categoryText = 'Las categorías de esta sección son: '
  resItems.categories.forEach((categoria: string) => {
    categoryText = `${categoryText} ${categoria}; `
  })

  return <section className='dsmeli-itemsresult-container'>
    <div className='container'>
      <div className='row'>
        <div className='col-1-md' />
        <div className='col-10-md' tabIndex={3} aria-label={categoryText}>
          <Breadcrumb items={resItems.categories} />
        </div>
        <div className='col-1-md' />
      </div>
      <div className='row'>
        <div className='col-0-md col-1-lg' />
        <div className='col-10-md'>
          <ol className='container-elements'>
            {resItems.items.map((item: any, index: number) => {
              const itemId: string = item.id
              const itemPrice: number = item.price.amount.toLocaleString('es-ar', {
                style: 'currency',
                currency: 'ARS',
                minimumFractionDigits: 2
              })
              const itemAddress: string = item?.address

              return <li className='dsmeli-product__list' key={`item-${index}`}>
                <a href={`/items/${itemId}`} className='dsmeli-productli__image_a' title={item.title} tabIndex={index + 3}>
                  <Image src={item.picture} thumb={item.picture} height={180} width={180} />
                </a>
                <div className='dsmeli-productli__body'>
                  <a className='dsmeli-productli__title_a' href={`/items/${itemId}`} tabIndex={-1}>
                    <h2 className='dsmeli-productli__title'>{item.title}</h2>
                  </a>
                  <p className='dsmeli-productli__price' tabIndex={index + 3} aria-label={`El precio es: ${itemPrice} pesos`}>
                    {itemPrice.toString().split(',')[0]}
                  </p>
                </div>
                <div className='dsmeli-productli__ubi'>
                  <p className='dsmeli-productli__address' tabIndex={index + 3} aria-label={`El producto se encuentra en: ${itemAddress}`}>{itemAddress}</p>
                </div>
              </li>
            })}
          </ol>
        </div>
        <div className='col-1-md' />
      </div>
    </div>
  </section >
}

export default ItemsResult
