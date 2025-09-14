import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const stats = [
    { number: 13, label: 'AÑOS DE EXPERIENCIA' },
    { number: 10, label: 'VILLAS DISPONIBLES' },
    { number: 5, label: 'TIPOS DE CABAÑAS' },
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">¿QUIÉNES SOMOS?</span>
          <h2 className="section-title max-w-4xl mx-auto">
            CABAÑAS PREMIUM UBICADAS EN LA BIOSFERA SIERRA GORDA
          </h2>
        </AnimatedSection>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
                <p>
                  Somos un refugio exclusivo en el corazón de la Sierra Gorda de Querétaro,
                  donde la naturaleza y el confort se encuentran para crear experiencias inolvidables.
                  Desde hace más de una década, hemos acogido a viajeros que buscan desconectar
                  del ritmo urbano y reconectar con lo esencial.
                </p>
                <p>
                  Nuestras cabañas están diseñadas para integrarse armoniosamente con el entorno natural,
                  ofreciendo todas las comodidades modernas mientras preservamos la autenticidad
                  del paisaje serrano.
                </p>
              </div>
            </AnimatedSection>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <AnimatedSection
                  key={index}
                  className="text-center"
                  delay={0.4 + index * 0.1}
                  direction="up"
                >
                  <AnimatedCounter
                    value={stat.number}
                    className="text-5xl md:text-6xl font-display text-green-600 mb-3 font-normal"
                  />
                  <div className="text-xs md:text-sm font-semibold text-gray-600 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Map Image */}
          <AnimatedSection className="relative" direction="right" delay={0.3}>
            <Image
              src="/images/mapa-sierra-gorda.jpg"
              alt="Mapa de ubicación en Sierra Gorda"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              priority
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;