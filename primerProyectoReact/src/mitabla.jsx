import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import miGif from './assets/4.gif';
import miGif2 from './assets/2.gif'; 
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Card from './card.jsx';
import './App.css'


const Persona = [
  { nombre: "Ricardo", edad: 21, apellido: "Guzman" },
  { nombre: "Aeelyn", edad: 22, apellido: "Estrella" },
  { nombre: "Paola", edad: 23, apellido: "Salazar" },
  { nombre: "Santiago", edad: 16, apellido: "Quijano" },
  { nombre: "Tommy", edad: 12, apellido: "Flores" },   
];

export default function BasicTable() {
  return (
        <div class="parent">
            <div class="div1">  
                <Header />
            </div>
           
            <div class="div2">
            <h1 className="text-3xl font-bold">Bienvenido a la actividad 1</h1>
            </div>

            <div class="div3">
            <p>Crea una tabla implementando la libreria de MUI</p>
            </div>
             
            <div class="div4">

              <Card>
              <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000, minHeight:400 }}     aria-label="span table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} align="center">
              Tabla de Alumnos
            </TableCell>
          </TableRow> 
          <TableRow>
            <TableCell>Nombre del alumno</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Persona.map((persona, index) => (
            <TableRow key={index}>
              <TableCell>{persona.nombre}</TableCell>
              <TableCell>{persona.apellido}</TableCell>
              <TableCell>{persona.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
              </Card>

       
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
  );
}

