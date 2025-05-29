import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
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

// Coordenadas de la Facultad de Informática Mazatlán
const center = {
  lat: 23.2314459,
  lng: -106.4265313
};

// Coordenadas de la Plazuela Machado
const destino = {
  lat: 23.19836,
  lng: -106.42318
};




const mapOptions = {
  
};








const googleMapsApiKey = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik";








export default function Maps2() {
  const [infoWindowVisible, setInfoWindowVisible] = useState(false);

  const [directions , setDirections] = useState(null);

 
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
        <h1 className="text-3xl font-bold">Bienvenido a la actividad 6</h1> 
      </div>

      <div className="div3" style={{ textAlign: 'center'}}> 
        <p className="mt-4">Mapa localizado en la facultad de Informática Mazatlán que viaja en carro hacia la plazuela machado</p>
      </div>

 
      <div className="div4">
        <LoadScript googleMapsApiKey={googleMapsApiKey}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15} 
            options={mapOptions}
            
          >
            <DirectionsService
              options={{
                destination: destino,
                origin: center,
                travelMode: 'DRIVING',
              }}
              callback={(response) => {
                if (response && response.status === 'OK') {
                  setDirections(response);
                  console.log('Ruta calculada:', response);
                } else {
                  console.error('Error al calcular la ruta:', response);
                }
              }}
              
            />

              {directions && (
    <DirectionsRenderer directions={directions} />
              )}

            <Marker
              position={center}
              onClick={handleMarkerClick}
              title={"Facultad de Informática Mazatlán"}
            />
            <Marker
              position={destino}
              onClick={handleMarkerClick}
              title={"Plazuela Machado"}
            >
            
              {infoWindowVisible && (
                <InfoWindow
                  position={center}
                  onCloseClick={handleInfoWindowClose}
                >
                  <div style={{ padding: '5px' }}> 
                    <h3 style={{ margin: '0 0 5px 0' }}>Facultad de Informática Mazatlán</h3>
                    <p style={{ margin: '2px 0' }}><strong>Coordenadas:</strong></p>
                    <p style={{ margin: '2px 0' }}>Lat: {center.lat.toFixed(6)}</p>
                    <p style={{ margin: '2px 0' }}>Lng: {center.lng.toFixed(6)}</p> 
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
        <img className="img1" onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
          src={miGif2}  
        />

      </div>
      <div className="div7">

    </div>
      </div>
  );
}