import { VIDEOS } from "@/lib/plan";

const Play = ({ c = "h-6 w-6" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);

// Muestra cómo se ve el contenido entregado: laptop + móvil + videos + galería.
export default function ShowcaseMock() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* dispositivos */}
      <div className="relative flex items-end justify-center gap-0">
        {/* Laptop */}
        <div className="w-full max-w-2xl">
          <div className="rounded-t-xl border-[8px] border-slate-800 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 flex-1 rounded bg-white px-2 py-0.5 text-[10px] text-slate-400">tunegocio.com</span>
            </div>
            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <div className="h-3 w-24 rounded bg-brand-navy" />
                <div className="flex gap-2">
                  <div className="h-2 w-10 rounded bg-slate-200" /><div className="h-2 w-10 rounded bg-slate-200" /><div className="h-2 w-14 rounded-full bg-brand-green" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="h-4 w-32 rounded bg-slate-800" />
                  <div className="mt-2 h-4 w-24 rounded bg-slate-800" />
                  <div className="mt-3 h-2 w-full rounded bg-slate-200" />
                  <div className="mt-1.5 h-2 w-5/6 rounded bg-slate-200" />
                  <div className="mt-4 h-8 w-32 rounded-lg bg-brand-green" />
                </div>
                <div className="rounded-lg border border-slate-200 p-3">
                  <div className="h-2.5 w-20 rounded bg-slate-300" />
                  <div className="mt-2.5 h-6 rounded bg-slate-100" />
                  <div className="mt-2 h-6 rounded bg-slate-100" />
                  <div className="mt-2 h-6 rounded bg-slate-100" />
                  <div className="mt-2.5 h-7 rounded-lg bg-brand-green" />
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-slate-800" />
          <div className="mx-auto h-1.5 w-24 rounded-b-lg bg-slate-700" />
        </div>

        {/* Teléfono */}
        <div className="relative -ml-14 mb-6 hidden w-40 shrink-0 rounded-[1.8rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl sm:block">
          <div className="absolute left-1/2 top-1.5 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
          <div className="overflow-hidden rounded-[1.3rem] bg-white pt-4">
            <div className="px-3 pb-3">
              <div className="h-2.5 w-14 rounded bg-brand-navy" />
              <div className="mt-2 h-2 w-20 rounded bg-slate-300" />
              <div className="mt-3 flex h-16 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-white">
                <Play c="h-6 w-6" />
              </div>
              <div className="mt-2 h-2 w-full rounded bg-slate-200" />
              <div className="mt-1 h-2 w-4/5 rounded bg-slate-200" />
              <div className="mt-2 h-2 w-16 rounded bg-brand-green" />
            </div>
          </div>
        </div>
      </div>

      {/* fila de videos */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        {VIDEOS.map((v) => (
          <div key={v.title} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-900">
            <div className="flex aspect-video items-center justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow transition group-hover:scale-110"><Play c="ml-0.5 h-5 w-5" /></span>
              <span className="absolute bottom-2 right-2 rounded bg-black/50 px-1.5 py-0.5 text-[10px] text-white">{v.duration}</span>
              <span className="absolute left-2 top-2 rounded-full bg-brand-green/90 px-2 py-0.5 text-[10px] font-semibold text-white">{v.tag}</span>
            </div>
          </div>
        ))}
      </div>

      {/* galería de imágenes optimizadas */}
      <div className="mt-4 grid grid-cols-5 gap-3 sm:gap-4">
        {["from-emerald-200 to-emerald-400", "from-sky-200 to-sky-400", "from-amber-200 to-amber-400", "from-rose-200 to-rose-400", "from-violet-200 to-violet-400"].map((g, i) => (
          <div key={i} className={`aspect-square rounded-xl bg-gradient-to-br ${g} shadow-sm`} />
        ))}
      </div>
    </div>
  );
}
