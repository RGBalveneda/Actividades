import React from 'react';
import miGif from '../assets/6.gif'; // Asegúrate de que la ruta sea correcta
import miGif2 from '../assets/2.gif'; 
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";



export default function Home() {
    return (

    <div class="parent">
        <div class="div1">
         <Header />
        </div>
                   
    <div class="div2">
    <h1 className="text-3xl font-bold">Bienvenido a mi repositorio de actividades para la materia</h1>
    <h1 className="text-3xl font-bold"> de sistemas de informacion geografica</h1>
    </div>
        
    <div class="div3">
    <p className="mt-4">Para acceder a una actividad, haz click en la actividad que deseas visitar en el header de arriba.</p>
    <p className="mt-4">Las pestanas de "Home, About, Services y Contact son Placeholders, que no contienen mas que un poco de texto y un gif de un gato</p>
    <p className="mt-4">El apartado Services esta fuera de servicio, y te desplegara la pantalla de error 404</p>
    <p className="mt-4">Un gato como este:</p>
    </div>
        
    <div class="div4">  
                
                 <img 
                                                    src={miGif}  // <--- ¡Usa la variable importada aquí!
                                                    alt="Descripción útil de mi animación GIF" 
                                                    className="mt-6 w-80 h-auto rounded-lg shadow-lg" 
                 />
    </div>
        
    <div class="div5">
    <Footer />
    </div>

    <div class="div6">
    <img 
        src={miGif2}  // <--- ¡Usa la variable importada aquí!
        alt="Descripción útil de mi animación GIF" 
        className="mt-6 w-80 h-auto rounded-lg shadow-lg" 
    />
    </div>

    <div class="div7">
    <img 
        src={miGif2}  // <--- ¡Usa la variable importada aquí!
        alt="Descripción útil de mi animación GIF" 
        className="mt-6 w-80 h-auto rounded-lg shadow-lg" 
    />
    </div>
                        
                        
    </div>
        /*
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4">



            </main>
        </div>
        */
    );
}