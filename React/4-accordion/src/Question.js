import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        {isInfoVisible ? 
          <button className='btn' onClick={() => setIsInfoVisible(false)}><AiOutlineMinus /></button> 
          : 
          <button className='btn' onClick={() => setIsInfoVisible(true)}><AiOutlinePlus /></button>}
      </header>
      {isInfoVisible && <p>{info}</p>}
    </article>
  );
};

export default Question;
