'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Para evitar hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const hideLoadingScreen = useCallback(() => {
    setIsLoading(false);
    document.body.style.overflow = 'visible';
  }, []);

  useEffect(() => {
    // Bloquear scroll durante la carga
    document.body.style.overflow = 'hidden';

    // Timer de seguridad - máximo 5 segundos
    const maxTimer = setTimeout(() => {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Loading screen timeout - forcing hide');
      }
      hideLoadingScreen();
    }, 5000);

    // Timer mínimo - al menos 1.5 segundos + carga de imagen
    const minTimer = setTimeout(() => {
      if (isImageLoaded) {
        hideLoadingScreen();
      }
    }, 1500);

    // Escape manual - presionar cualquier tecla después de 3 segundos
    const escapeTimer = setTimeout(() => {
      const handleEscape = () => {
        hideLoadingScreen();
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('click', handleEscape);
      };

      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleEscape);

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('click', handleEscape);
      };
    }, 3000);

    return () => {
      clearTimeout(maxTimer);
      clearTimeout(minTimer);
      clearTimeout(escapeTimer);
      document.body.style.overflow = 'visible';
    };
  }, [isImageLoaded, hideLoadingScreen]);

  // Verificar cuando la imagen se carga
  useEffect(() => {
    if (isImageLoaded && mounted) {
      const timer = setTimeout(() => {
        hideLoadingScreen();
      }, 800); // Pequeño delay después de cargar imagen

      return () => clearTimeout(timer);
    }
  }, [isImageLoaded, mounted, hideLoadingScreen]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-green-900 via-green-700 to-green-600 z-[9999] flex items-center justify-center">
      {/* Overlay con textura */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      {/* Skip button - aparece después de 3 segundos */}
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white text-sm z-20 transition-opacity duration-300 opacity-0 animate-fade-in-delay-2"
        onClick={hideLoadingScreen}
        aria-label="Saltar pantalla de carga"
      >
        Saltar ✕
      </button>

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white">
        {/* Logo animado */}
        <div className="mb-8 animate-pulse">
          <div className="relative">
            <Image
              src="/monte-aureo-logo.png"
              alt="Monte Áureo"
              width={250}
              height={80}
              priority
              className="h-16 w-auto mx-auto drop-shadow-lg animate-fade-in"
              style={{
                filter: 'brightness(1.2) contrast(1.3) drop-shadow(0 0 10px rgba(255,255,255,0.3))'
              }}
              onLoad={() => setIsImageLoaded(true)}
              onError={() => {
                if (process.env.NODE_ENV === 'development') {
                  console.error('Logo failed to load');
                }
                setIsImageLoaded(true); // Continuar aunque falle la imagen
              }}
            />
          </div>
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

      {/* Partículas flotantes - solo después de montarse */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => {
            // Generar valores consistentes basados en el índice para evitar hydration mismatch
            const left = (i * 5.26) % 100; // Distribución pseudo-aleatoria
            const top = (i * 7.89) % 100;
            const delay = (i * 0.15) % 3;
            const duration = 3 + (i % 3);

            return (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-float"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;