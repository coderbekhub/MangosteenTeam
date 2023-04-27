import React from 'react'
// import Arrow from '../images/arrow.png'
import { useEffect } from 'react'
export default function ToDown() {
  const top = () => {
    window.scrollTo(0, 900)
  }
  return (
    <div className='toDownBtn' onClick={top}>
      <button>
        <i className='bx bx-chevron-down-circle bx-tada toDown'></i>
      </button>
    </div>
  )
}
