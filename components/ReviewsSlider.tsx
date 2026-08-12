import AutoSlider from "@/components/AutoSlider";

const GLogo = ({ c = "h-5 w-5" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 48 48">
    <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2 5-4.4 6.6v5.5h7.1c4.1-3.8 6.6-9.4 6.6-16.1z" />
    <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.5-5.3l-7.1-5.5c-2 1.3-4.5 2.1-7.4 2.1-5.7 0-10.5-3.8-12.2-9H4.5v5.7C8.1 41.1 15.4 46 24 46z" />
    <path fill="#FBBC05" d="M11.8 28.3c-.4-1.3-.7-2.7-.7-4.3s.3-3 .7-4.3v-5.7H4.5A22 22 0 002 24c0 3.6.9 7 2.5 10z" />
    <path fill="#EA4335" d="M24 10.7c3.2 0 6.1 1.1 8.4 3.3l6.3-6.3C34.9 4.1 29.9 2 24 2 15.4 2 8.1 6.9 4.5 14l7.3 5.7c1.7-5.2 6.5-9 12.2-9z" />
  </svg>
);

const REVIEWS = [
  { name: "María G.", initial: "M", color: "#1a73e8", date: "hace 2 semanas", text: "Excelente atención y muy profesionales. En pocas semanas empezamos a aparecer primeros en Google. ¡Totalmente recomendados!" },
  { name: "Carlos R.", initial: "C", color: "#16a34a", date: "hace 1 mes", text: "Antes nadie me encontraba. Ahora tengo reseñas, fotos y clientes nuevos cada semana. Un trabajo impecable." },
  { name: "Lucía F.", initial: "L", color: "#ea4335", date: "hace 3 semanas", text: "La página quedó preciosa y me llegan mensajes por WhatsApp todos los días. Muy contenta con el resultado." },
  { name: "Andrés T.", initial: "A", color: "#7c3aed", date: "hace 5 días", text: "La inversión se pagó sola con los clientes nuevos del primer mes. Aparecer primero en el mapa lo cambió todo." },
];

export default function ReviewsSlider() {
  return (
    <AutoSlider labels={REVIEWS.map((r) => r.name)}>
      {REVIEWS.map((r) => (
        <div key={r.name} className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-card sm:p-8">
          <div className="mb-3 flex items-center justify-center gap-2">
            <GLogo /> <span className="text-sm font-semibold text-slate-500">Reseña de Google</span>
          </div>
          <div className="text-amber-400">★★★★★</div>
          <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-slate-700">“{r.text}”</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: r.color }}>{r.initial}</span>
            <div className="text-left">
              <div className="font-bold text-brand-navy">{r.name}</div>
              <div className="text-xs text-slate-400">{r.date}</div>
            </div>
          </div>
        </div>
      ))}
    </AutoSlider>
  );
}
