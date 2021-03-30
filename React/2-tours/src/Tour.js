import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);


 
  return (
    <div>
      <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0,200)}...`}
            {readMore ? <button onClick={() => setReadMore(false)}>Read Less</button> : <button onClick={() => setReadMore(true)}>Read More</button>}
          </p>
          <button className='delete-btn' onClick={() => removeTour(id)}>not interested</button>
        </footer>
      </article>
    </div>
  );
};

export default Tour;
