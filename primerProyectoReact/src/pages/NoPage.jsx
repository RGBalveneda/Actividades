import miGif from '../assets/4.gif'; // Asegúrate de que la ruta sea correcta
import miGif2 from '../assets/2.gif'; 
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";


export default function NoPage() {
    return (
              <div class="parent">
                    <div class="div1">
                        <Header />
                    </div>
                   
                    <div class="div2">
                    <h1 className="text-3xl font-bold">Bienvenido a mi pagina</h1>
                    </div>
        
                    <div class="div3">
                    <p className="mt-4"> Te dije que estaba fuera de servicio</p>
                    </div>
        
                    <div class="div4">  
            <img className="img2"
                    src={miGif}  // <--- ¡Usa la variable importada aquí!
            />
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
        /*
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
        */
    );
}