import { Link } from "react-router-dom";

export function InfoCard({
  portada,
  tituloPortada,
  descripcionPortada,
  linkTo,
}) {
  return (
    <article className="info-card">
      <header>
        <img 
        className="img-portada" 
        src={`${portada}`} 
        alt="Img de Portada" />

        <div className="info-text">
          <span 
          className="titulo-portada">{`${tituloPortada}`}</span>
          <span 
          className="descripcion-portada">{`${descripcionPortada}`}</span>
        </div>
      </header>

      <aside className="info-aside">
        <Link to={linkTo}>
          <button className="w-full h-full mt-5">Leer</button>
        </Link>
      </aside>
    </article>
  );
}
