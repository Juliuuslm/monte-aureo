'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingActivity {
  id: string;
  message: string;
  villa: string;
  timeAgo: string;
  type: 'booking' | 'inquiry' | 'review';
  location: string;
}

const generateRandomActivity = (seed: number): BookingActivity => {
  const activities = [
    {
      message: 'acaba de reservar',
      villa: 'Villa Colibrí',
      location: 'Ciudad de México',
      type: 'booking' as const
    },
    {
      message: 'está consultando disponibilidad para',
      villa: 'Villa Mariposa',
      location: 'Guadalajara',
      type: 'inquiry' as const
    },
    {
      message: 'dejó una reseña de 5 estrellas para',
      villa: 'La Casita',
      location: 'Querétaro',
      type: 'review' as const
    },
    {
      message: 'acaba de reservar',
      villa: 'Villa Venado',
      location: 'Monterrey',
      type: 'booking' as const
    },
    {
      message: 'está viendo',
      villa: 'Villa Oso',
      location: 'Puebla',
      type: 'inquiry' as const
    }
  ];

  const names = [
    'María', 'Carlos', 'Ana', 'Roberto', 'Laura', 'David', 'Sofia', 'Miguel',
    'Carmen', 'José', 'Elena', 'Fernando', 'Patricia', 'Luis', 'Isabel'
  ];

  const timeOptions = ['hace 2 min', 'hace 5 min', 'hace 8 min', 'hace 12 min', 'hace 15 min'];

  // Usar seed para generar valores determinísticos
  const activityIndex = seed % activities.length;
  const nameIndex = (seed * 7) % names.length;
  const timeIndex = (seed * 11) % timeOptions.length;

  const selectedActivity = activities[activityIndex];
  const selectedName = names[nameIndex];
  const selectedTime = timeOptions[timeIndex];

  return {
    id: seed.toString(),
    message: `${selectedName} ${selectedActivity.message}`,
    villa: selectedActivity.villa,
    timeAgo: selectedTime,
    type: selectedActivity.type,
    location: selectedActivity.location
  };
};

const BookingCounter = () => {
  const [currentActivity, setCurrentActivity] = useState<BookingActivity | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activitySeed, setActivitySeed] = useState(0);
  const [stats, setStats] = useState({
    todayBookings: 3,
    weeklyBookings: 12,
    currentViewers: 8
  });

  // Prevenir hydration mismatch
  useEffect(() => {
    setMounted(true);
    setActivitySeed(Date.now() % 1000); // Seed inicial basado en tiempo
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let currentSeed = activitySeed;

    // Show first notification after 3 seconds
    const initialTimer = setTimeout(() => {
      setCurrentActivity(generateRandomActivity(currentSeed));
      setIsVisible(true);
    }, 3000);

    // Then show new notifications every 15-30 seconds
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        currentSeed += 1;
        setActivitySeed(currentSeed);
        setCurrentActivity(generateRandomActivity(currentSeed));
        setIsVisible(true);

        // Update stats occasionally
        if (Math.random() > 0.7) {
          setStats(prev => ({
            todayBookings: prev.todayBookings + (Math.random() > 0.5 ? 1 : 0),
            weeklyBookings: prev.weeklyBookings + (Math.random() > 0.5 ? 1 : 0),
            currentViewers: Math.max(3, prev.currentViewers + Math.floor(Math.random() * 3) - 1)
          }));
        }
      }, 300);
    }, Math.random() * 15000 + 15000); // 15-30 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [mounted, activitySeed]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'booking':
        return '✅';
      case 'review':
        return '⭐';
      default:
        return '👀';
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'booking':
        return 'border-green-200 bg-green-50';
      case 'review':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  return (
    <>
      {/* Floating notification */}
      <AnimatePresence>
        {isVisible && currentActivity && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={`fixed bottom-24 left-6 z-40 max-w-sm p-4 rounded-lg border-2 shadow-lg backdrop-blur-sm ${getColor(currentActivity.type)}`}
          >
            <div className="flex items-start gap-3">
              <span className="text-xl flex-shrink-0">
                {getIcon(currentActivity.type)}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-gray-800 leading-tight">
                  {currentActivity.message}{' '}
                  <span className="font-semibold text-green-700">
                    {currentActivity.villa}
                  </span>
                </p>
                <div className="flex items-center gap-2 mt-1 text-xs text-gray-600">
                  <span>{currentActivity.location}</span>
                  <span>•</span>
                  <span>{currentActivity.timeAgo}</span>
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-400 hover:text-gray-600 flex-shrink-0"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats bar (optional, can be used in other components) */}
      <motion.div
        className="hidden md:flex items-center justify-center gap-8 py-4 bg-white/80 backdrop-blur-sm border-t border-gray-100"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-gray-600">
            <span className="font-semibold text-green-600">{stats.currentViewers}</span> personas viendo
          </span>
        </div>
        <div className="w-px h-4 bg-gray-300"></div>
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-green-600">{stats.todayBookings}</span> reservas hoy
        </div>
        <div className="w-px h-4 bg-gray-300"></div>
        <div className="text-sm text-gray-600">
          <span className="font-semibold text-green-600">{stats.weeklyBookings}</span> esta semana
        </div>
      </motion.div>
    </>
  );
};

export default BookingCounter;