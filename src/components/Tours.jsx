
import React from 'react'
import {Tour }from './Tour'

export const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours selection</h2>
      </div>

      <div className='title-underline'></div>
      <div className='tours'>
        {tours.map((t) => {
          return <Tour key={t.id} {...t} removeTour={removeTour} />
        })}
      </div>
    </section>
  )
}
