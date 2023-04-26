import React from 'react'
import { getText } from '../../locale'


export default function LoaderService() {
  return (
    <div className='Loader'>
      <div className="d-flex">
        <p>{getText('services')}</p>

        <div className="leap-frog">
          <div className="leap-frog__dot"></div>
          <div className="leap-frog__dot"></div>
          <div className="leap-frog__dot"></div>
        </div>
      </div>
    </div>
  )
}
