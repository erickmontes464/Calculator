import React from 'react';
import '../css/display.css';

const Display = ({ input }) => {
  return (
    <div className='display'>
      <p>{input}</p>
    </div>
  )
};
export default Display;