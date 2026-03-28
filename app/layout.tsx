import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "COMUNICKT — Señalamiento Vial y Contenedores para Basura",
  description:
    "COMUNICKT es tu proveedor integral de señalamiento vial: señales reflectivas, conos, barreras y dispositivos viales; además de contenedores metálicos y botes de basura urbanos e industriales. Cobertura nacional en México.",
  keywords: [
    "señalamiento vial",
    "señales de tráfico",
    "conos viales",
    "barreras viales",
    "contenedores de basura",
    "botes de basura urbanos",
    "contenedores metálicos",
    "contenedores industriales",
    "COMUNICKT",
    "señalización vial México",
    "dispositivos viales",
    "reciclaje",
  ],
  openGraph: {
    title: "COMUNICKT — Señalamiento Vial y Contenedores para Basura",
    description:
      "Proveedor integral de señalamiento vial y soluciones de contenedores para basura. Calidad certificada y cobertura nacional en México.",
    url: "https://comunickt-web.vercel.app",
    siteName: "COMUNICKT",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COMUNICKT — Señalamiento Vial y Contenedores",
    description:
      "Señalamiento vial profesional y contenedores para basura. Calidad certificada, entrega rápida, cobertura nacional.",
  },
  alternates: {
    canonical: "https://comunickt-web.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "COMUNICKT",
  description:
    "Proveedor de señalamiento vial y contenedores para basura en México",
  url: "https://comunickt-web.vercel.app",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+52-55-1234-5678",
    contactType: "sales",
    areaServed: "MX",
    availableLanguage: "Spanish",
  },
  areaServed: {
    "@type": "Country",
    name: "Mexico",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Productos COMUNICKT",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Señalamiento Vial",
        description:
          "Señales reflectivas, conos viales, barreras, señales preventivas",
      },
      {
        "@type": "OfferCatalog",
        name: "Contenedores y Botes para Basura",
        description:
          "Contenedores metálicos, botes urbanos, contenedores industriales",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-brand-dark text-white antialiased">{children}</body>
    </html>
  );
}
