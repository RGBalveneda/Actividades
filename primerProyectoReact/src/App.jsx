// /src/App.jsx

import * as React from "react";
import BasicTable from "./mitabla.jsx"; // Asegúrate que el nombre y ruta sean correctos
import Boton from "./boton.jsx";
function App() {
  return (
    <div>
      <h1>Hola, Mundo!</h1>
      <p>Este es un proyecto de React.</p>
      <h2>Actividad 1</h2>
      <p>Capar el contador para que no pueda ser mayor a 10</p>
      <Boton /> {/* Tu componente de botón */}
      <h2>Actividad 2</h2>
      <p> Crea un Arreglo/Lista (Array) con mas de 5 elementos, las propiedades de estos elementos requieren ser:,</p>
      <p>  nombre (String)</p>
      <p>  apellido (String)</p>
      <p>  edad (Number)</p>
      <p>  De estos 5 elementos creados, asegurate que 2 de ellos sean menores de edad (menor o igual a 17)</p>
      <BasicTable /> {/* Tu componente de tabla */}
    </div>
  );
}

// ¡ASEGÚRATE DE QUE ESTA LÍNEA ESTÉ PRESENTE Y CORRECTA!
export default App;