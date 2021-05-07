import React from 'react'

import { useGlobalContext } from './context'

const Stories = () => {
  return (
    <section className='stories'>
      <article className='story'>
        <h4 className='title'>Relicensing React, Jest, Flow, and Immutable.js</h4>
        <p className='info'>2280  points by <span>pomber | </span>108 comments</p>
        <div>
          <a href='#' className='read-link' target='_blank'>Read More</a>
          <button className='remove-btn'>remove</button>
        </div>
      </article>
    </section>
  )
}

export default Stories
