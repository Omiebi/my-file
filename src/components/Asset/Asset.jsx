import React from 'react'

import './Asset.css';

const Asset = ({text, img, }) => {
  return (
     <div className='buy-icon'>
            <img src={img} alt="buy" className='buy-assets'/>
            <p>{text}</p>
    </div>
  )
}

export default Asset
