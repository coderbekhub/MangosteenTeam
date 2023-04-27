import React from 'react'
import { getLanguage, getText } from '../../locale'
import Brand from '../../images/BrandFooter.svg'

export default function AboutCompany() {
  return (
    <div className='AboutCompany'>
      <div className="container">
        <div className="row">
          <div className="company-blog col-4">
            {/* <h2>Mangosteen <br /> Group</h2> */}
            <img src={Brand} alt="..." />
          </div>
          <div className="info-blog col-8">
            <h2>{getText('aboutTitle')}</h2>
            <h3>{getText('aboutSecTitle')} </h3>
            <h3>{getText('aboutThridTitle')}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
