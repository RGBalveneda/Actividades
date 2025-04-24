import miGif from '../assets/18.gif'; 
import miGif2 from '../assets/2.gif'; 
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export default function About() {
    return (
        <div className="parent">
            <div className="div1">
                <Header />
               
            </div>
           
            <div className="div2">
            <h1 className="text-3xl font-bold">Bienvenido a mi pagina</h1>
            
            </div>

            <div class="div3">
            
            <h1 className="mt-4">Esta es la pagina de "About"</h1>
            </div>

            <div className="div4">  
            <img className="img2"
                    src={miGif}  // <--- ¡Usa la variable importada aquí!
            />
            </div>

            <div className="div5">
                <Footer />
            </div>
            <div className="div6">
            <img className="img1"
                    src={miGif2}  // <--- ¡Usa la variable importada aquí!
            />
                </div>
            <div className="div7">
            <img className="img1"
                    src={miGif2}  // <--- ¡Usa la variable importada aquí!
            />
            </div>
                
                
        </div>
    );
}
