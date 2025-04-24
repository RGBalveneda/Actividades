import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import miGif2 from "../assets/8.gif"; 

export default function Boton() {
  const [contador, setContador] = useState(0);

  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>

      <div className="div2">
        <h1>Bienvenido a la actividad 2</h1>
      </div>

      <div className="div3">
        <p >Este botón no puede ser mayor a 10</p>
      </div>

      <button
        className="div4"
        onClick={() => {
          if (contador >= 10) {
            alert("El contador no puede ser mayor a 10");
            setContador(0); // Resetea el contador si pasa de 10
          } else {
            setContador(contador + 1);
          }
        }}
      >
        Contador: {contador}
      </button>

      <div className="div5">
        <Footer />
      </div>

      <div className="div6">
            <img className="img1"
                    src={miGif2}  // <--- ¡Usa la variable importada aquí!
            />
      </div>

      <div className="div7">
            <img className="img1"
                    src={miGif2}  // <--- ¡Usa la variable importada aquí!
            />
      </div>
    </div>
  );
}



    
    
