import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  return (
    <section className='movies'>
      <a className='movie' href='#'>
        <article>
          <img src={url} alt='' />
          <div className='movie-info'>
            <h4 className='title'>Batman Begins</h4>
            <p>2005</p>
          </div>
        </article>
      </a>
    </section>
  )
}

export default Movies;
