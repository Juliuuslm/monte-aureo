'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.6, 0.8]);
  const floatingParticlesY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="h-screen md:min-h-screen relative flex items-center justify-center text-white overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 hero-bg"
        style={{
          y: backgroundY,
          scale: 1.1 // Slightly larger to prevent gaps during scroll
        }}
      />

      {/* Dynamic Overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content with Parallax */}
      <motion.div
        className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto pt-16 md:pt-0"
        style={{ y: textY }}
      >
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
      </motion.div>

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

      {/* Floating Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: floatingParticlesY }}
      >
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Floating leaves/elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{ y: floatingParticlesY }}
      >
        {['🍃', '🌿', '🦋'].map((emoji, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20 text-xl"
            style={{
              left: `${20 + i * 30}%`,
              top: `${60 + i * 10}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, 20, -10, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          >
            {emoji}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;