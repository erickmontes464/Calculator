import './App.css';
import Boton from './componentes/Boton';
import Display from './componentes/Display';
import React, { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const botones = ['%','/','7','8','9','*','4','5','6'
  ,'-','1', '2', '3','+','0','.'];

  const agregarInput = val => {
    
    const inicioOperacion = ['*', '/','%'];
    
    //Si la operacion inicial no es * o / , o despues de eso si funciona la multiplicación
    if(!inicioOperacion.includes(val) || input !== ''){

    //Si el input o la pantalla es un numero, agregar el input
    if(!isNaN(val) || !isNaN(input)) setInput(input + val);
    //Si el ultimo numero de la pantalla es numero agregar boton
    else if(!isNaN(input.slice(-1))) setInput(input + val);

    }
  };

  const cacularRes = val => {
    if (input) {
      try {
        setInput(evaluate(input));
      } catch (error) {
        alert('Operacion valida');
      }
    }
  };

  return (
    <div className="container">
      <div className='calculadora'>
        <Display input={input} />

        <Boton manejarClic={() => setInput('')}>CE</Boton>
        <Boton manejarClic={() => setInput(input.slice(0, -1))}>C</Boton>
        {
          botones.map((element, index) => 
            <Boton key={index} manejarClic={agregarInput} >{element}</Boton>
          )
        }
        <Boton manejarClic={cacularRes}>=</Boton>
      </div>
      

    </div>
  );
}

export default App;
