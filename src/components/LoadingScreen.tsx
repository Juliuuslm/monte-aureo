'use client';

import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mínimo 2 segundos de pantalla de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Permitir scroll cuando la carga termina
      document.body.style.overflow = 'visible';
    }, 2000);

    // Bloquear scroll durante la carga
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-600 z-[9999] flex items-center justify-center">
      {/* Overlay con textura */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white">
        {/* Logo animado */}
        <div className="mb-8 animate-pulse">
          <svg
            width="200"
            height="80"
            viewBox="0 0 200 80"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <text
              x="100"
              y="50"
              fontFamily="var(--font-display)"
              fontSize="24"
              fill="currentColor"
              textAnchor="middle"
              className="animate-fade-in"
            >
              MONTE ÁUREO
            </text>
          </svg>
        </div>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl font-light mb-12 opacity-90 animate-fade-in-delay">
          Tu escape perfecto en la naturaleza
        </p>

        {/* Animación de montañas */}
        <div className="relative w-64 h-32 mx-auto mb-8">
          <div className="absolute inset-0 flex items-end justify-center space-x-1">
            {[...Array(7)].map((_, i) => (
              <div
                key={i}
                className="bg-white bg-opacity-30 animate-mountain-grow"
                style={{
                  width: `${12 + i * 4}px`,
                  height: `${20 + i * 8}px`,
                  animationDelay: `${i * 0.2}s`,
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
                }}
              />
            ))}
          </div>
        </div>

        {/* Barra de progreso */}
        <div className="w-48 h-1 bg-white bg-opacity-20 rounded-full mx-auto mb-4 overflow-hidden">
          <div className="h-full bg-white rounded-full animate-loading-bar" />
        </div>

        {/* Texto de carga */}
        <p className="text-sm font-light opacity-80 animate-fade-in-delay-2">
          Preparando tu experiencia...
        </p>
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;