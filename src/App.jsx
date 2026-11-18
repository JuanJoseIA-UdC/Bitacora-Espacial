import { useState } from "react";
import "./App.css";

function App() {
    const [clics, setClics] = useState(0);

    return (
        <main className="app">
            <h1>Hola, React</h1>
            <p>Mi primer proyecto con Vite.</p>
            <button onClick={() => setClics(clics + 1)}>
                Clics: {clics}
            </button>
        </main>
    );
}

export default App;

