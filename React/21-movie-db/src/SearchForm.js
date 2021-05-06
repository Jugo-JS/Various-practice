import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext();

  const searchMovies = (e) => {
    setQuery(e.target.value)
  }

  return (
    <form className='search-form'>
      <h2>search movies</h2>
      <input 
        type='text' 
        className='form-input' 
        value={query} 
        onChange={searchMovies}
      />
      {error.show & <div classname='error'>{error.msg}</div>}
    </form>
  )
}

export default SearchForm;
