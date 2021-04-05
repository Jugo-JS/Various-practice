import React, { useState } from 'react';
import data from './data';



function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [numberOfParagraphs, setNumberOfParagraphs] =  useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    let showParagraphs = parseInt(numberOfParagraphs);

    if(numberOfParagraphs <= 0) {
      showParagraphs = 0;
    } else if(numberOfParagraphs >= 9) {
      showParagraphs = 8;
    }
    setParagraphs(data.slice(0, showParagraphs));
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs: </label>
        <input 
          type='number' 
          name='amount' 
          id='amount'
          value={numberOfParagraphs}
          onChange={(event) => setNumberOfParagraphs(event.target.value)}
        ></input>
        <button type='submit' className='btn'>generate</button>
      </form>
              <article  className='lorem-text'>
                {paragraphs.map((paragraph, index) => {
                  return (
                    <p key={index}>{paragraph}</p>
                  )
                })}
              </article>
    </section>
    )
}

export default App;
