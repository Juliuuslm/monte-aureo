import type { Metadata } from "next";
import "./globals.css";
import LoadingScreen from "@/components/LoadingScreen";

export const metadata: Metadata = {
  title: "Cabañas Monte Áureo — Tu escape perfecto en la naturaleza",
  description: "Cabañas premium ubicadas en la biosfera Sierra Gorda. Disfruta de un escape perfecto en la naturaleza con nuestras 5 villas exclusivas.",
  keywords: "cabañas, monte aureo, sierra gorda, naturaleza, hospedaje, villas, turismo, querétaro",
  authors: [{ name: "Cabañas Monte Áureo" }],
  openGraph: {
    type: "website",
    url: "https://monteaureo.com.mx/",
    title: "Cabañas Monte Áureo — Tu escape perfecto en la naturaleza",
    description: "Cabañas premium ubicadas en la biosfera Sierra Gorda. Disfruta de un escape perfecto en la naturaleza.",
    images: [
      {
        url: "/images/hero-background.jpg",
        width: 1920,
        height: 1080,
        alt: "Cabañas Monte Áureo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabañas Monte Áureo — Tu escape perfecto en la naturaleza",
    description: "Cabañas premium ubicadas en la biosfera Sierra Gorda. Disfruta de un escape perfecto en la naturaleza.",
    images: ["/images/hero-background.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
