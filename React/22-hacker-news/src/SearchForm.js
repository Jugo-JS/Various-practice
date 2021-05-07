import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  return (
    <form className='search-form'>
      <h2>Search Hacker News</h2>
      <input type='text' className='form-input' value='react' />
    </form>
  )
}

export default SearchForm
