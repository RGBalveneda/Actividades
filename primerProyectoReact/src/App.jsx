import * as React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import NoPage from "./pages/NoPage.jsx";
import BasicTable from "./pages/mitabla.jsx";
import Boton from "./pages/boton.jsx";
import SaludoPadre from "./pages/context.jsx"; // Importa el componente padre
import API from "./pages/api.jsx"; // Importa el componente de la API
import Intro from "./pages/maps.jsx";
import Maps2 from "./pages/maps2.jsx";
import Maps3 from "./pages/maps3.jsx";
import Maps4 from "./pages/maps4.jsx"; // Importa el componente de mapas


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Actividad1" element={<BasicTable />} />
          <Route path="/Actividad2" element={<Boton />} />
          <Route path="/Actividad3" element={<SaludoPadre />} /> {/* Renderiza el componente padre */}
          <Route path="/Actividad4" element={<API />} /> {/* Renderiza la tabla de la API */}
          <Route path="/Actividad5" element={<Intro />} /> {/* Renderiza el mapa */}
          <Route path="/Actividad6" element={<Maps2 />} /> {/* Renderiza el mapa */}
          <Route path="/Actividad7" element={<Maps3 />} /> {/* Renderiza el mapa */}
          <Route path="/Actividad8" element={<Maps4 />} /> {/* Renderiza el mapa */}

          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


/*
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
<SaludoPadre /> {/* Renderiza el componente padre *//*}/*
<h2>Actividad 4</h2>
<p>Investiga el uso de FETCH para traer datos de una API gratuita de Usuarios</p>
<API /> {/* Renderiza la tabla de la API *//*}*/
