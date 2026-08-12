"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Testimonial = { name: string; role: string; text: string; avatar: string };

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

// Proyección de momentum tipo Apple (Designing Fluid Interfaces §6)
function project(velocity: number, deceleration = 0.998) {
  return (velocity / 1000) * deceleration / (1 - deceleration);
}

export default function TestimonialsSlider() {
  const count = TESTIMONIALS.length;
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0); // desplazamiento en px durante el arrastre
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // estado del gesto (sin re-render)
  const g = useRef({ startX: 0, lastX: 0, lastT: 0, vel: 0, width: 0, active: false });

  const clamp = (i: number) => Math.max(0, Math.min(count - 1, i));
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  // autoplay (se pausa mientras se arrastra)
  useEffect(() => {
    if (dragging) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, dragging, index]);

  function onPointerDown(e: React.PointerEvent) {
    const el = trackRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    g.current = { startX: e.clientX, lastX: e.clientX, lastT: performance.now(), vel: 0, width: el.offsetWidth, active: true };
    setDragging(true);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!g.current.active) return;
    const now = performance.now();
    const dx = e.clientX - g.current.lastX;
    const dt = now - g.current.lastT || 16;
    g.current.vel = dx / dt * 1000; // px/s
    g.current.lastX = e.clientX;
    g.current.lastT = now;

    let offset = e.clientX - g.current.startX;
    // resistencia (rubber-band) en los extremos — Apple §9
    if ((index === 0 && offset > 0) || (index === count - 1 && offset < 0)) offset *= 0.35;
    setDrag(offset);
  }

  function endDrag() {
    if (!g.current.active) return;
    g.current.active = false;
    const { vel, width } = g.current;
    // proyecta dónde "aterrizaría" el gesto y decide el slide destino
    const projected = drag + project(vel);
    let target = index;
    if (projected < -width * 0.2) target = clamp(index + 1);
    else if (projected > width * 0.2) target = clamp(index - 1);
    setIndex(target);
    setDrag(0);
    setDragging(false);
  }

  const pct = -index * 100;

  return (
    <div className="relative mx-auto max-w-3xl">
      <div
        ref={trackRef}
        className={`drag-track select-none overflow-hidden rounded-3xl ${dragging ? "dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(${pct}% + ${drag}px))`,
            transition: dragging ? "none" : "transform 0.55s var(--spring)",
          }}
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="w-full shrink-0 px-1">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-card sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue/10 to-brand-green/10 text-3xl">
                  {t.avatar}
                </div>
                <div className="mt-3 text-amber-400">★★★★★</div>
                <p className="pointer-events-none mt-4 text-lg leading-relaxed text-slate-700">“{t.text}”</p>
                <div className="mt-5 font-display font-bold text-brand-navy">{t.name}</div>
                <div className="text-sm text-slate-500">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={prev} aria-label="Anterior"
        className="spring press absolute -left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md hover:text-brand-blue sm:flex">←</button>
      <button onClick={next} aria-label="Siguiente"
        className="spring press absolute -right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-md hover:text-brand-blue sm:flex">→</button>

      <div className="mt-6 flex justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} aria-label={`Ir a reseña ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-brand-green" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`} />
        ))}
      </div>
      <p className="mt-3 text-center text-xs text-slate-400 sm:hidden">← Desliza para ver más →</p>
    </div>
  );
}
