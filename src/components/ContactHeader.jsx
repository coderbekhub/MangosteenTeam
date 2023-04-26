import React from 'react'
import { getLanguage, getText } from '../locale'
import ToDown from '../components/ToDown'

export default function ContactHeader() {
  return (
    <div>
        <section className='contactSection'>
        <div className='blur'></div> 
        <div className="container">
            <div className='contactHeader'>
                <div data-aos="fade-right" data-aos-duration="2000">
                    <h2 data-aos="fade-down" data-aos-duration="2000">{getText('Contacts')}</h2>
                    <div className='d-flex'>
                        <div data-aos="fade-right" data-aos-duration="2000">
                            <a href="tel:+998930105610">+998 (50) 010 56 10</a>
                            <a href="tel:+998500105610">
                                <button className='consultationBtn consultationBtn2'>{getText('freeConsultation')}</button>
                            </a>
                        </div>
                        <div data-aos="fade-right" data-aos-duration="2000" className='noneBtn'>
                            <a href="tel:+998951666763">+998 (95) 166 67 63 </a>
                            <a href="tel:+998951666763">
                                <button className='consultationBtn'>{getText('freeConsultation')}</button>
                            </a>
                        </div>
                    </div>
                    <ToDown />
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}
