'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  action?: () => void;
}

const MobileNavBar = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems: NavItem[] = [
    {
      id: 'inicio',
      label: 'Inicio',
      icon: '🏠',
      href: '#inicio'
    },
    {
      id: 'villas',
      label: 'Cabañas',
      icon: '🏡',
      href: '#villas'
    },
    {
      id: 'actividades',
      label: 'Actividades',
      icon: '🌲',
      href: '#actividades'
    },
    {
      id: 'ubicacion',
      label: 'Ubicación',
      icon: '📍',
      href: '#ubicacion'
    },
    {
      id: 'reservar',
      label: 'Reservar',
      icon: '📅',
      href: 'https://wa.me/524421234567',
      action: () => {
        window.open('https://wa.me/524421234567', '_blank');
      }
    }
  ];

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Update active section based on scroll position
  useEffect(() => {
    const sections = navItems.filter(item => item.href.startsWith('#')).map(item => item.id);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (item.action) {
      item.action();
    } else if (item.href.startsWith('#')) {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg"
      initial={{ y: 100 }}
      animate={{ y: isVisible ? 0 : 100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex items-center justify-around py-2 px-2 safe-area-pb">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => handleNavClick(item)}
            className={`flex flex-col items-center justify-center min-w-0 px-2 py-2 rounded-lg transition-all duration-200 ${
              activeSection === item.id
                ? 'text-green-600 bg-green-50'
                : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
            }`}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="text-lg mb-1">{item.icon}</span>
            <span className="text-xs font-medium leading-tight">{item.label}</span>

            {/* Active indicator */}
            {activeSection === item.id && (
              <motion.div
                className="absolute -top-0.5 left-1/2 w-6 h-0.5 bg-green-600 rounded-full"
                layoutId="activeIndicator"
                initial={false}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ x: '-50%' }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* iPhone safe area bottom padding */}
      <div className="h-safe-area-inset-bottom bg-white/95 backdrop-blur-sm" />
    </motion.nav>
  );
};

export default MobileNavBar;