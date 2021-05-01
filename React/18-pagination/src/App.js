import React, { useState, useEffect } from 'react';
import { useFetch } from './useFetch';
import Follower from './Follower';

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    setUsers(data);
  }, [loading, data])

  const getPageNumber = (event) => {
    setPage(event.target.textContent - 1);
  }

  if(page > 9) {
    setPage(0);
  } else if (page < 0) {
    setPage(9)
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
            // console.log(user[page])
            return <Follower key={index} {...user[page]} />
          })}
        </div>
        {!loading && (
          <div className='btn-container'>
            <button className='prev-btn' onClick={() => setPage(page - 1)}>prev</button>
            {data.map((item, index) => {
            // console.log(item, index);
            
                return (<button key={index} className={`${page === index ? 'page-btn active-btn' : 'page-btn'}`} onClick={getPageNumber}>{index + 1}</button>)
            
            })}
            <button className='next-btn' onClick={() => setPage(page + 1)}>next</button>
          </div>
        )}
      </section>
    </main>
  )
}

export default App;
