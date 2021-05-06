import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { data, loading } = useGlobalContext();

  if(loading) {
    return <div className='loading'></div>
  }

  return (
    <section className='movies'>
      {data.map((movie) => {
        const { Poster, Title, Type, Year, imdbID } = movie;
        return (
            <a className='movie' href='#' key={imdbID}>
              <article>
                <img src={Poster} alt={Title} />
                <div className='movie-info'>
                  <h4 className='title'>{Title}</h4>
                  <p>{Year}</p>
                </div>
              </article>
            </a>
        )
      })}
    </section>
    
  )
}

export default Movies;
