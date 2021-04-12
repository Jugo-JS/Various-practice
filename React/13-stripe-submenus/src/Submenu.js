import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const Context = useGlobalContext();
  
  const specificSubmenu = Context.submenuLinks.filter((submenuLink) => submenuLink.page === 'products');
  // console.log(specificSubmenu[0]);

  return (
    <aside className='submenu show'>
      <h4>{specificSubmenu[0].page}</h4>
      <div className='submenu-center col-3'>
        {specificSubmenu[0].links.map((link) => {
          const { label, icon, url } = link;
          return <a href={url}>{icon} {label}</a>
        })}
      </div>
    </aside>
  )
}

export default Submenu;
