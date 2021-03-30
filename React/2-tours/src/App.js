import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] =  useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setTours(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(isLoading) {
    return <Loading />
  }

  if(tours.length === 0) {
    return(
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }

  if(!isLoading) {
    return (
      <main>
        <Tours tours={tours} removeTour={removeTour} />
      </main>
    )
  }
}

export default App;
