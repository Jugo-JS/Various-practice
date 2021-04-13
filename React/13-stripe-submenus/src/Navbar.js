import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context';



const Navbar = () => {
  const { toggleSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

  const displaySubmenu = (event) => {
    const page = event.target.textContent;
    const tempLoc = event.target.getBoundingClientRect();
    const center = (tempLoc.right + tempLoc.left) / 2;
    const bottom = tempLoc.bottom - 3;
    openSubmenu(page, { center, bottom });
  }

  const handleSubmenu = (event) => {
    if(!event.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' />
          <button className='btn toggle-btn' onClick={toggleSidebar}><FaBars /></button>
        </div>
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar;
