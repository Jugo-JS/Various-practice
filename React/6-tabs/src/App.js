import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [companies, setCompanies] = useState([]);
  const [value, setValue] = useState(0);
 
 
  const fetchData = async() => {
    const response = await fetch(url);
    const data = await response.json();
    setCompanies(data);
    setLoading(false);
  }
  
  useEffect(() => {
    fetchData();
    }, [])

  if(loading) {
    return <div className='section loading'>Loading...</div>
  }

  const { company, duties, dates, title } = companies[value];

  return (
      <section className='section'>
      <div>
        <div className='title'>
          <h2>expierence</h2>
          <div className='underline'></div>
        </div>
        <div className='jobs-center'>
          <div className='btn-container'>
            {companies.map((company, index) => {
            return (
              <button 
                key={company.id} 
                className={`job-btn ${index === value && 'active-btn'}`} 
                onClick={() => setValue(index)}
              >
                {company.company}
              </button>)
            })}
          </div>
              <article  className='job-info'>
                <h3>{title}</h3>
                <h4>{company}</h4>
                <p className='job-date'>{dates}</p>
                {duties.map((duty, index) => {
                  return (
                    <div key={index} className='job-desc'>
                      <FaAngleDoubleRight className='job-icon' />
                      <p>{duty}</p>
                    </div>
                  )
                })}
              </article>
        </div>
      </div>
    </section>
  )
}

export default App;
