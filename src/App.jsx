import { useState } from "react";
import "./App.css";
import "./styles/tokens.css"

function App() {
    const [clics, setClics] = useState(0);

    return (
        <>
            <header>
                <nav aria-label="Principal">
                    <a href="#noticias">Noticias</a>
                    <a href="#blogs">Blogs</a>
                    <a href="#acerca">Acerca</a>
                </nav>
            </header>

            <main>
                <h1>Explora las noticias del espacio</h1>
                <section aria-labelledby="titulo-noticias" id="noticicas">
                    <h2 id="titulo-noticias">Últimas noticias</h2>
                </section>
            </main>

            <footer>
                <p>Datos proporcionados por Spaceflight News API</p>
            </footer>
        </>
    );
}

export default App;

