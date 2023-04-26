import React from 'react'
import logo from '../../images/logo.png'
import { getText } from '../../locale'


export default function LoaderHome() {
  return (
    <div className='Loader'>
      <div className="d-flex">
        <p>{getText('home')}</p>

        <div class="leap-frog">
          <div className="leap-frog__dot"></div>
          <div className="leap-frog__dot"></div>
          <div className="leap-frog__dot"></div>
        </div>
      </div>
    </div>
  )
}
