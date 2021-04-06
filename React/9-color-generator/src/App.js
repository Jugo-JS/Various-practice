import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'


function App() {
  const [inputColor, setInputColor] = useState('');
  const [error, setError] = useState(false);
  const [colorList, setColorList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      let colors = new Values(inputColor).all(10);
      setColorList(colors);
    } catch(error) {
      setError(true);
    }
   
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form>
          <input 
            type='text' 
            placeholder='#f15025' 
            className={`${error ? 'error' : null}`}
            value={inputColor} 
            onChange={(event) => setInputColor(event.target.value)}
          />
          <button type='submit' className='btn' onClick={handleSubmit}>submit</button>
        </form>
      </section>
      <section className='colors'>
        {colorList.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hexColor={color.hex} />)
        })}
      </section>
    </>
  )
}

export default App;
