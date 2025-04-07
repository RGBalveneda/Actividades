import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Footer from "./components/Footer";
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
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4">
        <h1 className="text-3xl font-bold">Bienvenido a la Actividad 1</h1>
        <p className="mt-4">Esta es la tabla de alumnos.</p>
      </main>
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 700 }}     aria-label="span table">
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
    <Footer />
    </div>
  );
}

