
import React from 'react';
import GrandchildComponent from './GrandChildComponent.jsx';

function ChildComponent() {
  return (
    <div>
      <h3>Componente Hijo</h3>
      <GrandchildComponent />
    </div>
  );
}

export default ChildComponent;