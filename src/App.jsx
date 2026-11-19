import { useState } from "react";
import "./App.css";
import "./styles/tokens.css"

function App() {
    const [clics, setClics] = useState(0);

    return (
        <>
            <header className="contenedor cabecera">
                <a href="#inicio">Bitácora Espacial</a>
                <nav aria-label="Principal">
                    <a href="#noticias">Noticias</a>
                    <a href="#acerca">Acerca de esta demo</a>
                </nav>
            </header>

            <main className="contenedor" id="inicio">
                <h1>Explora las noticias del espacio</h1>
                <p>Misiones, descubrimientos y próximos destinos. Encuentra un tema y sigue explorando.</p>
                <form action="" role="search">
                    <label htmlFor="busqueda">Buscar por temas</label>
                    <div className="buscador">
                        <input type="search" id="busqueda" name="q" placeholder="Ej.:Mars, Artemis, SpaceX" />
                        <button type="submit">Buscar</button>
                    </div>
                </form>
                <div className="pruebas" arial-label="Ejemplos" de="" búsqueda="">
                    <span>Prueba la busqueda</span>
                    <button type="button">Mars</button>
                    <button type="button">Artemis</button>
                    <button type="button">SpaceX</button>
                    <button type="button">Sin resultados</button>
                    <button type="button">Ver todas</button>
                </div>
                <section aria-labelledby="titulo-noticias" id="noticicas">
                    <div className="resultador-cabecera">
                        <h2 id="titulo-noticias">Últimas noticias de la muestra</h2>
                        <p role="status"></p>
                    </div>
                    <div className="grid-noticias">{}</div>
                </section>
            </main>

            <footer className="contenedor">
                <p>Datos proporcionados por Spaceflight News API</p>
            </footer>
        </>
    );
}

export default App;

