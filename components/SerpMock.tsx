"use client";

import { useEffect, useRef, useState } from "react";

// Estrella dorada
const Star = ({ c = "h-3 w-3" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="#fbbc05"><path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.2l1-5.8L3.5 9.2l5.9-.9L12 3z" /></svg>
);

const Pin = ({ c = "h-4 w-4", color = "#ea4335" }: { c?: string; color?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill={color}><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" /></svg>
);

type Biz = { name: string; rating: string; reviews: number; tag: string; you?: boolean };

const BEFORE: Biz[] = [
  { name: "Competencia Express", rating: "4.2", reviews: 88, tag: "Servicio local" },
  { name: "Negocios del Centro", rating: "4.0", reviews: 51, tag: "Servicio local" },
  { name: "La Competencia S.A.", rating: "3.9", reviews: 34, tag: "Servicio local" },
];
const AFTER: Biz[] = [
  { name: "Tu Negocio", rating: "4.9", reviews: 30, tag: "Negocio local · Abierto", you: true },
  { name: "Competencia Express", rating: "4.2", reviews: 88, tag: "Servicio local" },
  { name: "Negocios del Centro", rating: "4.0", reviews: 51, tag: "Servicio local" },
];

export default function SerpMock() {
  const [after, setAfter] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // alterna automáticamente antes/después cuando está en pantalla
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setInterval>;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setAfter(true);
        timer = setInterval(() => setAfter((v) => !v), 3200);
      } else {
        clearInterval(timer);
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => { obs.disconnect(); clearInterval(timer); };
  }, []);

  const list = after ? AFTER : BEFORE;

  return (
    <div ref={ref} className="mx-auto max-w-md">
      {/* ventana estilo navegador */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 flex-1 truncate rounded bg-white px-2 py-0.5 text-[10px] text-slate-400">google.com</span>
        </div>

        <div className="p-4">
          {/* barra de búsqueda Google */}
          <div className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 shadow-sm">
            <span className="font-medium">
              <span className="text-brand-blue">G</span><span className="text-brand-red">o</span><span className="text-brand-yellow">o</span><span className="text-brand-blue">g</span><span className="text-brand-green">l</span><span className="text-brand-red">e</span>
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500">tu servicio cerca de mí</span>
            <svg className="ml-auto h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
          </div>

          {/* etiqueta de página */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400">Resultados locales</span>
            <span className={`rounded-full px-2.5 py-1 text-[11px] font-bold transition-colors duration-500 ${after ? "bg-green-100 text-brand-greenDark" : "bg-red-100 text-red-600"}`}>
              {after ? "Tú · Página 1 ✓" : "Tú · Página 2 ✗"}
            </span>
          </div>

          {/* mini mapa */}
          <div className="relative mt-3 h-24 overflow-hidden rounded-xl bg-[linear-gradient(135deg,#e8f0e8,#e3ecfa)]">
            <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "18px 18px" }} />
            <div className={`absolute transition-all duration-700 ${after ? "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-125" : "left-1/4 top-2/3"}`}>
              <Pin c="h-6 w-6" color={after ? "#16a34a" : "#ea4335"} />
            </div>
            <Pin c="h-4 w-4" color="#94a3b8" />
          </div>

          {/* lista de negocios */}
          <div className="mt-3 space-y-1.5">
            {list.map((b, i) => (
              <div key={b.name + i}
                className={`flex items-center justify-between rounded-xl border px-3 py-2.5 transition-all duration-500 ${b.you ? "border-brand-green bg-green-50 shadow-sm" : "border-slate-100"}`}>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`truncate text-sm font-semibold ${b.you ? "text-brand-greenDark" : "text-slate-700"}`}>{b.name}</span>
                    {b.you && <span className="rounded bg-brand-green px-1.5 py-0.5 text-[9px] font-bold text-white">#1</span>}
                  </div>
                  <div className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500">
                    <span className="font-medium text-amber-500">{b.rating}</span>
                    <span className="flex"><Star /><Star /><Star /><Star /><Star /></span>
                    <span>({b.reviews})</span>
                  </div>
                  <div className="text-[10px] text-slate-400">{b.tag}</div>
                </div>
                {b.you && (
                  <span className="shrink-0 rounded-full bg-white p-1.5 text-brand-green shadow-sm">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m5 12 5 5L20 7" /></svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-sm text-slate-500">
        {after
          ? "✅ Con SEO Local, tu negocio aparece de primero en el mapa."
          : "❌ Sin SEO, tus clientes ni te encuentran."}
      </p>
    </div>
  );
}
