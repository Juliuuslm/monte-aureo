'use client';

import { motion } from 'framer-motion';

interface TrustBadge {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  type: 'certification' | 'review' | 'guarantee' | 'security';
}

const trustBadges: TrustBadge[] = [
  {
    id: 'google-reviews',
    icon: '⭐',
    title: '4.9/5 en Google',
    subtitle: '127 reseñas verificadas',
    type: 'review'
  },
  {
    id: 'biosfera',
    icon: '🌿',
    title: 'Reserva de la Biosfera',
    subtitle: 'Sierra Gorda UNESCO',
    type: 'certification'
  },
  {
    id: 'security',
    icon: '🔒',
    title: 'Pago Seguro',
    subtitle: 'SSL & Privacidad garantizada',
    type: 'security'
  },
  {
    id: 'experience',
    icon: '🏆',
    title: '13 Años',
    subtitle: 'De experiencia hotelera',
    type: 'certification'
  },
  {
    id: 'response',
    icon: '⚡',
    title: 'Respuesta < 2h',
    subtitle: 'Atención personalizada',
    type: 'guarantee'
  },
  {
    id: 'cancellation',
    icon: '✅',
    title: 'Cancelación Flexible',
    subtitle: 'Sin penalización 48h antes',
    type: 'guarantee'
  }
];

interface TrustBadgesProps {
  variant?: 'horizontal' | 'grid' | 'minimal';
  showTitle?: boolean;
  className?: string;
}

const TrustBadges = ({
  variant = 'horizontal',
  showTitle = true,
  className = ''
}: TrustBadgesProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'grid':
        return 'grid grid-cols-2 md:grid-cols-3 gap-4';
      case 'minimal':
        return 'flex flex-wrap justify-center gap-4';
      default:
        return 'flex flex-wrap justify-center gap-6';
    }
  };

  const getBadgeStyles = () => {
    switch (variant) {
      case 'minimal':
        return 'flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full text-sm';
      default:
        return 'bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200 text-center min-w-[140px]';
    }
  };

  return (
    <div className={`${className}`}>
      {showTitle && variant !== 'minimal' && (
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Confianza y seguridad garantizada
          </h3>
          <p className="text-gray-600">
            Comprometidos con tu tranquilidad y satisfacción
          </p>
        </motion.div>
      )}

      <div className={getVariantStyles()}>
        {trustBadges.map((badge, index) => (
          <motion.div
            key={badge.id}
            className={getBadgeStyles()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut"
            }}
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {variant === 'minimal' ? (
              <>
                <span className="text-lg">{badge.icon}</span>
                <span className="font-medium text-gray-700">{badge.title}</span>
              </>
            ) : (
              <>
                <div className="text-3xl mb-3">{badge.icon}</div>
                <h4 className="font-semibold text-gray-800 text-sm mb-1">
                  {badge.title}
                </h4>
                <p className="text-gray-600 text-xs">
                  {badge.subtitle}
                </p>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Additional trust elements for default variant */}
      {variant === 'horizontal' && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>Verificado por Google</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>SSL Certificado</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              <span>Turismo Sustentable</span>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TrustBadges;