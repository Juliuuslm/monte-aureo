import Script from 'next/script';

// Structured data for the main lodging business
const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "@id": "https://monteaureo.com.mx/#organization",
  "name": "Monte Áureo",
  "alternateName": "Cabañas Monte Áureo",
  "description": "Cabañas familiares en la Reserva de la Biosfera Sierra Gorda. 5 villas únicas con 13 años de experiencia ofreciendo experiencias auténticas en la naturaleza.",
  "url": "https://monteaureo.com.mx",
  "logo": "https://monteaureo.com.mx/monte-aureo-logo.png",
  "image": [
    "https://monteaureo.com.mx/images/hero-background.jpg",
    "https://monteaureo.com.mx/images/villa-colibri-1.jpg",
    "https://monteaureo.com.mx/images/villa-mariposa-1.jpg",
    "https://monteaureo.com.mx/images/villa-venado-1.jpg"
  ],
  "telephone": "+52-442-123-4567",
  "email": "info@monteaureo.com.mx",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Km 45 Carretera Jalpan - Xilitla",
    "addressLocality": "Sierra Gorda",
    "addressRegion": "Querétaro",
    "postalCode": "76345",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.2173",
    "longitude": "-99.4731"
  },
  "openingHours": "Mo-Su 00:00-23:59",
  "priceRange": "$$",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "worstRating": "1"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "amenityFeature": [
    {
      "@type": "LocationFeatureSpecification",
      "name": "WiFi",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Parking",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Swimming Pool",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Fireplace",
      "value": true
    },
    {
      "@type": "LocationFeatureSpecification",
      "name": "Kitchen",
      "value": true
    }
  ],
  "numberOfRooms": "5",
  "sameAs": [
    "https://www.facebook.com/monteaureo",
    "https://www.instagram.com/monteaureo",
    "https://www.tiktok.com/@monteaureo"
  ],
  "containsPlace": [
    {
      "@type": "Accommodation",
      "name": "Villa Colibrí",
      "description": "Cabaña íntima para parejas con chimenea y vistas al bosque",
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": 2
      }
    },
    {
      "@type": "Accommodation",
      "name": "Villa Mariposa",
      "description": "Cabaña para parejas con jacuzzi privado y terraza panorámica",
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": 2
      }
    },
    {
      "@type": "Accommodation",
      "name": "Villa Venado",
      "description": "Cabaña familiar con 2 recámaras y jardín para niños",
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": 4
      }
    },
    {
      "@type": "Accommodation",
      "name": "Villa Oso",
      "description": "Cabaña amplia para grupos familiares con 3 recámaras",
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": 6
      }
    },
    {
      "@type": "Accommodation",
      "name": "La Casita",
      "description": "Casa histórica de adobe de 1927 restaurada con cariño",
      "occupancy": {
        "@type": "QuantitativeValue",
        "maxValue": 8
      }
    }
  ]
};

// Structured data for local business
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "Monte Áureo - Cabañas Sierra Gorda",
  "description": "Experiencia de turismo sustentable en la Reserva de la Biosfera Sierra Gorda",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sierra Gorda",
    "addressRegion": "Querétaro",
    "addressCountry": "MX"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.2173",
    "longitude": "-99.4731"
  },
  "touristType": [
    "Families",
    "Couples",
    "Nature Lovers",
    "Eco Tourists"
  ]
};

// Breadcrumb structured data
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://monteaureo.com.mx"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Cabañas",
      "item": "https://monteaureo.com.mx#villas"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Actividades",
      "item": "https://monteaureo.com.mx#actividades"
    }
  ]
};

// FAQ structured data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Dónde está ubicado Monte Áureo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monte Áureo está ubicado en el Km 45 de la Carretera Jalpan - Xilitla, en la Reserva de la Biosfera Sierra Gorda, Querétaro, México."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas cabañas tienen disponibles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tenemos 5 villas únicas: Villa Colibrí (2 personas), Villa Mariposa (2 personas), Villa Venado (4 personas), Villa Oso (6 personas) y La Casita (8 personas)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué servicios incluyen las cabañas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Todas nuestras cabañas incluyen: cocina equipada, WiFi gratuito, estacionamiento, chimenea, acceso a alberca y senderos naturales privados."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo puedo hacer una reservación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puedes consultar disponibilidad y hacer reservaciones a través de WhatsApp al +52 442 123 4567 o usando nuestro formulario de consulta en el sitio web."
      }
    }
  ]
};

const StructuredData = () => {
  return (
    <>
      <Script
        id="lodging-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(lodgingBusinessSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
};

export default StructuredData;