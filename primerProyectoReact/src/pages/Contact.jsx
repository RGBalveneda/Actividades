import miGif from '../assets/3.gif'; // 1. IMPORTA TU GIF AQUÍ



export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow p-4">
            <br/>
            <br/>
            <br/>
            <br/>
                <h1 className="text-3xl font-bold">Welcome to My Website</h1>
                <p className="mt-4">This is the Contact page content.</p>
            <br/>
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