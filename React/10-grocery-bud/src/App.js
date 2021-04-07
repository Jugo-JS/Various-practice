import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [listItem, setListItem] = useState('');
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(listItem !== false) {
      let newItem = {
        id: new Date().getTime().toString(),
        title: listItem
      };
      setList([...list, newItem])
      setShowAlert(true);
      setListItem('');
    }
  }

  return (
    <section className='section-center'>
      {showAlert && <Alert />}
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input 
            type='text' 
            className='grocery' 
            placeholder='e.g. eggs' 
            value={listItem}
            onChange={(event) => setListItem(event.target.value)}
          />
          <button type='submit' className='submit-btn'>submit</button>
        </div>
      </form>
      <div className='grocery-container'>
        
          <List items={list} />
        </div>
        <button className='clear-btn'>clear items</button>
    </section>
  )
}

export default App;
