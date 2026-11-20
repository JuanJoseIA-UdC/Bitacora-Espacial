import { useEffect, useState } from "react";
import NoticiaCard from "./components/NoticiaCard/NoticiaCard";
import "./App.css";
import "./styles/tokens.css"

const VITE_API_URL = import.meta.env.VITE_API_URL;

function App() {

    const [noticias, setNoticias] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controlador = new AbortController();

        fetch(`${VITE_API_URL}/articles/?limit=12`, { signal: controlador.signal })
            .then((respuesta) => {
                if (!respuesta.ok) {
                    throw new Error("Error al obtener las noticias.");
                }
                return respuesta.json();
            })
            .then((datos) => {
                setNoticias(datos.results);
            })
            .catch((errorPeticion) => {
                if (errorPeticion.name !== "AbortError") {
                    setError(errorPeticion.message);
                }
            }).finally(() => {
                if (!controlador.signal.aborted) {
                    setCargando(false);
                }
            });

        return () => controlador.abort();

    }, []);

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

                    {cargando && (
                        <p role="status">
                            Cargando noticias...
                        </p>
                    )}

                    {error && (
                        <p role="alert">
                            {error}
                        </p>
                    )}

                    <div className="grid-noticias">
                        {noticias.map((noticia) => (
                            <NoticiaCard
                                key={noticia.id}
                                titulo={noticia.title}
                                resumen={noticia.summary}
                                imagen={noticia.image_url}
                                fuente={noticia.news_site}
                                fecha={noticia.published_at}
                                enlace={noticia.url}
                            />
                        ))}
                    </div>
                </section>
            </main>

            <footer className="contenedor">
                <p>Datos proporcionados por Spaceflight News API</p>
            </footer>
        </>
    );
}

export default App;

