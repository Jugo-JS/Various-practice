import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(items.map((item) => item.category));
  

  const newList = (category) => {
    if(category === 'all') {
      setMenuItems(items)
      return;
    }
     const newMenu = items.filter((item) => item.category === category);
     setMenuItems(newMenu);
  }
  

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} newList={newList} />
        <Menu items={menuItems} /> 
      </section>
    </main>
  );
}

export default App;
