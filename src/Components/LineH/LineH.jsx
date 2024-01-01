import React from 'react'
import './LineH.css'
export default function LineH({title}) {
  return (
    <div className='d-flex align-items-center justify-content-center position-relative line-container' >
        <div className='line-h'></div>
        <h5 className='line-title'>{title}</h5>
    </div>
  )
}
