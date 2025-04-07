
import React from 'react';
import Footer from './components/Footer';

// Componente Hijo que recibe el saludo como prop
function SaludoHijo(props) {
  return <p>El saludo del padre es: {props.mensaje}</p>;
}

// Componente Padre que define el saludo y renderiza al hijo pasándole la prop
function SaludoPadre() {
  const saludo = "¡Hola, soy el padre y te saludo!";
  return (
    <div>
      <h3>Componente Padre (Saludo)</h3>
      <SaludoHijo mensaje={saludo} />
      <Footer />
    </div>
  );
}
//xd
// Exporta el componente padre para poder usarlo en App.jsx
export default SaludoPadre;