export function Footer({ logoImg, NombreDelBlog }) {
  return (
    <footer className="bg-white shadow-sm dark:bg-gray-900">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between ml-15 mr-15">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={`${logoImg}`} className="h-8" alt="Blog Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {`${NombreDelBlog}`}
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Acerca de
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Politica de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licencia
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" className="hover:underline">
            MiBlog™
          </a>
          . Todos los Derechos Reservados.
        </span>
      </div>
    </footer>
  );
}
