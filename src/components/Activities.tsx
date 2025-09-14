'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const Activities = () => {
  const activities = [
    {
      image: '/images/te-matutino.jpg',
      title: 'Té matutino',
      alt: 'Té por las mañanas'
    },
    {
      image: '/images/momentos-familia.jpg',
      title: 'Momentos familiares',
      alt: 'Momentos en familia'
    },
    {
      image: '/images/noches-fogata.jpg',
      title: 'Noches mágicas',
      alt: 'Noches de fogata'
    },
    {
      image: '/images/rio-ayutla.jpg',
      title: 'Río Ayutla',
      alt: 'Río Ayutla'
    },
    {
      image: '/images/manantiales-conca.jpg',
      title: 'Manantiales',
      alt: 'Manantiales de Concá'
    },
    {
      image: '/images/cascada-chuveje.jpg',
      title: 'Cascada El Chuveje',
      alt: 'Cascada El Chuveje'
    }
  ];

  const highlights = [
    'TÉ POR LAS MAÑANAS',
    'MOMENTOS EN FAMILIA',
    'NOCHES INCREÍBLES',
    'ADJUNTAS DEL RÍO AYUTLA',
    'MANANTIALES DE CONCÁ',
    'CASCADA "EL CHUVEJE"'
  ];

  return (
    <section id="actividades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl text-gray-800 uppercase tracking-wide mb-8">
            ACTIVIDADES
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed">
            DISFRUTA DE{' '}
            {highlights.map((highlight, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-green-600 font-semibold">{highlight}</span>
                {index < highlights.length - 1 && (
                  <span>{index === highlights.length - 2 ? ' Y ' : ', '}</span>
                )}
              </motion.span>
            ))}
          </p>
        </AnimatedSection>

        {/* Activities Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              className="bg-white p-3 shadow-lg hover:shadow-xl"
              initial={{
                opacity: 0,
                y: 50,
                rotate: index % 2 === 0 ? (index % 3 === 0 ? -2 : 2) : index % 3 === 0 ? -3 : 3
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: index % 2 === 0 ? (index % 3 === 0 ? -2 : 2) : index % 3 === 0 ? -3 : 3
              }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotate: 0,
                transition: { duration: 0.3 }
              }}
            >
              <div className="aspect-[4/3] relative mb-4 overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.alt}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-gray-800 font-medium">
                {activity.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;