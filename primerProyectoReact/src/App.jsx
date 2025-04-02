// /src/App.jsx
import * as React from "react";
import BasicTable from "./mitabla.jsx";
import Boton from "./boton.jsx";
import SaludoPadre from "./context.jsx"; // Importa el componente padre

function App() {
  return (
    <div>
      <h1>Hola, Mundo!</h1>
      <p>Este es un proyecto de React.</p>
      <h2>Actividad 1</h2>
      <p>Capar el contador para que no pueda ser mayor a 10</p>
      <Boton />
      <h2>Actividad 2</h2>
      <p> Crea un Arreglo/Lista (Array) con mas de 5 elementos, las propiedades de estos elementos requieren ser:,</p>
      <p>  nombre (String)</p>
      <p>  apellido (String)</p>
      <p>  edad (Number)</p>
      <p>  De estos 5 elementos creados, asegurate que 2 de ellos sean menores de edad (menor o igual a 17)</p>
      <BasicTable />
      <h2>Actividad 3</h2>
      <p> Crear un componente padre que contenga un saludo y un componente hijo que muestre el saludo.</p>
      <p>  El saludo debe ser pasado como props desde el padre al hijo.</p>
      <SaludoPadre /> {/* Renderiza el componente padre */}
    </div>
  );
}

export default App;