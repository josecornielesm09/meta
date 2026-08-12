import Media from "@/components/Media";
import { Stars } from "@/components/Icons";

const TrendUp = ({ c = "h-7 w-7" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" />
  </svg>
);

// Pasos del ecosistema (respaldo visual mientras se suben las imágenes reales).
const STEPS = [
  { n: "1", title: "Google Business", desc: "Perfil optimizado para destacar en Google y Google Maps." },
  { n: "2", title: "Galería de fotos", desc: "Imágenes profesionales que generan confianza." },
  { n: "3", title: "Publicaciones", desc: "Contenido constante que te mantiene activo." },
  { n: "4", title: "Reseñas", desc: "Reseñas positivas que te dan autoridad." },
  { n: "5", title: "Calificación", desc: "Basado en 30 reseñas positivas." },
];

// Respaldo: recrea el gráfico "Todo en un solo ecosistema" con tarjetas + flechas.
function Fallback() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card sm:p-8">
      <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
        {STEPS.map((s, i) => (
          <div key={s.n} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-3">
            <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
              <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-sm font-black text-white">
                {s.n}
              </div>
              <h4 className="font-display text-sm font-black uppercase tracking-wide text-brand-blue">{s.title}</h4>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{s.desc}</p>
            </div>
            {i < STEPS.length - 1 && (
              <span className="text-2xl font-black text-slate-300 lg:my-1">+</span>
            )}
          </div>
        ))}
        <span className="hidden text-2xl font-black text-slate-300 lg:block">=</span>
        <div className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-brand-blue p-5 text-center text-white lg:w-44">
          <TrendUp c="h-7 w-7" />
          <div className="mt-1 text-sm font-black leading-tight">
            MÁS VISIBILIDAD<br />MÁS CONFIANZA<br />MÁS CLIENTES
          </div>
          <div className="mt-1 flex items-center gap-1 text-amber-300">
            <Stars className="h-3.5 w-3.5" /> <span className="text-xs font-bold">4.9</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Ecosistema() {
  return (
    <div>
      <Media
        src="/media/ecosistema-desktop.png"
        alt="Todo en un solo ecosistema para más visibilidad y más clientes"
        className="mx-auto hidden w-full rounded-3xl shadow-card sm:block"
        fallback={<div className="hidden sm:block"><Fallback /></div>}
      />
      <Media
        src="/media/ecosistema-mobile.png"
        alt="Todo en un solo ecosistema"
        className="mx-auto w-full rounded-3xl shadow-card sm:hidden"
        fallback={<div className="sm:hidden"><Fallback /></div>}
      />
    </div>
  );
}
