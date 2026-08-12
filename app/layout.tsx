import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import StickyCta from "@/components/StickyCta";
import { SITE, WHATSAPP } from "@/lib/plan";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = "https://meta-eight-drab.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Promociones El Valle 956 | Posiciona tu negocio en Google — McAllen, TX",
  description:
    "Haz que más clientes encuentren tu negocio en Google. Sistema de Posicionamiento Local: Google Business, página web SEO, palabras clave, contenido profesional y 30 reseñas. McAllen, TX.",
  keywords: ["SEO local", "Google Business", "marketing local", "McAllen", "posicionamiento en Google", "negocios locales"],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Promociones El Valle 956 — Posiciona tu negocio en Google",
    description: "Sistema de Posicionamiento Local para negocios locales en McAllen, TX. Google Business, página SEO, contenido y 30 reseñas.",
    type: "website",
    url: SITE_URL,
    locale: "es_US",
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Promociones El Valle 956 — Posiciona tu negocio en Google",
    description: "Sistema de Posicionamiento Local para negocios locales en McAllen, TX.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: SITE.name,
      description: "Sistema de Posicionamiento Local para negocios locales: Google Business, página web SEO, contenido profesional y reseñas.",
      url: SITE_URL,
      telephone: WHATSAPP.display,
      areaServed: "McAllen, TX",
      address: { "@type": "PostalAddress", addressLocality: "McAllen", addressRegion: "TX", addressCountry: "US" },
      sameAs: [SITE.instagram, SITE.facebook],
    },
    {
      "@type": "Service",
      name: "Sistema de Posicionamiento Local",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: "McAllen, TX",
      description: "Google Business, página web optimizada para SEO, palabras clave, contenido visual (3 videos y 5 imágenes) y 30 reseñas.",
      offers: { "@type": "Offer", price: "599", priceCurrency: "USD" },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {children}
        <FloatingWhatsApp />
        <StickyCta />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
