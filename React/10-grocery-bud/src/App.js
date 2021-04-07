import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [listItem, setListItem] = useState('');
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState({ show: false, type:'', msg:'' });
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!listItem) {
      setShowAlert({ show: true, type:'danger', msg:'Please enter value' });
    }
    else if (listItem) {
      let newItem = {
        id: new Date().getTime().toString(),
        title: listItem
      };
      setList([...list, newItem])
      setShowAlert({ show:true, type:'success', msg:'Item added' });
      setListItem('');
    }
  }

  const removeAlert = () => {
    setShowAlert({ show:false, type:'', msg:'' })
  }

  return (
    <section className='section-center'>
      {showAlert.show && <Alert {...showAlert} list={list} removeAlert={removeAlert} />}
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
      {list.length > 0 && (
      <div className='grocery-container'>
          <List items={list} />
          <button className='clear-btn'>clear items</button>
      </div>
      )}
    </section>
  )
}

export default App;
