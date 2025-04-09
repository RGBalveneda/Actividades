import React from "react";
import { useState } from "react";

function Boton() {
  const [contador, setContador] = useState(0);

  return (
    <button onClick={() => {
      if (contador >= 10) {
        alert("El contador no puede ser mayor a 10");
        setContador(0); // Resetea el contador a 10 si intenta superar ese valor
      } else {
        setContador(contador + 1);
      }
    }}
    >Contador: {contador}</button>
  );
}
export default Boton;
//xd