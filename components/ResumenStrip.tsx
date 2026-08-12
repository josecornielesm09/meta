import Media from "@/components/Media";
import { Icons } from "@/components/Icons";

const Play = ({ c = "h-5 w-5" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);

// Franja visual: recap de lo incluido en un vistazo.
export default function ResumenStrip() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {/* Google Business */}
      <div className="spring rounded-2xl border border-slate-200 bg-white p-4 hover:-translate-y-1 hover:shadow-card">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-brand-blue">Google Business</div>
        <div className="overflow-hidden rounded-lg">
          <Media src="/media/google-mobile.png" alt="Google Business"
            className="h-24 w-full object-cover object-top"
            fallback={<div className="flex h-24 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-brand-blue text-white"><Icons.gbp_setup className="h-8 w-8" /></div>} />
        </div>
      </div>

      {/* Fotos */}
      <div className="spring rounded-2xl border border-slate-200 bg-white p-4 hover:-translate-y-1 hover:shadow-card">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-amber-600">Fotos</div>
        <div className="grid grid-cols-3 gap-1">
          {["from-emerald-200 to-emerald-400","from-sky-200 to-sky-400","from-amber-200 to-amber-400","from-rose-200 to-rose-400","from-violet-200 to-violet-400","from-slate-200 to-slate-400"].map((g,i)=>(
            <div key={i} className={`aspect-square rounded bg-gradient-to-br ${g}`} />
          ))}
        </div>
      </div>

      {/* Videos */}
      <div className="spring rounded-2xl border border-slate-200 bg-white p-4 hover:-translate-y-1 hover:shadow-card">
        <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-rose-600">Videos</div>
        <div className="relative flex h-24 items-center justify-center overflow-hidden rounded-lg">
          <Media src="/media/video-1.jpg" alt="Videos" className="absolute inset-0 h-full w-full object-cover"
            fallback={<div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />} />
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow"><Play c="ml-0.5 h-4 w-4" /></span>
        </div>
      </div>

      {/* Reseñas */}
      <div className="spring flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center hover:-translate-y-1 hover:shadow-card">
        <div className="mb-1 text-[11px] font-bold uppercase tracking-wide text-slate-500">Reseñas</div>
        <div className="font-display text-3xl font-black text-brand-navy">4.9</div>
        <div className="text-amber-400">★★★★★</div>
        <div className="mt-1 text-[11px] text-slate-500">30 reseñas</div>
      </div>

      {/* Resultado */}
      <div className="spring col-span-2 flex flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-green to-red-600 p-4 text-white hover:-translate-y-1 sm:col-span-1">
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l6-6 4 4 8-8" /><path d="M17 7h4v4" /></svg>
        <div className="mt-2 text-sm font-bold leading-tight">Más visibilidad, más llamadas y mensajes</div>
      </div>
    </div>
  );
}
