import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import '../styles/App.css'
import miGif2 from '../assets/14.gif';
 
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Card from '../components/card.jsx';


export default function API() {

  const [data, setData] = useState([]); 
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const apiData = await response.json();
      setData(apiData); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 
  useEffect(() => {
    fetchData();
  }, []);

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
       <TableCell colSpan={4} align="center" sx={{ fontWeight: 'bold' }}> {/* Ajusta colSpan */}
         Tabla de Usuarios (API)
       </TableCell>
     </TableRow>
    <TableRow sx={{ backgroundColor: '#f0f0f0' }}>
      <TableCell>ID</TableCell>
      <TableCell>Name</TableCell>
      <TableCell>Username</TableCell>
      <TableCell>Email</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map((user) => (
      <TableRow key={user.id}>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>
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
    <img className="img1"
            src={miGif2}  // <--- ¡Usa la variable importada aquí!
    />
        </div>
    <div class="div7">
    <img className="img1"
            src={miGif2}  // <--- ¡Usa la variable importada aquí!
    />
    </div>
        
      </div>  
  );
}


