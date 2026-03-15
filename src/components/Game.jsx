import Phaser from "phaser";
import { useEffect, useRef } from "react";

export default function Game() {
  const gameContainer = useRef(null); // Referencia al contenedor del juego
  const phaserGame = useRef(null); // Referencia al juego de Phaser

  useEffect(() => {
    // Configuración del juego de Phaser
    const config = {
      type: Phaser.AUTO,
      width: gameContainer.current?.offsetWidth || 800,
      height: gameContainer.current?.offsetHeight || 600,
      parent: gameContainer.current, // Renderizar dentro del contenedor
      physics: {
        default: "arcade",
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    // Inicializar el juego de Phaser
    phaserGame.current = new Phaser.Game(config);

    // Limpiar el juego al desmontar el componente
    return () => {
      if (phaserGame.current) {
        phaserGame.current.destroy(true);
      }
    };
  }, []);

  // Cargar recursos
  function preload() {
    this.load.image("sky", "https://labs.phaser.io/assets/skies/space3.png");
    this.load.image("logo", "https://labs.phaser.io/assets/sprites/phaser3-logo.png");
    this.load.atlas("flares", "https://labs.phaser.io/assets/particles/flares.png", "https://labs.phaser.io/assets/particles/flares.json");
  }

  // Crear la escena
  function create() {
    // Fondo
    this.add.image(400, 300, "sky");

    // Crear el emisor de partículas
    const emitter = this.add.particles(400, 300, "flares", {
      frame: "red",
      angle: { min: -30, max: 30 },
      speed: { min: 100, max: 200 },
      scale: { start: 1, end: 0 },
      lifespan: 2000,
      blendMode: "ADD",
    });

    // Crear el logo
    const logo = this.physics.add.image(400, 100, "logo");

    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);

    // Hacer que las partículas sigan al logo
    emitter.startFollow(logo);

    // Agregar interacción al logo
    logo.setInteractive();
    logo.on("pointerdown", () => {
      logo.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));
    });
  }

  // Actualizar la escena
  function update() {
    // Lógica del juego
  }

  return (
    <div
      ref={gameContainer}
      className="game-container bg-zinc-700 rounded-lg shadow-md"
    >
      {/* El juego de Phaser se renderizará aquí */}
    </div>
  );
}
