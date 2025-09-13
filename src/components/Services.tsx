const Services = () => {
  const services = [
    {
      icon: '🏡',
      title: 'Cabañas Equipadas',
      description: 'Todas nuestras cabañas cuentan con cocina completa, sala, comedor y todas las comodidades del hogar.'
    },
    {
      icon: '🔥',
      title: 'Chimenea y Fogata',
      description: 'Disfruta de noches cálidas junto a la chimenea o una fogata bajo las estrellas con tu familia.'
    },
    {
      icon: '🏊',
      title: 'Alberca',
      description: 'Refréscate en nuestra alberca con vista panorámica a la Sierra Gorda.'
    },
    {
      icon: '🚗',
      title: 'Estacionamiento',
      description: 'Amplio estacionamiento privado y seguro para todos nuestros huéspedes.'
    },
    {
      icon: '📶',
      title: 'WiFi Gratuito',
      description: 'Mantente conectado con internet de alta velocidad en todas las áreas.'
    },
    {
      icon: '🌳',
      title: 'Senderos Naturales',
      description: 'Explora senderos privados para caminatas y observación de la naturaleza.'
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="section-label">SERVICIOS</span>
          <h2 className="section-title">
            TODO LO QUE NECESITAS PARA TU ESTANCIA
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6">
                {service.icon}
              </div>
              <h3 className="font-body text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;