

import React, { useState } from 'react'

export const Tour = ({id, name, info, image, price, removeTour }) => {
 const [readMore, setReadMore]=useState(false)
 const toggle = () => {
  setReadMore(!readMore)
 }
  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'>${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className='info-btn' onClick={toggle}>
            {readMore ? 'read less' : 'read more'}
          </button>
        </p>

        <button
          onClick={() => removeTour(id)}
          className='btn btn-block delete-btn'
        >
          Not interested
        </button>
        {/* <FontAwesomeIcon icon='fa-solid fa-cart-shopping' /> */}
      </div>
    </article>
  )
}
