import Link from 'next/link';

const Location = () => {
  const locationDetails = [
    {
      label: 'Dirección:',
      content: 'Km 45 Carretera Jalpan - Xilitla\nSierra Gorda, Querétaro, México'
    },
    {
      label: 'Coordenadas GPS:',
      content: '21.2173° N, 99.4731° W'
    },
    {
      label: 'Desde CDMX:',
      content: '2.5 horas por autopista'
    },
    {
      label: 'Desde Querétaro:',
      content: '1.5 horas por carretera federal'
    }
  ];

  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">UBICACIÓN</span>
          <h2 className="section-title">
            ENCUÉNTRANOS EN LA SIERRA GORDA
          </h2>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Location Info */}
          <div>
            <h3 className="font-display text-2xl text-gray-800 mb-6 uppercase">
              Cómo llegar
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              Estamos ubicados en el corazón de la Reserva de la Biosfera Sierra Gorda,
              a solo 2.5 horas de la Ciudad de México y 1.5 horas de Querétaro capital.
            </p>

            <div className="space-y-8 mb-12">
              {locationDetails.map((detail, index) => (
                <div key={index}>
                  <strong className="block text-gray-800 font-semibold mb-2">
                    {detail.label}
                  </strong>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {detail.content}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="https://maps.google.com/?q=21.2173,-99.4731"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              VER EN GOOGLE MAPS
            </Link>
          </div>

          {/* Map */}
          <div className="h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14812.543!2d-99.4731!3d21.2173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEzJzAyLjMiTiA5OcKwMjgnMjMuMiJX!5e0!3m2!1ses!2smx!4v1620000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Cabañas Monte Áureo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;