// src/GrandchildComponent.jsx
import React, { useContext } from 'react';
import GreetingContext from './GreetingContext';

function GrandchildComponent() {
  const greeting = useContext(GreetingContext);

  return (
    <div>
      <h4>Componente Nieto</h4>
      <p>{greeting}</p>
    </div>
  );
}
//xd   
export default GrandchildComponent;