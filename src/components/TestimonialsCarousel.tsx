'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
  date: string;
  villa: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María & Carlos Rodríguez',
    location: 'Ciudad de México',
    rating: 5,
    comment: 'Nuestra luna de miel en Villa Colibrí fue mágica. El silencio del bosque, la chimenea por las noches y el servicio cálido hicieron todo perfecto. Ya reservamos para nuestro aniversario.',
    avatar: '/images/testimonials/maria-carlos.jpg',
    date: 'Marzo 2024',
    villa: 'Villa Colibrí'
  },
  {
    id: '2',
    name: 'Familia Hernández',
    location: 'Querétaro',
    rating: 5,
    comment: 'Los niños no querían irse. Villa Venado tiene todo lo que necesitas para unas vacaciones familiares sin estrés. La cocina equipada nos permitió hacer nuestras comidas favoritas.',
    avatar: '/images/testimonials/familia-hernandez.jpg',
    date: 'Febrero 2024',
    villa: 'Villa Venado'
  },
  {
    id: '3',
    name: 'Ana & Roberto',
    location: 'Guadalajara',
    rating: 5,
    comment: 'Llevábamos años buscando un lugar así. La Casita nos transportó en el tiempo, pero con todas las comodidades modernas. El desayuno con vista a las montañas no tiene precio.',
    avatar: '/images/testimonials/ana-roberto.jpg',
    date: 'Enero 2024',
    villa: 'La Casita'
  },
  {
    id: '4',
    name: 'Grupo Empresarial Torres',
    location: 'Monterrey',
    rating: 5,
    comment: 'Vinimos en grupo de 8 personas a Villa Oso. El espacio es perfecto para reuniones de trabajo y también para descansar. La conexión WiFi funcionó excelente para nuestras videoconferencias.',
    avatar: '/images/testimonials/grupo-torres.jpg',
    date: 'Diciembre 2023',
    villa: 'Villa Oso'
  },
  {
    id: '5',
    name: 'Laura & David',
    location: 'Puebla',
    rating: 5,
    comment: 'El jacuzzi privado de Villa Mariposa bajo las estrellas es una experiencia única. Todo está pensado para el romance y la tranquilidad. Definitivamente regresaremos.',
    avatar: '/images/testimonials/laura-david.jpg',
    date: 'Noviembre 2023',
    villa: 'Villa Mariposa'
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Lo que dicen nuestros huéspedes</span>
          <h2 className="section-title">
            Familias felices que regresan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Más de 1,200 familias han encontrado su lugar especial en Monte Áureo
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-16 translate-x-16 opacity-50" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full translate-y-12 -translate-x-12 opacity-30" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Avatar and info */}
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto md:mx-0">
                      {testimonials[currentIndex].name.split(' ')[0][0]}{testimonials[currentIndex].name.split(' ')[1] ? testimonials[currentIndex].name.split(' ')[1][0] : ''}
                    </div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-gray-500 text-sm mb-2">
                      {testimonials[currentIndex].location}
                    </p>
                    <div className="flex justify-center md:justify-start text-lg mb-2">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {testimonials[currentIndex].villa}
                    </span>
                  </div>

                  {/* Comment */}
                  <div className="flex-1">
                    <div className="text-4xl text-green-200 mb-4">&ldquo;</div>
                    <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 italic">
                      {testimonials[currentIndex].comment}
                    </blockquote>
                    <div className="text-sm text-gray-500">
                      {testimonials[currentIndex].date}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors duration-200 hover:shadow-xl"
            aria-label="Testimonio anterior"
          >
            ←
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-gray-600 hover:text-green-600 transition-colors duration-200 hover:shadow-xl"
            aria-label="Siguiente testimonio"
          >
            →
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-green-600 scale-125'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Calificación promedio</div>
            <div className="flex justify-center mt-2 text-yellow-400">
              {renderStars(5)}
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
            <div className="text-gray-600">Familias atendidas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-gray-600">Huéspedes que regresan</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;