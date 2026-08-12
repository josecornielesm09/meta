"use client";
import { useState } from "react";

const FAQS = [
  { q: "¿Cuánto tarda en verse resultados?", a: "La configuración se completa en pocos días. Los primeros resultados en Google suelen notarse entre 2 y 6 semanas, dependiendo de tu zona y competencia." },
  { q: "¿Hay mensualidad?", a: "No. Es un pago único de $599. Sin mensualidades ni sorpresas. Los servicios de anuncios o dominios propios, si los quieres, se cotizan aparte." },
  { q: "¿Qué necesitan de mí para empezar?", a: "Solo los datos de tu negocio: nombre, dirección, teléfono, tus servicios y algunas fotos. Nosotros nos encargamos del resto." },
  { q: "¿En cuánto tiempo lo entregan?", a: "En solo 2 días tienes todo listo y funcionando: Google Business, tu landing, los videos, las imágenes y las reseñas." },
  { q: "¿Y si ya tengo Google Business?", a: "Perfecto. Lo optimizamos y mejoramos con palabras clave, fotos y reseñas para que suba de posición." },
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
