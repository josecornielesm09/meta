import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

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
  title: "SEO Local Completo | Posiciona tu negocio en Google",
  description:
    "Servicio completo de SEO Local para que tu negocio aparezca primero en Google. Google Business, web con SEO, blog con IA, reseñas y más por $599.",
  openGraph: {
    title: "Posiciona tu negocio en Google",
    description: "Más visibilidad, más clientes, más ventas. SEO Local completo por $599.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
