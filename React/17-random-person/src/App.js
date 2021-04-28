import React, { useState, useEffect } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';

const url = 'https://randomuser.me/api/';

const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async() => {
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;
      // console.log(results);
      
      const { name, email, dob, location, phone, login } = results[0];
     
    }
    getUser();
  }, [])

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img src={defaultImage} className='user-img' alt='random user' />
          <p className='user-title'>My name is</p>
          <p className='user-value'>Nilufer Bultman</p>
          <div className='values-list'>
            <button className='icon' data-label='name'><FaUser /></button>
            <button className='icon' data-label='email'><FaEnvelopeOpen /></button>
            <button className='icon' data-label='age'><FaCalendarTimes /></button>
            <button className='icon' data-label='street'><FaMap /></button>
            <button className='icon' data-label='phone'><FaPhone /></button>
            <button className='icon' data-label='password'><FaLock /></button>
          </div>
          <button className='btn' type='button'>random user</button>
        </div>
      </div>
    </main>
  )
}

export default App;
