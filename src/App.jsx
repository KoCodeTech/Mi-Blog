import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { InfoCard } from "./InfoCard.jsx";
import { Navbar } from "./Navbar.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Footer } from "./Footer.jsx";
import { ContentCard } from "./ContentCard.jsx";
import kitsuneLogo from "./assets/kitsuneLogo.svg";
import map from "./assets/map.svg";
import coffem from "./assets/coffem.svg";
import kitsunecolor from "./assets/kitsunecolor.svg";

const infoCardsData = [
  {
    portada: kitsuneLogo,
    tituloPortada: "Titulo de la portada",
    descripcionPortada: "Descripción de la portada",
    linkTo: "/content/1",
  },
  {
    portada: map,
    tituloPortada: "Titulo de la portada 2 ahora mas largo",
    descripcionPortada:
      "Descripción de la portada 2 ahora mas largo para ver como se comporta el texto",
    linkTo: "/content/2",
  },
  {
    portada: coffem,
    tituloPortada: "Titulo de la portada 3 ahora mas largo",
    descripcionPortada:
      "Descripción de la portada 3 ahora mas largo para ver como se comporta el texto",
    linkTo: "/content/3",
  },
];

function App() {
  return (
    <Router>
      <Navbar logoImg={kitsunecolor} NombreDelBlog="Mi Blog" />
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
      <Footer logoImg={kitsuneLogo} NombreDelBlog="Mi Blog" />
    </Router>
  );
}

export default App;
