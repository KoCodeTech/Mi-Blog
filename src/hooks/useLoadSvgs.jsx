import { useState, useEffect } from "react";

/* Hook personalizado para cargar SVGs dinámicamente */

export function useLoadSvgs() {
  const [svgs, setSvgs] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSvgs = async () => {
      const modules = import.meta.glob("../assets/images/*.svg");
      const loadedSvgs = {};

      for (const fullPath in modules) {
        const mod = await modules[fullPath]();
        const fileName = fullPath.split("/").pop(); // Obtener solo el nombre del archivo
        const key = `../assets/images/${fileName}`; // Construir la clave como en ContentCard.jsx
        loadedSvgs[key] = mod.default;
      }

      setSvgs(loadedSvgs);
      setIsLoading(false);
    };
    loadSvgs();
  }, []);

  return { svgs, isLoading };
}
