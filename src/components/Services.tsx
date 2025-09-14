'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

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
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">SERVICIOS</span>
          <h2 className="section-title">
            TODO LO QUE NECESITAS PARA TU ESTANCIA
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="text-center p-8 bg-gray-50 rounded-xl cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.25, 0.25, 0.75]
              }}
              whileHover={{
                y: -8,
                backgroundColor: '#ffffff',
                scale: 1.02,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="text-5xl mb-6"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  bounce: 0.4
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.3 }
                }}
              >
                {service.icon}
              </motion.div>
              <motion.h3
                className="font-body text-xl font-semibold mb-4 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;