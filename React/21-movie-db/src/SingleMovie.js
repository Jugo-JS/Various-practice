import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';

const SingleMovie = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`&i=${id}`);

  if(loading) {
    return <div className='loading'></div>
  }

  if(error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    )
  }

  const { Poster, Title, Plot, Year } = data;

  return (
    <section className='single-movie'>
      <img src={Poster} alt={Title} />
      <div className='single-movie-info'>
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link to='/' className='btn'>
          back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie;
