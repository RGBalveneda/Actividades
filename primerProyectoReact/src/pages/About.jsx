import miGif from '../assets/10.gif'; 

export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4">
                <br/>
                <br/>
                <br/>
                <h1 className="text-3xl font-bold">Bienvenido a mi pagina</h1>
                <p className="mt-4">Esta es la pagina de "About"</p>
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