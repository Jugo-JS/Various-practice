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
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const [title, setTitle] = useState('name');
  const [info, setInfo] = useState('');

 
    const getUser = async() => {
      const response = await fetch(url);
      const data = await response.json();
      const { results } = data;
      // console.log(results);
      
      const { name, email, dob, location, phone, login, picture } = results[0];

      const newUser = {
        name: `${name.first} ${name.last}`,
        email: email,
        age: dob.age,
        street: `${location.street.number} ${location.street.name}`,
        phone: phone,
        password: login.password,
        image: picture.large
      }

      setUser(newUser);
      setTitle('name');
      setInfo(newUser.name);
      setLoading(false);
     
    }

  useEffect(() => {
    getUser();
  }, [])


  const { name, email, age, street, phone, password, image } = user;

  const showUser = (userTitle, userInfo) => {
    setTitle(userTitle);
    setInfo(userInfo);
  }

  return (
    <main>
      <div className='block bcg-black'></div>
      <div className='block'>
        <div className='container'>
          <img src={image || defaultImage} className='user-img' alt='random user' />
          <p className='user-title'>My {title} is</p>
          <p className='user-value'>{info}</p>
          <div className='values-list'>
            <button className='icon' data-label='name' onMouseEnter={(e) => showUser(e.target.dataset.label, name)}><FaUser /></button>
            <button className='icon' data-label='email' onMouseEnter={(e) => showUser(e.target.dataset.label, email)}><FaEnvelopeOpen /></button>
            <button className='icon' data-label='age' onMouseEnter={(e) => showUser(e.target.dataset.label, age)}><FaCalendarTimes /></button>
            <button className='icon' data-label='street' onMouseEnter={(e) => showUser(e.target.dataset.label, street)}><FaMap /></button>
            <button className='icon' data-label='phone' onMouseEnter={(e) => showUser(e.target.dataset.label, phone)}><FaPhone /></button>
            <button className='icon' data-label='password' onMouseEnter={(e) => showUser(e.target.dataset.label, password)}><FaLock /></button>
          </div>
          <button className='btn' type='button' onClick={getUser}>
            {loading ? 'loading...' : 'random person'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default App;
