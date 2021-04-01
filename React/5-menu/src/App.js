import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const categories = menuItems.map((item) => {
      return (item.category);
  })

  const newList = (category) => {
    const newMenu = menuItems.filter((item) => item.category === category);
    console.log(newMenu);
    return newMenu;
  }
  

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} newList={newList} />
        <div className='section-center'>
          {menuItems.map((menuItem) => {
            return <Menu key={menuItem.id} {...menuItem} />
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
