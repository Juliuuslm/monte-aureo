'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="h-screen md:min-h-screen hero-bg relative flex items-center justify-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto pt-16 md:pt-0">
        <motion.span
          className="block text-base md:text-lg lg:text-xl font-body font-medium tracking-wide mb-4 md:mb-6 opacity-95"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cabañas familiares
        </motion.span>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-normal tracking-wide mb-6 md:mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Monte Áureo
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl xl:text-2xl font-light mb-8 md:mb-12 max-w-2xl md:max-w-3xl mx-auto leading-relaxed opacity-95 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Desconecta rodeado de naturaleza auténtica en Sierra Gorda
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#villas"
            className="inline-block btn-cta text-base md:text-lg px-8 md:px-12 py-3 md:py-4"
          >
            Ver nuestras cabañas
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.span
          className="block text-sm font-light tracking-wide mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Explora
        </motion.span>
        <motion.div
          className="w-px h-8 bg-white mx-auto opacity-70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>

      {/* Mobile content preview */}
      <motion.div
        className="md:hidden absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-xs text-white/90">
          Desliza para ver más
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;