import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 cta-bg relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h2 className="font-display text-4xl md:text-6xl mb-6 uppercase tracking-wide">
          TU ESCAPE PERFECTO EN LA NATURALEZA
        </h2>
        <p className="text-xl md:text-2xl font-light mb-12">
          Reserva ahora y vive una experiencia inolvidable
        </p>
        <Link
          href="https://wa.me/524421234567"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta text-xl px-12 py-4 inline-block"
        >
          RESERVAR AHORA
        </Link>
      </div>
    </section>
  );
};

export default CTA;