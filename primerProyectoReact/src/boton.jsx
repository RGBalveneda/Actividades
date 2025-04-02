import React from "react";
import { useState } from "react";

function Boton() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => {
      if (contador >= 10) {
        alert("El contador no puede ser mayor a 10");
      } else {
        setContador(contador + 1);
      }
    }}
    >Contador: {contador}</button>
  );
}
export default Boton;