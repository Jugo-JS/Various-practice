import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

function App() {
  const { loading, data } = useFetch();

  return (
    <main>
      <div className='section-title'>
        <h1>pagination</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'><Follower /></div>
        <div className='btn-container'>
          <button className='prev-btn'>prev</button>
          <button className='page-btn active-btn'>1</button>
          <button className='page-btn'>2</button>
          <button className='page-btn'>3</button>
          <button className='page-btn'>4</button>
          <button className='page-btn'>5</button>
          <button className='page-btn'>6</button>
          <button className='page-btn'>7</button>
          <button className='page-btn'>8</button>
          <button className='page-btn'>9</button>
          <button className='page-btn'>10</button>
          <button className='next-btn'>next</button>
        </div>
      </section>
    </main>
  )
}

export default App;
