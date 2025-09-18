import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL('https://monteaureo.com.mx'),
  title: {
    default: "Monte Áureo - Cabañas familiares en Sierra Gorda, Querétaro",
    template: "%s | Monte Áureo"
  },
  description: "Cabañas familiares en la Reserva de la Biosfera Sierra Gorda. 5 villas únicas, 13 años de experiencia, 4.9/5 estrellas. Desconecta rodeado de naturaleza auténtica.",
  keywords: [
    "cabañas sierra gorda", "hospedaje querétaro", "turismo sierra gorda",
    "cabañas familiares", "ecoturismo méxico", "biosfera sierra gorda",
    "hospedaje rural", "turismo sustentable", "cabañas jalpan",
    "vacaciones familiares", "retiro naturaleza", "monte aureo"
  ],
  authors: [{ name: "Monte Áureo" }],
  creator: "Monte Áureo",
  publisher: "Monte Áureo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: "Monte Áureo - Cabañas Sierra Gorda",
    title: "Monte Áureo - Cabañas familiares en Sierra Gorda, Querétaro",
    description: "Cabañas familiares en la Reserva de la Biosfera Sierra Gorda. 5 villas únicas, 13 años de experiencia, 4.9/5 estrellas.",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Monte Áureo - Cabañas en Sierra Gorda",
        type: "image/jpeg",
      },
      {
        url: "/images/villa-colibri-1.jpg",
        width: 1200,
        height: 630,
        alt: "Villa Colibrí - Cabaña para parejas",
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Monte Áureo - Cabañas familiares en Sierra Gorda",
    description: "5 villas únicas en la Biosfera Sierra Gorda. 13 años de experiencia, 4.9/5 estrellas. 🏡🌲",
    images: ["/images/hero-background.jpg"],
    creator: "@monteaureo",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-MX': '/',
      'es': '/',
    },
  },
  category: 'travel',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://monteaureo.com.mx/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="antialiased">
        <StructuredData />
        <Analytics />
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
