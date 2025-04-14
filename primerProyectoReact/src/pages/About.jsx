import miGif from '../assets/10.gif'; 
import miGif2 from '../assets/2.gif'; 
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
    return (
        <div class="parent">
            <div class="div1">
                <Header />
            </div>
           
            <div class="div2">
            <h1 className="text-3xl font-bold">Bienvenido a mi pagina</h1>
            </div>

            <div class="div3">
            <p className="mt-4">Esta es la pagina de "About"</p>
            </div>

            <div class="div4">  
                <img 
                    src={miGif}  // <--- ¡Usa la variable importada aquí!
                    alt="Descripción útil de mi animación GIF" 
                    className="mt-6 w-80 h-auto rounded-lg shadow-lg" 
                />
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
