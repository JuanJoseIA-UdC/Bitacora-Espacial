import { useState } from "react";
import NoticiaCard from "./components/NoticiaCard/NoticiaCard";
import "./App.css";
import "./styles/tokens.css"

function App() {
    const [clics, setClics] = useState(0);

    const noticia = {
        "id": 40917,
        "title": "Relativity tests Terran R second stage, completes structural qualifications ahead of inaugural launch",
        "authors": [
            {
                "name": "Eleanor Day",
                "socials": null
            }
        ],
        "url": "https://www.nasaspaceflight.com/2026/11/relativity-update-1116/",
        "image_url": "https://www.nasaspaceflight.com/wp-content/uploads/2026/11/IMG_2841.jpeg",
        "news_site": "NASASpaceflight",
        "summary": "Relativity Space is advancing Terran R’s flight one hardware and ground infrastructure across NASA’s Stennis…\nThe post Relativity tests Terran R second stage, completes structural qualifications ahead of inaugural launch appeared first on NASASpaceFlight.com.",
        "published_at": "2026-11-19T22:08:32Z",
        "updated_at": "2026-11-19T22:10:14.671099Z",
        "featured": false,
        "launches": [],
        "events": []
    }
    const noticia2 = {
        "id": 40916,
        "title": "Google turns to Blue Origin for a rocket, but its long-term problem remains",
        "authors": [
            {
                "name": "Eric Berger",
                "socials": null
            }
        ],
        "url": "https://arstechnica.com/space/2026/11/google-turns-to-blue-origin-for-a-rocket-but-its-long-term-problem-remains/",
        "image_url": "https://cdn.arstechnica.net/wp-content/uploads/2025/11/NG2-Launch-Rollout-3.jpg",
        "news_site": "Arstechnica",
        "summary": "\"Project Suncatcher is a long-term moonshot.\"",
        "published_at": "2026-11-19T19:52:54Z",
        "updated_at": "2026-11-19T20:00:12.677420Z",
        "featured": false,
        "launches": [],
        "events": []
    }

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
                    <div className="grid-noticias">
                        <NoticiaCard
                            imagen={noticia.image_url}
                            titulo={noticia.title}
                            resumen={noticia.summary}
                            fuente={noticia.news_site}
                            fecha={noticia.published_at}
                            enlace={noticia.url}
                        />
                        <NoticiaCard
                            imagen={noticia2.image_url}
                            titulo={noticia2.title}
                            resumen={noticia2.summary}
                            fuente={noticia2.news_site}
                            fecha={noticia2.published_at}
                            enlace={noticia2.url}
                        />
                        <NoticiaCard
                            imagen={noticia.image_url}
                            titulo={noticia.title}
                            resumen={noticia.summary}
                            fuente={noticia.news_site}
                            fecha={noticia.published_at}
                            enlace={noticia.url}
                        />
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

