import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { stories, handlePage } = useGlobalContext();

  const { page_number } = stories;

  return (
    <div className='btn-container'>
      <button onClick={() => handlePage(page_number - 1)}>prev</button>
      <p>{page_number + 1} of 50</p>
      <button onClick={() => handlePage(page_number + 1)}>next</button>
    </div>
  )
}

export default Buttons
