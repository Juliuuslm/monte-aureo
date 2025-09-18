import Image from 'next/image';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const stats = [
    { number: 13, label: 'Años de experiencia' },
    { number: 5, label: 'Cabañas únicas' },
    { number: 20, label: 'Huéspedes max' },
  ];

  return (
    <section id="quienes-somos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">Nuestra historia</span>
          <h2 className="section-title max-w-4xl mx-auto">
            Monte Áureo en la Sierra Gorda de Querétaro
          </h2>
        </AnimatedSection>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <AnimatedSection direction="left" delay={0.2}>
              <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed mb-12">
                <p>
                  En el corazón de la Reserva de la Biosfera Sierra Gorda, Monte Áureo
                  nació de la visión de crear un espacio donde las familias pudieran
                  reconectar entre ellas y con la naturaleza. Durante 13 años, hemos
                  sido el hogar temporal de miles de familias que buscan pausar y respirar.
                </p>
                <p>
                  Cada una de nuestras cinco cabañas tiene su propia personalidad, pero todas
                  comparten el mismo espíritu: comodidad auténtica sin lujos innecesarios,
                  rodeadas de los sonidos del bosque y la vista de montañas que cambian
                  de color con las horas del día.
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
                  <div className="text-xs md:text-sm font-semibold text-gray-600 tracking-wide">
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