import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen hero-bg relative flex items-center justify-center text-white">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.span
          className="block text-lg md:text-xl font-body font-medium tracking-widest mb-6 opacity-95"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          CABAÑAS
        </motion.span>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-normal tracking-wider mb-8 whitespace-nowrap"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          MONTE ÁUREO
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl lg:text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed opacity-95"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.95, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Tu escape perfecto en la naturaleza
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
            className="inline-block btn-cta text-lg px-12 py-4"
          >
            Descubre nuestras villas
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.span
          className="block text-sm font-light tracking-wide mb-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Desliza
        </motion.span>
        <motion.div
          className="w-px h-8 bg-white mx-auto opacity-70"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;