import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, Suspense, lazy } from "react";
import "./styles/App.css";
import { InfoCard } from "./components/InfoCard.jsx";
import { Navbar } from "./components/layout/Navbar.jsx";
import { Sidebar } from "./components/layout/Sidebar.jsx";
import { Footer } from "./components/layout/Footer.jsx";
import { ContentCard } from "./components/ContentCard.jsx";
import { Novedades } from "./pages/Novedades.jsx";
import ErrorBoundary from "./components/layout/ErrorBoundary.jsx"; // Importa el Error Boundary

// Cargar el componente Game dinámicamente
const Game = lazy(() => import("./components/Game.jsx"));

function App() {
  const [showGame, setShowGame] = useState(false); // Estado para controlar si se muestra el juego

  const [notificaciones, setNotificaciones] = useState([
    "• Nueva Funcionalidad: Modo Oscuro ⚫",
    "• Actualización del Contenido: Nuevos Artículos Publicados 📬",
    "• Mejoras en el Rendimiento del Sitio Web 🏃‍♂️",
  ]);

  return (
    <Router>
      <Navbar
        logoImg="./assets/kitsunecolor.svg"
        NombreDelBlog="Mi Blog"
      ></Navbar>

      {/* Sidebar original, visible en todas las rutas */}
      <Sidebar notificaciones={notificaciones} />

      <Routes>
        {/* Página principal */}
        <Route
          path="/Mi-Blog/"
          element={
            <div className="main-container">
              <div className="info-cards-container">
                <InfoCard
                  id="1"
                  tituloPortada="Titulo de la portada"
                  descripcionPortada="Descripción de la portada"
                  linkTo="/content/1"
                ></InfoCard>

                <InfoCard
                  id="2"
                  tituloPortada="Titulo de la portada 2 ahora mas largo"
                  descripcionPortada="Descripción de la portada 2 ahora mas largo para ver como se comporta el texto"
                  linkTo="/content/2"
                ></InfoCard>

                <InfoCard
                  id="3"
                  tituloPortada="Titulo de la portada 3 ahora mas largo"
                  descripcionPortada="Descripción de la portada 3 ahora mas largo para ver como se comporta el texto"
                  linkTo="/content/3"
                ></InfoCard>
              </div>

              {/* Botón para mostrar el juego */}
              {!showGame ? (
                <div className="play-button-container">
                  <button
                    className="play-button bg-gray-700 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                    onClick={() => setShowGame(true)}
                    aria-label="Iniciar el juego"
                  >
                    Play Game
                  </button>
                </div>
              ) : (
                <ErrorBoundary>
                  <Suspense fallback={<div>Cargando el juego...</div>}>
                    <Game />
                  </Suspense>
                </ErrorBoundary>
              )}
            </div>
          }
        />

        {/* Página de contenido */}
        <Route
          path="/content/:id"
          element={
            <div className="content-container">
              <ContentCard />
            </div>
          }
        />

        {/* Página de novedades */}
        <Route
          path="/novedades/"
          element={
            <Novedades
              notificaciones={notificaciones}
              setNotificaciones={setNotificaciones}
            />
          }
        />
      </Routes>

      <Footer
        logoImg="./assets/kitsunecolor.svg"
        NombreDelBlog="Mi Blog"
      ></Footer>
    </Router>
  );
}

export default App;
