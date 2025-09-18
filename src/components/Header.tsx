'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#quienes-somos', label: 'Nosotros' },
    { href: '#villas', label: 'Villas' },
    { href: '#actividades', label: 'Actividades' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="flex items-center">
              <Image
                src="/monte-aureo-logo.png"
                alt="Monte Áureo - Tu escape perfecto en la naturaleza"
                width={180}
                height={60}
                priority
                className="h-12 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.ul
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA Button */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="https://wa.me/524421234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block btn-primary relative z-10"
            >
              Consultar
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1 w-7 h-6 relative z-20"
            aria-label="Abrir menú"
          >
            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`} />
            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`} />
            <span className={`block h-0.5 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 top-20 bg-white shadow-lg transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center py-12 space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xl text-gray-700 hover:text-green-600 transition-colors duration-200"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://wa.me/524421234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
              onClick={closeMenu}
            >
              Consultar
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;