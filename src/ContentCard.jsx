import { useParams } from "react-router-dom";

export function ContentCard() {
  const { id } = useParams();

  // Contenido dinámico basado en el id
  const contentData = {
    1: {
      title: "Contenido para la InfoCard 1",
      description: "Este es el contenido detallado para la primera tarjeta.",
    },
    2: {
      title: "Contenido para la InfoCard 2",
      description: "Este es el contenido detallado para la segunda tarjeta.",
    },
    3: {
      title: "Contenido para la InfoCard 3",
      description: "Este es el contenido detallado para la tercera tarjeta.",
    },
  };

  // Obtener el contenido correspondiente al id
  const content = contentData[id] || {
    title: "Contenido no encontrado",
    description: "No hay contenido disponible para esta tarjeta.",
  };

  return (
    <article>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </article>
  );
}
