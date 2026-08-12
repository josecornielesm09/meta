"use client";
import { useState } from "react";

const FAQS = [
  { q: "¿Qué necesito para comenzar?", a: "Solo los datos de tu negocio: nombre, servicios, ciudad y algunas fotos. Nosotros nos encargamos del resto." },
  { q: "¿Esto ayuda a mi negocio a aparecer en Google?", a: "Sí. Optimizamos tu presencia (Google Business, palabras clave y página SEO) para mejorar tus posibilidades de aparecer en las búsquedas relevantes de tu zona." },
  { q: "¿Incluye página web?", a: "Sí. Incluye una página web básica, optimizada para SEO y preparada para indexarse en Google, con botón de contacto." },
  { q: "¿Incluye dominio y hosting?", a: "El servicio incluye la creación de tu página optimizada. Si necesitas un dominio propio, lo coordinamos contigo según tu caso." },
  { q: "¿Incluye reseñas?", a: "Sí, incluye 30 reseñas como parte de la oferta, para fortalecer la reputación de tu negocio en Google." },
  { q: "¿Hay mensualidad?", a: "No. Es un pago único, sin mensualidades ni sorpresas." },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
              <span className="font-display font-bold text-brand-navy">{f.q}</span>
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-brand-green transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
              </span>
            </button>
            <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
