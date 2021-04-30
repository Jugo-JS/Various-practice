import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    setUsers(data);
  }, [loading])

  const getPageNumber = (event) => {
    console.log(event.target.textContent);
    return setPage(event.target.textContent);
  }


  return (
    <main>
      <div className='section-title'>
        <h1>{loading ? 'Loading...' : 'Pagination'}</h1>
        <div className='underline'></div>
      </div>
      <section className='followers'>
        <div className='container'>
          {users.map((user, index) => {
            // console.log(user[index])
            return <Follower key={index} {...user[index]} />
          })}
        </div>
        <div className='btn-container'>
          <button className='prev-btn'>prev</button>
          {data.map((item, index) => {
            // console.log(item, index);
            if(page === index) {
              return (<button key={index} className='page-btn active-btn' onClick={getPageNumber}>{index + 1}</button>)
            } return (<button key={index} className='page-btn' onClick={getPageNumber}>{index + 1}</button>)
          })}
          <button className='next-btn'>next</button>
        </div>
      </section>
    </main>
  )
}

export default App;
