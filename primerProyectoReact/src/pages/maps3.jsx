import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer, MarkerClustererF, MarkerF } from '@react-google-maps/api';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import miGif2 from '../assets/19.gif'; 



const containerStyle = {
  width: '90%', 
  maxWidth: '1200px',
  height: '600px', 
  margin: '20px auto', 
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};


const center = {
  lat: 23.2314459,
  lng: -106.4265313
};

const generateMarkers = () => {
  const markers = [];
  for (let i = 0; i < 100; i++) {
    markers.push({
      lat: center.lat + Math.random() * 0.1 - 0.05,
      lng: center.lng + Math.random() * 0.1 - 0.05,
    });
  }
  return markers;
};

const markers = generateMarkers();











const googleMapsApiKey = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik";








export default function Maps3() {
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

 
  const handleMarkerClick = useCallback(() => {
    setInfoWindowVisible(true);
  }, []); 

  const handleInfoWindowClose = useCallback(() => {
    setInfoWindowVisible(false);
  }, []);
  if (!googleMapsApiKey) {
    console.error("Error: Falta la API Key de Google Maps.");
    return (
      <div style={{ padding: '20px', color: 'red', border: '1px solid red', margin: '20px' }}>
        Error de Configuración: La funcionalidad de mapa no está disponible.
        (Falta la clave API de Google Maps).
      </div>
    );
  }

   

  return (
    <div className="parent">
      <div className="div1">
        <Header />
      </div>

      <div className="div2" style={{ textAlign: 'center'}}> 
        <h1 className="text-3xl font-bold">Bienvenido a la actividad 7</h1> 
      </div>

      <div className="div3" style={{ textAlign: 'center'}}> 
        <p className="mt-4">Aplicar el uso de la API de Google Maps en una aplicación React para mostrar múltiples ubicaciones y agrupar marcadores mediante MarkerClusterer, mejorando la visualización y eficiencia en mapas interactivos.</p>
      </div>

 
      <div className="div4">
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}   
          >
          <MarkerClustererF>
            {(clusterer) =>
              markers.map((marker, index) => (
                <MarkerF
                  key={index}
                  position={marker}
                  clusterer={clusterer}
                  onClick={handleMarkerClick}
                />
              ))
            }
          </MarkerClustererF>
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="div5">
        <Footer />
      </div>

      <div className="div6">
        <img className="img1" onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
          src={miGif2}  
        />

      </div>
      <div className="div7">

    </div>
      </div>
  );
}