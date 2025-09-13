'use client';

import { useState } from 'react';
import Link from 'next/link';

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
          <Link href="/" className="flex items-center">
            <svg
              width="200"
              height="40"
              viewBox="0 0 200 40"
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600"
            >
              <text
                x="10"
                y="28"
                fontFamily="var(--font-display)"
                fontSize="18"
                fill="currentColor"
              >
                MONTE ÁUREO
              </text>
            </svg>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 transition-colors duration-200 font-medium"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="https://wa.me/524421234567"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary relative z-10"
          >
            RESERVAR
          </Link>

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
              RESERVAR
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;