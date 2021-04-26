import React from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);
  
  const fetchCocktail = async() => {

    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const { drinks } = data;
    console.log(drinks);
  }

  React.useEffect(() => {
    setLoading(true);
    fetchCocktail();
  }, [])

  if(loading) {
    return <Loading />
  }

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        Back Home
      </Link>
      <h2 className='section-title'>Adam</h2>
      <div className='drink'>
        <img src='' alt='Adam' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name : </span>
            "ADAM"
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail;
