import { Link } from "react-router-dom";
import { useLoadSvgs } from "./hooks/useLoadSvgs.jsx";

/* Componente InfoCard que muestra una tarjeta de información con imagen, título, descripción y un enlace */

export function InfoCard({ id, tituloPortada, descripcionPortada, linkTo }) {
  const { svgs, isLoading } = useLoadSvgs();

  const contentData = {
    1: {
      portada: "../assets/images/map.svg",
    },
    2: {
      portada: "../assets/images/comic-ej.svg",
    },
    3: {
      portada: "../assets/images/kitsuneLogo.svg",
    },
  };
  const content = contentData[id] || {
    portada: "../assets/images/no-image.svg",
  };
  const portada = svgs[content.portada] || svgs["../assets/images/no-image.svg"];

  if (isLoading) {
    return (
      <p className="p-6 m-6 bg-zinc-700 rounded-lg shadow-md text-5xl">
        Cargando tarjeta...
      </p>
    );
  }
  
  return (
    <article className="info-card">
      <header>
        <img className="img-portada" src={portada} alt="Img de Portada" />
        <div className="info-text">
          <span className="titulo-portada">{`${tituloPortada}`}</span>
          <span className="descripcion-portada">{`${descripcionPortada}`}</span>
        </div>
      </header>

      <aside className="info-aside">
        <Link to={linkTo} className="w-full">
          <button className="w-full">Leer</button>
        </Link>
      </aside>
    </article>
  );
}
