import React from 'react';
import '../css/boton.css';

const Boton = (props) => {

  return(
    <button
    type='button'
    onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </button>
  )
};
export default Boton;