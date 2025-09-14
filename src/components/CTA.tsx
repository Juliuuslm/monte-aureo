'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-20 cta-bg relative">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <motion.h2
          className="font-display text-4xl md:text-6xl mb-6 uppercase tracking-wide"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          TU ESCAPE PERFECTO EN LA NATURALEZA
        </motion.h2>
        <motion.p
          className="text-xl md:text-2xl font-light mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Reserva ahora y vive una experiencia inolvidable
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="https://wa.me/524421234567"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-xl px-12 py-4 inline-block"
          >
            RESERVAR AHORA
          </Link>
        </motion.div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CTA;