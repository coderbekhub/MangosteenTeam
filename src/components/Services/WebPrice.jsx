import React from 'react'
import { getLanguage, getText } from '../../locale'

export default function WebPrice() {
  return (
    <div className='WebPrice' id='toDown'>
      <div className="container">
        <div className="row">
          <div data-aos="zoom-in" data-aos-duration="1000" className="price-tittle col-12 text-center mb-5">
            <h3>{getText('webPriceTitle')}</h3>
          </div>

          <div data-aos="zoom-in" data-aos-duration="2000" className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <h3 className="card-tittle">Landing page</h3>
              <div className="card-body">
                <h4 className='text-center'>299 y.e</h4>
              </div>
              <div className="time d-flex">
                <h5>{getText('webPriceLeadTime')}</h5>
                <p>4/10 {getText('day')}</p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="2000" className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <h3 className="card-tittle">Small business</h3>
              <div className="card-body">
                <h4 className='text-center'>399 y.e</h4>
              </div>
              <div className="time d-flex">
                <h5>{getText('webPriceLeadTime')}</h5>
                <p>7/14 {getText('day')}</p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="2000" className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <h3 className="card-tittle">Catalog site</h3>
              <div className="card-body">
                <h4 className='text-center'>499 y.e</h4>
              </div>
              <div className="time d-flex">
                <h5>{getText('webPriceLeadTime')}</h5>
                <p>10/20 {getText('day')}</p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="2000" className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <h3 className="card-tittle">Corporate website</h3>
              <div className="card-body">
                <h4 className='text-center'>949 y.e</h4>
              </div>
              <div className="time d-flex">
                <h5>{getText('webPriceLeadTime')}</h5>
                <p>20/25 {getText('day')}</p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="2000" className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <h3 className="card-tittle">Internet shop</h3>
              <div className="card-body">
                <h4 className='text-center'>1249 y.e</h4>
              </div>
              <div className="time d-flex">
                <h5>{getText('webPriceLeadTime')}</h5>
                <p>35/55 {getText('day')}</p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="2000" className="col-12 col-md-6 col-lg-4">
            <div className="card">
              <h3 className="card-tittle">Unique project</h3>
              <div className="card-body">
                <h4 className='text-center'>2499 y.e</h4>
              </div>
              <div className="time d-flex">
                <h5>{getText('webPriceLeadTime')}</h5>
                <p>../..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
