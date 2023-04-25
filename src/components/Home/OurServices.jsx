import React from 'react'
import { getLanguage, getText } from '../../locale'

export default function OurServices() {
  return (
    <div className='OurServices' id='toDown'>
      <div className="container">
        <h2 data-aos="fade-right" data-aos-duration="2000">{getText('serviceTitle')}</h2>
        <p className='service-info' data-aos="fade-left" data-aos-duration="2000">{getText('serviceText')}</p>
        <div className="row justify-content-center">
          <div data-aos="zoom-in" data-aos-duration="1000" className='mb-4 col-6 col-md-6 col-lg-4 '>
            <div className="w-100 card">
              <h1 className='card-icon'>
                <i className="fa-sharp fa-solid fa-circle-info"></i>
              </h1>
              <h3 className="card-title">{getText('serviceTeamMembers')}</h3>
              <p>{getText('serviceTeamMembersText')}</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" className='mb-4 col-6 col-md-6 col-lg-4 '>
            <div className=" card">
              <h1 className='card-icon'>
                <i className="fa-solid fa-gears"></i>
              </h1>
              <h3 className="card-title">{getText('serviceTexnicalSupport')}</h3>
              <p>{getText('serviceTexnicalSupportText')}</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" className='mb-4 col-6 col-md-6 col-lg-4 '>
            <div className=" card">
              <h1 className='card-icon'>
                <i className="fa-solid fa-tag"></i>
              </h1>
              <h3 className="card-title">{getText('servicePrice')}</h3>
              <p>{getText('servicePriceText')}</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" className='mb-4 col-6 col-md-6 col-lg-4 '>
            <div className=" card">
              <h1 className='card-icon'>
                <i className="fa-solid fa-shield-halved"></i>
              </h1>
              <h3 className="card-title">{getText('serviceGuaranteed')}</h3>
              <p>{getText('serviceGuaranteedText')}</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" className='mb-4 col-6 col-md-6 col-lg-4 '>
            <div className=" card">
              <h1 className='card-icon'>
              <i className="fa-solid fa-pen-nib"></i>
              </h1>
              <h3 className="card-title">{getText("profecionalDesign")}</h3>
              <p>{getText("profecionalDesignInfo")}</p>
            </div>
          </div>

          <div data-aos="zoom-in" data-aos-duration="1000" className='mb-4 col-6 col-md-6 col-lg-4 '>
            <div className=" card">
              <h1 className='card-icon'>
                <i className="fa-solid fa-lightbulb"></i>
              </h1>
              <h3 className="card-title">{getText("idea")}</h3>
              <p>{getText("ideInfo")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
