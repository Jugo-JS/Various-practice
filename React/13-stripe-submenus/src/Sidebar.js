import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from './data';
import { useGlobalContext } from './context';

const Sidebar = () => {
  const Context = useGlobalContext();

  return (
      <aside className={`${Context.showSubmenu ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}>
      <div className='sidebar'>
        <button className='close-btn' onClick={Context.toggleSubmenu}><FaTimes /></button>
        <div className='sidebar-links'>
          {sublinks.map((sublink, index) => {
            const { page, links } = sublink;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className='sidebar-sublinks'>
                  {links.map((link, index) => {
                    const { label, icon, url } = link;
                    return (
                      <a href={url} key={index}>{icon} {label}</a>
                    )
                  })}
                  
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;