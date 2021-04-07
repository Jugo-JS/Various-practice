import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
  const [listItem, setListItem] = useState('');
  const [list, setList] = useState([]);
  const [showAlert, setShowAlert] = useState({ show: false, type:'', msg:'' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!listItem) {
      setShowAlert({ show: true, type:'danger', msg:'Please enter value' });
    }
    else if (listItem && isEditing) {
      setList(list.map((item) => {
        if(item.id === editId) {
          return {...item, title: listItem}
        }
        return item;
      }))
      setListItem('');
      setEditId(null);
      setIsEditing(false);
      setShowAlert({ show: true, type:'success', msg:'value changed' })
    }
    else {
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

  const clearList = () => {
    setList([]);
    setShowAlert({ show: true, type:'danger', msg:'Empty List' })
  }

  const deleteItem = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
    setShowAlert({ show: true, type: 'danger', msg: 'Item deleted'})
  }

  const editItem = (id) => {
    let itemToEdit = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setListItem(itemToEdit.title);
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
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
      <div className='grocery-container'>
          <List items={list} deleteItem={deleteItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>clear items</button>
      </div>
      )}
    </section>
  )
}

export default App;
