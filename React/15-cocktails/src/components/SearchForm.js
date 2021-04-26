import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const { setInput } = useGlobalContext();

  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>search your favourite cocktail</label>
          <input type='text' id='name' onChange={(event)=> setInput(event.target.value)}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm;
