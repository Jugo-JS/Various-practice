import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { data } = useGlobalContext();

  console.log(data);

  return (
    <section className='movies'>
      <a className='movie' href='#'>
        <article>
          <img src={url} alt='' />
          <div className='movie-info'>
            <h4 className='title'>title</h4>
            <p>year</p>
          </div>
        </article>
      </a>
    </section>
  )
}

export default Movies;
