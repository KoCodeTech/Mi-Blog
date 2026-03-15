export function Novedades({ notificaciones, setNotificaciones }) {
  return (
    <div className="novedades-container p-5 h-full">
      <h1>Novedades</h1>
      <p>
        Aquí encontrarás las últimas novedades y actualizaciones de nuestro
        blog.
      </p>

      {/* Lista de Novedades */}
      <ul className="novedades-lista mt-4 p-5 bg-zinc-800 rounded-lg shadow-md h-150">
        {notificaciones.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          setNotificaciones((prev) => [...prev, "• Nueva Notificación 📨"])
        }
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Agregar notificación
      </button>
    </div>
  );
}
