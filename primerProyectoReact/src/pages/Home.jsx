import React from 'react';
import miGif from '../assets/2.gif'; // Asegúrate de que la ruta sea correcta


export default function Home() {
    return (
        
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-bold">Bienvenido a mi repositorio de actividades para la materia</h1>
                <h1 className="text-3xl font-bold"> de sistemas de informacion geografica</h1>

                <br/>
                <br/>
                <p className="mt-4">Para acceder a una actividad, haz click en la actividad que deseas visitar en el header de arriba.</p>
                <p className="mt-4">Las pestanas de "Home, About, Services y Contact son Placeholders, que no contienen mas que un poco de texto y un gif de un gato</p>
                <p className="mt-4">El apartado Services esta fuera de servicio, y te desplegara la pantalla de error 404</p>
                <br/>
                <br/>
                <p className="mt-4">Un gato como este:</p>
                 <img 
                                                    src={miGif}  // <--- ¡Usa la variable importada aquí!
                                                    alt="Descripción útil de mi animación GIF" 
                                                    className="mt-6 w-80 h-auto rounded-lg shadow-lg" 
                 />

            </main>
        </div>
    );
}