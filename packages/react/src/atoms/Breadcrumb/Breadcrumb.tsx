import * as React from 'react'

interface BreadcrumbProps {
  items: []
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return <nav className='dsmeli-breadcrumb-container'>
    <ol className="dsmeli-breadcrumb">
      {items.map((item, index) => {
        return <li className="dsmeli-breadcrumb__item" key={`breadcrum-${index}`}>
          <span className={`dsmeli-breadcrumb__link ${index === items.length - 1 && 'dsmeli-breadcrum__strong'}`}>
            {item}
          </span>
          {index !== 0 && index !== items.length &&
            <div className="dsmeli-breadcrumb__chevron">
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8"><path fill="none" stroke="#666" d="M1 0l4 4-4 4"></path></svg>
            </div>
          }
        </li>
      })}
    </ol>
  </nav>
}

export default Breadcrumb
