import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Header from '../components/Header'; // Asegúrate que la ruta sea correcta
import Footer from '../components/Footer'; // Asegúrate que la ruta sea correcta
import miGif2 from '../assets/19.gif'; // Asegúrate de que la ruta sea correcta


// --- Estilos ---
// Estilos para el contenedor del mapa
const containerStyle = {
  width: '90%', // Ejemplo: 90% del ancho disponible
  maxWidth: '1200px', // Ejemplo: Un ancho máximo razonable
  height: '600px', // Altura ajustada (800px puede ser mucho)
  margin: '20px auto', // Centra el mapa horizontalmente y añade margen vertical
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  // display: 'flex' y justifyContent: 'center' no son necesarios aquí,
  // Google Maps maneja el contenido interno. margin: auto centra el bloque.
};

// --- Constantes y Configuración ---
// Coordenadas centrales y del marcador (Mazatlán - Facultad de Informática aprox.)
const center = {
  lat: 23.2314459,
  lng: -106.4265313
};

// Opciones del mapa (opcional)
const mapOptions = {
  // disableDefaultUI: true,
  // zoomControl: false,
};


const googleMapsApiKey = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik"; // <-- ¡CLAVE EXPUESTA! REEMPLAZAR/PROTEGER

// --- Componente Principal ---
export default function Maps() {
  // --- Estado ---
  // Controla la visibilidad del InfoWindow
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  // --- Manejadores de Eventos (Memorizados con useCallback) ---
  const handleMarkerClick = useCallback(() => {
    setInfoWindowVisible(true);
  }, []); // Sin dependencias, la función no cambia

  const handleInfoWindowClose = useCallback(() => {
    setInfoWindowVisible(false);
  }, []); // Sin dependencias, la función no cambia
  if (!googleMapsApiKey) {
    console.error("Error: Falta la API Key de Google Maps.");
    return (
      <div style={{ padding: '20px', color: 'red', border: '1px solid red', margin: '20px' }}>
        Error de Configuración: La funcionalidad de mapa no está disponible.
        (Falta la clave API de Google Maps).
      </div>
    );
  }
   if (googleMapsApiKey === "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik") {
    console.warn("Advertencia: Estás usando una clave API de ejemplo o expuesta directamente en el código. Asegúrate de reemplazarla y protegerla usando variables de entorno para producción.");
   }

  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>

      <div className="div2" style={{ textAlign: 'center'}}> 
        <h1 className="text-3xl font-bold">Bienvenido a la actividad 5</h1> 
      </div>

      <div className="div3" style={{ textAlign: 'center'}}> 
        <p className="mt-4">Mapa localizado en la facultad de Informática Mazatlán</p>
      </div>

      {/* Contenedor del mapa y su lógica */}
      <div className="div4">
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15} // Ajusta el zoom según necesites (15 es más cercano)
            options={mapOptions}
          >
            <Marker
              position={center}
              onClick={handleMarkerClick}
              title={"Facultad de Informática Mazatlán"} // Añade un tooltip al pasar el mouse
            >
              {infoWindowVisible && (
                <InfoWindow
                  position={center}
                  onCloseClick={handleInfoWindowClose}
                >
                  {/* Contenido del InfoWindow */}
                  <div style={{ padding: '5px' }}> {/* Añade algo de padding interno */}
                    <h3 style={{ margin: '0 0 5px 0' }}>Facultad de Informática Mazatlán</h3>
                    <p style={{ margin: '2px 0' }}><strong>Coordenadas:</strong></p>
                    <p style={{ margin: '2px 0' }}>Lat: {center.lat.toFixed(6)}</p> {/* Limita decimales */}
                    <p style={{ margin: '2px 0' }}>Lng: {center.lng.toFixed(6)}</p> {/* Limita decimales */}
                  </div>
                </InfoWindow>
              )}
            </Marker>
          </GoogleMap>
        </LoadScript>
      </div>
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