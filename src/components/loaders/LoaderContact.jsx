import React from 'react'
import { getText } from '../../locale'


export default function LoaderContact() {
  return (
    <div className='Loader'>
      <div className="d-flex">
        <p>{getText('contact')}</p>

        <div class="leap-frog">
          <div className="leap-frog__dot"></div>
          <div className="leap-frog__dot"></div>
          <div className="leap-frog__dot"></div>
        </div>
      </div>
    </div>
  )
}
