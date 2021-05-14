import React from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {
  const { stories, handleSearch } = useGlobalContext();
  const { query } = stories;


  return (
    <form className='search-form'>
      <h2>Search Hacker News</h2>
      <input 
        type='text' 
        className='form-input' 
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
         />
    </form>
  )
}

export default SearchForm
