// Reseñas apiladas (estilo OneLocal), en español.
const REVIEWS = [
  { initial: "H.W", color: "#f59e0b", date: "28 May", text: "Siempre respuesta rápida, 24/7." },
  { initial: "M.C", color: "#0ea5e9", date: "10 Jun", text: "Alguien contestó cada vez que escribí." },
  { initial: "O.C", color: "#334155", date: "27 Jun", text: "Excelente servicio y trato amable." },
];

export default function StackedReviews() {
  return (
    <div className="mx-auto max-w-sm space-y-3">
      {REVIEWS.map((r, i) => (
        <div
          key={r.initial}
          className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-soft"
          style={{ marginLeft: `${i * 12}px`, zIndex: REVIEWS.length - i }}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: r.color }}>
            {r.initial}
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-amber-400">★★★★★</span>
              <span className="text-sm text-slate-500">{r.date}</span>
            </div>
            <p className="mt-0.5 truncate text-sm font-medium text-slate-700">{r.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
