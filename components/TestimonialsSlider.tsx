"use client";

import { useEffect, useState, useCallback } from "react";

type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "María González",
    role: "Panadería La Espiga",
    text: "En dos meses empezamos a aparecer primeros cuando buscan 'panadería cerca de mí'. Las llamadas se dispararon. ¡Excelente servicio!",
    avatar: "🥖",
  },
  {
    name: "Carlos Ramírez",
    role: "Taller El Rápido",
    text: "Antes nadie me encontraba en Google. Ahora tengo reseñas, fotos y clientes nuevos cada semana. Totalmente recomendado.",
    avatar: "🔧",
  },
  {
    name: "Lucía Fernández",
    role: "Salón Bella Vista",
    text: "El bot de WhatsApp responde a mis clientes al instante, incluso de noche. No pierdo ni una sola consulta.",
    avatar: "💇",
  },
  {
    name: "Andrés Torres",
    role: "Restaurante El Sabor",
    text: "La inversión se pagó sola con los clientes nuevos del primer mes. Aparecer primero en el mapa lo cambió todo.",
    avatar: "🍽️",
  },
];

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="w-full shrink-0 px-1">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-card sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-green/10 text-3xl">
                  {t.avatar}
                </div>
                <div className="mt-3 text-yellow-400">★★★★★</div>
                <p className="mt-4 text-lg leading-relaxed text-slate-700">“{t.text}”</p>
                <div className="mt-5 font-bold text-brand-navy">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controles */}
      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute -left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition hover:text-brand-blue sm:flex"
      >
        ←
      </button>
      <button
        onClick={next}
        aria-label="Siguiente"
        className="absolute -right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md transition hover:text-brand-blue sm:flex"
      >
        →
      </button>

      {/* Puntos */}
      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir a reseña ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-8 bg-brand-green" : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
