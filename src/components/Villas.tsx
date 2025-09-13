'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Villa {
  id: string;
  number: string;
  name: string;
  description: string;
  features: string[];
  images: string[];
}

const villasData: Villa[] = [
  {
    id: 'colibri',
    number: '1',
    name: 'VILLA COLIBRÍ',
    description: 'Perfecta para parejas que buscan intimidad y romance. Tres cabañas equipadas con todas las comodidades para una estancia inolvidable.',
    features: [
      '👥 Capacidad: 2 personas',
      '🛏️ Cama King Size',
      '🔥 Chimenea',
      '☕ Área de café'
    ],
    images: [
      '/images/villa-colibri-1.jpg',
      '/images/villa-colibri-2.jpg',
      '/images/villa-colibri-3.jpg'
    ]
  },
  {
    id: 'mariposa',
    number: '2',
    name: 'VILLA MARIPOSA',
    description: 'Diseñada para parejas, combina elegancia y naturaleza. Tres cabañas con vistas espectaculares al bosque.',
    features: [
      '👥 Capacidad: 2 personas',
      '🌿 Vista al bosque',
      '🛁 Jacuzzi privado',
      '🍷 Terraza panorámica'
    ],
    images: [
      '/images/villa-mariposa-1.jpg',
      '/images/villa-mariposa-2.jpg',
      '/images/villa-mariposa-3.jpg'
    ]
  },
  {
    id: 'venado',
    number: '3',
    name: 'VILLA VENADO',
    description: 'Ideal para familias pequeñas. Tres cabañas familiares con capacidad para 4 personas cada una.',
    features: [
      '👨‍👩‍👧‍👦 Capacidad: 4 personas',
      '🛏️ 2 recámaras',
      '🍳 Cocina equipada',
      '🎮 Área de juegos'
    ],
    images: [
      '/images/villa-venado-1.jpg',
      '/images/villa-venado-2.jpg',
      '/images/villa-venado-3.jpg'
    ]
  },
  {
    id: 'oso',
    number: '4',
    name: 'VILLA OSO',
    description: 'Perfecta para grupos familiares grandes. Tres cabañas espaciosas con capacidad para 6 personas.',
    features: [
      '👨‍👩‍👧‍👦 Capacidad: 6 personas',
      '🛏️ 3 recámaras',
      '🔥 Asador exterior',
      '🏞️ Jardín privado'
    ],
    images: [
      '/images/villa-oso-1.jpg',
      '/images/villa-oso-2.jpg',
      '/images/villa-oso-3.jpg'
    ]
  },
  {
    id: 'casita',
    number: '5',
    name: 'LA CASITA',
    description: 'Casa tradicional de adobe de 1927, restaurada con amor para preservar su encanto histórico mientras ofrece comodidades modernas.',
    features: [
      '🏛️ Construcción de 1927',
      '🏡 Adobe tradicional',
      '👨‍👩‍👧‍👦 Capacidad: 8 personas',
      '📚 Biblioteca'
    ],
    images: [
      '/images/la-casita-1.jpg',
      '/images/la-casita-2.jpg',
      '/images/la-casita-3.jpg'
    ]
  }
];

const VillaCarousel = ({ images, villaName }: { images: string[]; villaName: string }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative group">
      <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`${villaName} - Vista ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-150 hover:bg-opacity-80 hover:scale-110 active:scale-95"
            aria-label="Imagen anterior"
          >
            ‹
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-60 text-white w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-150 hover:bg-opacity-80 hover:scale-110 active:scale-95"
            aria-label="Imagen siguiente"
          >
            ›
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-150 hover:scale-125 ${
                  index === currentImage
                    ? 'bg-white shadow-lg'
                    : 'bg-white bg-opacity-60 hover:bg-opacity-80'
                }`}
                aria-label={`Ver imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const VillaCard = ({ villa, isReversed }: { villa: Villa; isReversed: boolean }) => {
  return (
    <article className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
      isReversed ? 'lg:grid-flow-col-dense' : ''
    }`}>
      {/* Content */}
      <div className={isReversed ? 'lg:col-start-2' : ''}>
        <span className="text-7xl md:text-8xl font-display text-green-600 block mb-4 font-bold opacity-80">
          {villa.number}
        </span>
        <h3 className="font-display text-3xl md:text-4xl text-gray-800 mb-6">
          {villa.name}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {villa.description}
        </p>

        <ul className="space-y-3 mb-8">
          {villa.features.map((feature, index) => (
            <li key={index} className="text-gray-700 flex items-center">
              <span className="mr-3">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="https://wa.me/524421234567"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          VER DISPONIBILIDAD
        </Link>
      </div>

      {/* Images */}
      <div className={isReversed ? 'lg:col-start-1' : ''}>
        <VillaCarousel images={villa.images} villaName={villa.name} />
      </div>
    </article>
  );
};

const Villas = () => {
  return (
    <section id="villas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="section-label">NUESTRAS CABAÑAS</span>
          <h2 className="section-title">
            CONTAMOS CON 5 VILLAS PARA SU DESCANSO
          </h2>
        </div>

        {/* Villas */}
        <div>
          {villasData.map((villa, index) => (
            <VillaCard
              key={villa.id}
              villa={villa}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Villas;