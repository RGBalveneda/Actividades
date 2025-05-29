import React, { useState, useCallback, useRef } from 'react';
 import { GoogleMap, LoadScript, DrawingManager } from '@react-google-maps/api';
 import Header from '../components/Header';
 import Footer from '../components/Footer';
 import miGif2 from '../assets/19.gif';

 const containerStyle = {
   width: '70%', 
   height: '600px',
   margin: '20px',
   border: '1px solid #ccc',
   borderRadius: '8px',
   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
   float: 'left', 
 };

 const sidebarStyle = {
   width: '25%',
   height: '580px', 
   margin: '20px',
   padding: '15px',
   border: '1px solid #eee',
   borderRadius: '8px',
   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
   backgroundColor: '#f9f9f9',
   overflowY: 'auto',
   float: 'right', 
 };

 const center = {
   lat: 23.2314459,
   lng: -106.4265313
 };

 // Ensure you have your API key in an environment variable for security
 const googleMapsApiKey = "AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik";
 if (!googleMapsApiKey) {
   console.error("Error: La API Key de Google Maps no está configurada en las variables de entorno (REACT_APP_GOOGLE_MAPS_API_KEY).");
 }

 export default function Maps4() {
   const [drawnShapes, setDrawnShapes] = useState([]);
   const drawingManagerRef = useRef(null);

   const handlePolygonComplete = useCallback((polygon) => {
     const path = polygon.getPath().getArray().map(coord => ({
       lat: coord.lat(),
       lng: coord.lng()
     }));
     setDrawnShapes(prevShapes => [...prevShapes, { type: 'polygon', path, object: polygon }]);
   }, []);

   const handleRectangleComplete = useCallback((rectangle) => {
     const bounds = rectangle.getBounds();
     const ne = bounds.getNorthEast();
     const sw = bounds.getSouthWest();
     const path = [
       { lat: ne.lat(), lng: sw.lng() },
       { lat: ne.lat(), lng: ne.lng() },
       { lat: sw.lat(), lng: ne.lng() },
       { lat: sw.lat(), lng: sw.lng() },
     ];
     setDrawnShapes(prevShapes => [...prevShapes, { type: 'rectangle', path, object: rectangle }]);
   }, []);

   const handlePolylineComplete = useCallback((polyline) => {
     const path = polyline.getPath().getArray().map(coord => ({
       lat: coord.lat(),
       lng: coord.lng()
     }));
     setDrawnShapes(prevShapes => [...prevShapes, { type: 'polyline', path, object: polyline }]);
   }, []);

   const handleDeleteAllShapes = useCallback(() => {
     drawnShapes.forEach(shapeInfo => {
       shapeInfo.object.setMap(null); // Remove shape from map
     });
     setDrawnShapes([]); // Clear the state
   }, [drawnShapes]);

   const getShapeCoordinates = (shape) => {
     if (shape.type === 'polygon' || shape.type === 'polyline') {
       return shape.path.map(coord => `Lat: ${coord.lat.toFixed(6)}, Lng: ${coord.lng.toFixed(6)}`);
     } else if (shape.type === 'rectangle') {
       return shape.path.map(coord => `Lat: ${coord.lat.toFixed(6)}, Lng: ${coord.lng.toFixed(6)}`);
     }
     return [];
   };

   return (
     <div className="parent" style={{ overflow: 'auto' }}> {/* Added overflow for better layout */}
       <div className="div1">
         <Header />
       </div>

       <div className="div2" style={{ textAlign: 'center'}}>
         <h1 className="text-3xl font-bold">Actividad 6: Dibujo en el Mapa</h1>
       </div>

       <div className="div3" style={{ textAlign: 'center'}}>
         <p className="mt-4">Dibuja polígonos, rectángulos y líneas en el mapa. Las coordenadas aparecerán aquí.</p>
       </div>

       <div className="div4">
         {googleMapsApiKey ? (
           <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={['drawing']}>
             <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}
               onLoad={map => {
                 drawingManagerRef.current = map.overlayMapTypes.push({
                   init: (map) => {
                     const drawingManager = new window.google.maps.drawing.DrawingManager({
                       drawingControl: true,
                       drawingControlOptions: {
                         position: window.google.maps.ControlPosition.TOP_CENTER,
                         drawingModes: ['polygon', 'rectangle', 'polyline'],
                       },
                       map: map,
                     });
                     drawingManager.addListener('polygoncomplete', handlePolygonComplete);
                     drawingManager.addListener('rectanglecomplete', handleRectangleComplete);
                     drawingManager.addListener('polylinecomplete', handlePolylineComplete);
                   },
                   release: () => {
                     // Optional: clean up resources
                   }
                 });
               }}
               onUnmount={map => {
                 if (drawingManagerRef.current !== null && map.overlayMapTypes.getLength() > 0) {
                   map.overlayMapTypes.removeAt(drawingManagerRef.current - 1);
                 }
               }}
             >
               {/* DrawingManager is now controlled via the onLoad callback */}
             </GoogleMap>
           </LoadScript>
         ) : (
           <div style={{ padding: '20px', color: 'red', border: '1px solid red', margin: '20px' }}>
             Error de Configuración: La funcionalidad de mapa no está disponible.
             (Falta la clave API de Google Maps o no está configurada correctamente).
           </div>
         )}
       </div>

       <div style={sidebarStyle}>
        
       </div>

       <div className="div5" style={{ clear: 'both' }}> {/* Added clear to fix layout */}
         <Footer />
       </div>

       <div className="div6">
  <h2>Formas Dibujadas</h2>
         {drawnShapes.length === 0 ? (
           <p>No se ha dibujado ninguna forma.</p>
         ) : (
           <ul>
             {drawnShapes.map((shape, index) => (
               <li key={index}>
                 <strong>{shape.type.charAt(0).toUpperCase() + shape.type.slice(1)} {index + 1}:</strong>
                 <ul>
                   {getShapeCoordinates(shape).map((coord, i) => (
                     <li key={i}>{coord}</li>
                   ))}
                 </ul>
               </li>
             ))}
           </ul>
         )}
         {drawnShapes.length > 0 && (
           <button onClick={handleDeleteAllShapes} style={{ marginTop: '10px', padding: '8px 15px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
             Eliminar Todas las Formas
           </button>
         )}
       </div>
       <div className="div7">
       </div>
     </div>
   );
 }