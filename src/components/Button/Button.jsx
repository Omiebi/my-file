import React from 'react'

import './Button.css';

const Button = ({text, img}) => {
  return (
    <div className='chains'>
        <img src={img} alt="chains" className='chain-container' /> 
        <p>{text}</p>  
    </div>
  )
}

export default Button
