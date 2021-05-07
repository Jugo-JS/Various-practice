import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { stories, dispatch } = useGlobalContext();

  const { page_number } = stories;
  console.log(page_number)

  return (
    <div className='btn-container'>
      <button onClick={() => dispatch({ type: 'HANDLE_PAGE', payload: page_number -1})}>prev</button>
      <p>1 of 50</p>
      <button onClick={() => dispatch({ type: 'HANDLE_PAGE', payload: page_number +1})}>next</button>
    </div>
  )
}

export default Buttons
