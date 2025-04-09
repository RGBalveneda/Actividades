import React from 'react';
import { AppBar, Toolbar, Typography, Button, Stack, Box } from '@mui/material';
export default function Header() {
  // Datos para los botones de navegación
  const navItems = [
    { label: 'Home', href: '/home' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
    { label: 'Actividad 1', href: '/actividad1' },
    { label: 'Actividad 2', href: '/actividad2' },
    { label: 'Actividad 3', href: '/actividad3' },
    { label: 'Actividad 4', href: '/actividad4' },
    { label: 'Actividad 5', href: '/actividad5' },
  ];

  return (
    <AppBar position="static" >
      <Toolbar>
        {/* Título del sitio */}
        <Typography
          variant="h6"
          component="div"
          // sx prop para estilos:
          sx={{
            flexGrow: 1, // Ocupa el espacio disponible empujando lo demás a la derecha
            fontSize: '1.5rem', // Tamaño de fuente (similar a text-2xl)
            fontWeight: 'bold', // Negrita (similar a font-bold)
          }}
        >
       Repositorio de Actividades
        </Typography>

        {/* Usamos Stack para agrupar y espaciar los botones */}
        <Stack
          direction="row" // Alinea los botones horizontalmente
          spacing={1} // Espacio entre botones (usa theme.spacing, por defecto 8px)
          sx={{ display: { xs: 'none', sm: 'flex' } }} // Oculta en pantallas extra-pequeñas, muestra como flex en pequeñas y mayores
        >
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="contained" // Mantenemos el estilo de botón que tenías
              color="primary"      // Mantenemos el color primario
              href={item.href}
              // Si usas react-router-dom:
              // component={RouterLink}
              // to={item.href}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
         {/* Podrías añadir aquí un IconButton con un menú para pantallas 'xs' */}
         {/* Ejemplo rápido (requiere importar IconButton y Menu, y manejar estado):
         <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <IconButton color="inherit" aria-label="menu">
              <MenuIcon /> {/* Necesitas importar MenuIcon de @mui/icons-material *\/}
            </IconButton>
         </Box>
         */}

      </Toolbar>
    </AppBar>
  );
}