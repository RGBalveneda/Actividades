
import React from 'react';
import miGif from '../assets/12.gif'; // 1. IMPORTA TU GIF AQUÍ
import miGif2 from '../assets/11.gif'; 
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// Componente Hijo que recibe el saludo como prop
function SaludoHijo(props) {
  return <p>El saludo del padre es: {props.mensaje}</p>;
}

// Componente Padre que define el saludo y renderiza al hijo pasándole la prop
export default function SaludoPadre() {
  const saludo = "¡Hola, soy el padre y te saludo!";
  return (
    <div className="parent">
    <div className="div1">
        <Header />
    </div>
   
    <div className="div2">
    <h1 className="text-3xl font-bold">Bienvenido a la actividad 3</h1>
    </div>

    <div className="div3">
    <h3>Componente Padre (Saludo)</h3>
 
    </div>

    <div className="div4">
  <div className="flex flex-col items-start"> {/* Contenedor vertical */}
    <h1><SaludoHijo mensaje={saludo} /></h1>
    <img className="img2" src={miGif} />
  </div>
</div>


    <div className="div5">

        <Footer />
    </div>
    <div className="div6">
    <img className='img1'
            src={miGif2}  // <--- ¡Usa la variable importada aquí!
    />
        </div>
    <div className="div7">
    <img className='img1'
            src={miGif2}  // <--- ¡Usa la variable importada aquí!
    />
    </div>
        
        
</div>
  );
}
//xd
//       
