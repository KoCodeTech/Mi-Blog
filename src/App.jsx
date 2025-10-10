import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { InfoCard } from "./InfoCard.jsx";
import { Navbar } from "./Navbar.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Footer } from "./Footer.jsx";
import { ContentCard } from "./ContentCard.jsx";

const infoCardsData = [
  {
    portada: "src/assets/kitsuneLogo.svg",
    tituloPortada: "Titulo de la portada",
    descripcionPortada: "Descripción de la portada",
    linkTo: "/content/1",
  },
  {
    portada: "src/assets/map.svg",
    tituloPortada: "Titulo de la portada 2 ahora mas largo",
    descripcionPortada:
      "Descripción de la portada 2 ahora mas largo para ver como se comporta el texto",
    linkTo: "/content/2",
  },
  {
    portada: "src/assets/coffem.svg",
    tituloPortada: "Titulo de la portada 3 ahora mas largo",
    descripcionPortada:
      "Descripción de la portada 3 ahora mas largo para ver como se comporta el texto",
    linkTo: "/content/3",
  },
];

function App() {
  return (
    <Router>
      <Navbar
        logoImg="src/assets/kitsunecolor.svg"
        NombreDelBlog="Mi Blog"
      ></Navbar>

      <Sidebar />

      <Routes>
        <Route
          path="/"
          element={
            <div className="info-cards-container">
              {infoCardsData.map((card, index) => (
                <InfoCard
                  key={index}
                  portada={card.portada}
                  tituloPortada={card.tituloPortada}
                  descripcionPortada={card.descripcionPortada}
                  linkTo={card.linkTo}
                />
              ))}
            </div>
          }
        />
        <Route path="/content/:id" element={<ContentCard />} />
      </Routes>

      <Footer
        logoImg="src/assets/kitsuneLogo.svg"
        NombreDelBlog="Mi Blog"
      ></Footer>
    </Router>
  );
}

export default App;
