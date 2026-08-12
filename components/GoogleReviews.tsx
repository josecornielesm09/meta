"use client";

const Star = ({ c = "h-4 w-4" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="#fbbc05"><path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.2l1-5.8L3.5 9.2l5.9-.9L12 3z" /></svg>
);

const GLogo = ({ c = "h-5 w-5" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 48 48">
    <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.1-3.8 6.6-9.4 6.6-16.1z" />
    <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.7C8.1 41.1 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.8 28.3c-.4-1.3-.7-2.7-.7-4.3s.3-3 .7-4.3v-5.7H4.5A22 22 0 002 24c0 3.6.9 7 2.5 10z" />
    <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.4 2 8.1 6.9 4.5 14l7.3 5.7c1.7-5.2 6.5-9 12.2-9z" />
  </svg>
);

type Review = { name: string; initial: string; color: string; date: string; text: string; guide?: boolean; likes: number };

const REVIEWS: Review[] = [
  { name: "María González", initial: "M", color: "#1a73e8", date: "hace 2 semanas", guide: true, likes: 14,
    text: "En dos meses empezamos a aparecer primeros cuando buscan 'panadería cerca de mí'. Las llamadas se dispararon. ¡Excelente servicio!" },
  { name: "Carlos Ramírez", initial: "C", color: "#16a34a", date: "hace 1 mes", likes: 9,
    text: "Antes nadie me encontraba en Google. Ahora tengo reseñas, fotos y clientes nuevos cada semana. Totalmente recomendado." },
  { name: "Lucía Fernández", initial: "L", color: "#ea4335", date: "hace 3 semanas", guide: true, likes: 21,
    text: "El bot de WhatsApp responde a mis clientes al instante, incluso de noche. No pierdo ni una sola consulta. Se nota la diferencia." },
  { name: "Andrés Torres", initial: "A", color: "#7c3aed", date: "hace 5 días", likes: 6,
    text: "La inversión se pagó sola con los clientes nuevos del primer mes. Aparecer primero en el mapa lo cambió todo." },
];

export default function GoogleReviews() {
  return (
    <div className="mx-auto max-w-4xl">
      {/* cabecera de puntuación */}
      <div className="mb-8 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-card sm:flex-row sm:gap-8">
        <div className="flex items-center gap-3">
          <GLogo c="h-8 w-8" />
          <span className="font-display text-lg font-bold text-slate-700">Reseñas de Google</span>
        </div>
        <div className="hidden h-10 w-px bg-slate-200 sm:block" />
        <div className="flex items-center gap-3">
          <span className="font-display text-4xl font-black text-slate-800">4.9</span>
          <div>
            <div className="flex"><Star /><Star /><Star /><Star /><Star /></div>
            <div className="text-sm text-slate-500">30 reseñas</div>
          </div>
        </div>
      </div>

      {/* grid de reseñas */}
      <div className="grid gap-4 sm:grid-cols-2">
        {REVIEWS.map((r) => (
          <div key={r.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: r.color }}>{r.initial}</span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate font-semibold text-slate-800">{r.name}</span>
                  {r.guide && <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500">Local Guide</span>}
                </div>
                <div className="text-xs text-slate-400">{r.date}</div>
              </div>
              <GLogo />
            </div>
            <div className="mt-3 flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
            <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 10v11M2 14v5a2 2 0 002 2h13.3a2 2 0 002-1.7l1.4-8A2 2 0 0018.7 10H14V4a2 2 0 00-2-2l-3 7z" /></svg>
              Útil ({r.likes})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
