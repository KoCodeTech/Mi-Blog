import { useParams } from "react-router-dom";
import { useLoadSvgs } from "../hooks/useLoadSvgs.jsx";

export function ContentCard() {
  const { id } = useParams();
  const { svgs, isLoading } = useLoadSvgs();

  // Contenido dinámico basado en el id
  const contentData = {
    1: {
      title: "ContentCard 1",
      image: "../assets/images/comic-ej.svg",
    },
    2: {
      title: null,
      image: null,
    },
    3: {
      title: "ContentCard 3",
      image: "../assets/images/kitsuneLogo.svg",
    },
  };

  // Obtener el contenido correspondiente al id
  const content = contentData[id] || {
    title: "Contenido no encontrado",
    image: "../assets/images/no-image.svg",
  };

  // Asegurar valores por defecto para title e image
  const title = content.title || "Título no disponible";
  const image = svgs[content.image] || svgs["../assets/images/no-image.svg"];

  if (isLoading) {
    return (
      <p className="p-6 m-6 bg-zinc-700 rounded-lg shadow-md text-5xl">
        Cargando contenido...
      </p>
    );
  }

  return (
    <article className="p-6 m-6 bg-zinc-700 rounded-lg shadow-md">
      <h1>{title}</h1>
      <img src={image} alt={title} />
    </article>
  );
}
