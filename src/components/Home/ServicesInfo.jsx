import React from 'react'
import { getText } from '../../locale'
import { Link } from 'react-router-dom'

export default function ServicesInfo() {
  return (
    <div className='ServicesInfo'>
      <div className="container">
        <div data-aos="fade-right" data-aos-duration="2000" className="service-card row">
          <div  className="col-12 col-md-2">
            <h4>#1</h4>
          </div>
          <div className="col-12 col-md-5">
            <h3>{getText("webTittle")}</h3>
          </div>

          <div className="col-12 col-md-5">
            <div className='service-card-info'>
              <p>{getText("webInfo")} </p>

              <Link to='/services'>{getText("webLink")}</Link>
              <p>Veb-saytingizni biz bilan yarating. Biz turli xildagi saytlarni siz istaganingizdek qilib yaratib beramiz. </p>
              <Link to='/services'>Ba'tafsil ma'lumot</Link>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="2000" className="service-card row">
          <div className="col-md-2">
            <h4>#2</h4>
          </div>
          <div className="col-md-5">
            <h3>{getText("telegramTittle")}</h3>
          </div>

          <div className="col-md-5">
            <div className='service-card-info'>
              <p>{getText("telegramInfo")} </p>

              <Link to="/services">{getText("webLink")}</Link>
              <p>Telegram botingizni biz bilan yarating. Biz turli xildagi botlarni siz istaganingizdek qilib yaratib beramiz. </p>
              <Link to="/services">Ba'tafsil ma'lumot</Link>
            </div>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="2000" className="service-card row">
          <div className="col-md-2">
            <h4>#3</h4>
          </div>
          <div className="col-md-5">
            <h3>{getText("logoTittle")}</h3>
          </div>

          <div className="col-md-5">
            <div className='service-card-info'>
              <p>{getText("logoInfo")}</p>

              <Link to="/services">{getText("webLink")}</Link>
              <p>Brandingizni dizaynini biz bilan yarating. Biz turli xildagi dizaynlarni siz istaganingizdek qilib yaratib beramiz. </p>
              <Link to="/services">Ba'tafsil ma'lumot</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
