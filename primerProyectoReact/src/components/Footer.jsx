import { Button } from '@mui/material';
import React from 'react';


export default function Footer() {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-2xl font-bold">Da click aqui para regresar al menu home</h1>
            <nav>
                    <Button variant="contained" color="primary" href="/home">
                        Home
                    </Button>    
            </nav>
        </header>
    );
}