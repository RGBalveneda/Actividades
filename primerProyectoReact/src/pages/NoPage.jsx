import miGif from '../assets/4.gif'; // Asegúrate de que la ruta sea correcta


export default function NoPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4">
                <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
                <p className="mt-4">Te dije que estaba fuera de servicio</p>
                <br/>
                <br/>
                 <img 
                                                                    src={miGif}  // <--- ¡Usa la variable importada aquí!
                                                                    alt="Descripción útil de mi animación GIF" 
                                                                    className="mt-6 w-80 h-auto rounded-lg shadow-lg" 
                />
            </main>
        </div>
    );
}