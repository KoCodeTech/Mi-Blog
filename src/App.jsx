import "./App.css";
import { InfoCard } from "./InfoCard.jsx";
import { Navbar } from "./Navbar.jsx";
import { Sidebar } from "./Sidebar.jsx";
import { Footer } from "./Footer.jsx";
import { ContentCard } from "./ContentCard.jsx";

function App() {
  return (
    <>
      <Navbar
        logoImg="src\assets\kitsunecolor.svg"
        NombreDelBlog="Mi Blog"
      ></Navbar>

      <Sidebar></Sidebar>

      <div className="info-cards-container">
        <InfoCard
          portada="src\assets\kitsuneLogo.svg"
          tituloPortada="Titulo de la portada"
          descripcionPortada="Descripción de la portada"
        ></InfoCard>

        <InfoCard
          portada="src\assets\map.svg"
          tituloPortada="Titulo de la portada 2 ahora mas largo"
          descripcionPortada="Descripción de la portada 2 ahora mas largo para ver como se comporta el texto"
        ></InfoCard>

        <InfoCard
          portada="src\assets\coffem.svg"
          tituloPortada="Titulo de la portada 3 ahora mas largo"
          descripcionPortada="Descripción de la portada 3 ahora mas largo para ver como se comporta el texto"
        ></InfoCard>
      </div>

      <Footer
        logoImg="src\assets\kitsuneLogo.svg"
        NombreDelBlog="Mi Blog"
      ></Footer>
    </>
  );
}

export default App;
