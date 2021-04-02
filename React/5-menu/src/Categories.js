import React from 'react';

const Categories = ({ categories, newList }) => {

  const uniqueCategories = ['all', ...new Set(categories.map((category) => category))];

  //  const uniqueCategories = () =>{
  //   return ['all', ...new Set(categories)]
  // }

  const handleClick = (event) => {
    newList(event.target.value);
  }

  return (
    <div className='btn-container'>
      {uniqueCategories.map((category, index) => {
        return (
          <button 
            type='button' 
            className='filter-btn' 
            key={index}
            value={category}
            onClick={handleClick}
          >
            {category}
          </button>
        )
      })} 
    </div>
  );
};

export default Categories;
