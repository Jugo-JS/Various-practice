import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
          <article className='review'>
            <div className='img-container'>
              <img src='' alt='image' />
              <span class='quote-icon'>
                <FaQuoteRight />
              </span>
            </div>
            <h4 className='author'>susan</h4>
            <p className='job'>web developer</p>
            <p className='info'>
              I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry
            </p>
            <div className='button-container'>
              <button className='prev-btn'><FaChevronLeft /></button>
              <button className='next-btn'><FaChevronRight /></button>
            </div>
            <button className='random-btn'>Suprise me</button>
          </article>
      </section>
    </main>
  );
};

export default Review;
