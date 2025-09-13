import Link from 'next/link';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen hero-bg relative flex items-center justify-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="block text-lg md:text-xl font-body font-medium tracking-widest mb-6 opacity-95">
          CABAÑAS
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-normal tracking-wider mb-8 whitespace-nowrap">
          MONTE ÁUREO
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-95">
          Tu escape perfecto en la naturaleza
        </p>
        <Link
          href="#villas"
          className="inline-block btn-cta text-lg px-12 py-4 animate-pulse hover:animate-none"
        >
          Descubre nuestras villas
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <span className="block text-sm font-light tracking-wide mb-2">Desliza</span>
        <div className="w-px h-8 bg-white mx-auto opacity-70 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;