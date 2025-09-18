'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

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
        <AnimatedSection className="text-center mb-16">
          <span className="section-label">Cómo llegar</span>
          <h2 className="section-title">
            Encuéntranos en Sierra Gorda
          </h2>
        </AnimatedSection>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Location Info */}
          <AnimatedSection direction="left" delay={0.2}>
            <motion.h3
              className="font-display text-2xl text-gray-800 mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Cómo llegar
            </motion.h3>
            <motion.p
              className="text-gray-700 text-lg leading-relaxed mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Estamos ubicados en el corazón de la Reserva de la Biosfera Sierra Gorda,
              a solo 2.5 horas de la Ciudad de México y 1.5 horas de Querétaro capital.
            </motion.p>

            <div className="space-y-8 mb-12">
              {locationDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <strong className="block text-gray-800 font-semibold mb-2">
                    {detail.label}
                  </strong>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {detail.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="https://maps.google.com/?q=21.2173,-99.4731"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                VER EN GOOGLE MAPS
              </Link>
            </motion.div>
          </AnimatedSection>

          {/* Map */}
          <AnimatedSection direction="right" delay={0.4}>
            <motion.div
              className="h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                transition: { duration: 0.3 }
              }}
            >
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
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Location;