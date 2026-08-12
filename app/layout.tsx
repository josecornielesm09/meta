import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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

export const metadata: Metadata = {
  title: "Promociones El Valle 956 | Marketing local en McAllen, TX",
  description:
    "Promociones El Valle 956: posiciona tu negocio primero en Google. Google Business, web con SEO, bot de WhatsApp, reseñas y más. McAllen, TX.",
  openGraph: {
    title: "Promociones El Valle 956 — Marketing local",
    description: "Más visibilidad, más clientes, más ventas para tu negocio en McAllen, TX. Desde $599.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
