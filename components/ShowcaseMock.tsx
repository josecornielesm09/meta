import { VIDEOS } from "@/lib/plan";
import Media from "@/components/Media";

const Play = ({ c = "h-6 w-6" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);
const Person = ({ c = "h-10 w-10" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-5 0-9 2.7-9 6v2h18v-2c0-3.3-4-6-9-6z" /></svg>
);
const ImgIcon = ({ c = "h-8 w-8" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.6" /><path d="m21 16-5-5L5 20" /></svg>
);

// Muestra el contenido terminado: landing con formulario + blog móvil + videos + galería.
export default function ShowcaseMock() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="relative flex items-end justify-center">
        {/* ===== Laptop ===== */}
        <div className="w-full max-w-2xl">
          <div className="overflow-hidden rounded-t-xl border-[8px] border-slate-800 bg-white">
            {/* barra navegador */}
            <div className="flex items-center gap-1.5 bg-slate-100 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-2 flex-1 rounded bg-white px-2 py-0.5 text-[9px] text-slate-400">tunegocio.com</span>
            </div>
            {/* nav del sitio */}
            <div className="flex items-center justify-between px-4 py-2.5">
              <span className="text-[11px] font-black text-brand-navy">Tu Negocio</span>
              <div className="hidden gap-3 text-[8px] font-semibold text-slate-500 sm:flex">
                <span>INICIO</span><span>SERVICIOS</span><span>NOSOTROS</span><span className="text-brand-green">CONTACTO</span>
              </div>
            </div>
            {/* banda imagen (hero) */}
            <div className="relative flex h-2 w-full bg-gradient-to-r from-emerald-400 via-sky-400 to-emerald-500" />
            {/* contenido */}
            <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4">
              <div className="flex flex-col justify-center">
                <div className="font-display text-base font-black leading-tight text-brand-navy sm:text-xl">Estamos para<br/>ayudar</div>
                <p className="mt-1.5 text-[9px] leading-snug text-slate-500 sm:text-[11px]">Contáctanos hoy y recibe la mejor atención.</p>
                <span className="mt-3 w-fit rounded bg-brand-green px-3 py-1.5 text-[9px] font-bold text-white sm:text-[10px]">CONTÁCTANOS</span>
              </div>
              {/* formulario */}
              <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                <div className="text-[10px] font-bold text-brand-navy">Contáctanos</div>
                <div className="mt-2 space-y-1.5">
                  {["Nombre", "Correo electrónico", "Teléfono", "Mensaje"].map((ph) => (
                    <div key={ph} className="rounded border border-slate-200 px-2 py-1 text-[8px] text-slate-400">{ph}</div>
                  ))}
                </div>
                <div className="mt-2 rounded bg-brand-green py-1.5 text-center text-[9px] font-bold text-white">ENVIAR</div>
              </div>
            </div>
          </div>
          <div className="mx-auto h-3 w-[108%] -translate-x-[4%] rounded-b-xl bg-slate-800" />
          <div className="mx-auto h-1.5 w-24 rounded-b-lg bg-slate-700" />
        </div>

        {/* ===== Teléfono (blog) ===== */}
        <div className="relative -ml-12 mb-8 hidden w-40 shrink-0 rounded-[1.8rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl sm:block">
          <div className="absolute left-1/2 top-1.5 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
          <div className="overflow-hidden rounded-[1.3rem] bg-white p-3 pt-5">
            <div className="text-[11px] font-black text-brand-navy">Tu Blog</div>
            <div className="mt-2 flex h-14 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-200 to-sky-200 text-white/70">
              <ImgIcon c="h-6 w-6" />
            </div>
            <div className="mt-2 text-[10px] font-bold leading-tight text-brand-navy">5 Consejos para hacer crecer tu negocio</div>
            <div className="mt-1 text-[9px] font-semibold text-brand-green">Leer más →</div>
          </div>
        </div>
      </div>

      {/* ===== Videos ===== */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
        {VIDEOS.map((v, i) => (
          <div key={v.title} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-700 to-slate-900">
            <div className="relative aspect-video">
              {/* imagen real si existe; si no, respaldo con silueta */}
              <Media
                src={`/media/video-${i + 1}.jpg`}
                alt={v.title}
                className="absolute inset-0 h-full w-full object-cover"
                fallback={<Person c="absolute bottom-0 right-2 h-16 w-16 text-white/10" />}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow transition group-hover:scale-110"><Play c="ml-0.5 h-4 w-4" /></span>
              </div>
              <span className="absolute left-2 top-2 rounded-full bg-brand-green/90 px-2 py-0.5 text-[9px] font-semibold text-white">{v.tag}</span>
              <span className="absolute bottom-2 right-2 rounded bg-black/50 px-1.5 py-0.5 text-[9px] text-white">{v.duration}</span>
              <span className="absolute bottom-2 left-2 max-w-[70%] text-[9px] font-bold uppercase leading-tight text-white drop-shadow sm:text-[10px]">{v.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Galería de imágenes ===== */}
      <div className="mt-4 grid grid-cols-5 gap-3 sm:gap-4">
        {["from-slate-300 to-slate-400", "from-emerald-200 to-emerald-400", "from-sky-200 to-sky-400", "from-amber-200 to-amber-400", "from-rose-200 to-rose-400"].map((g, i) => (
          <div key={i} className={`flex aspect-square items-center justify-center rounded-xl bg-gradient-to-br ${g} text-white/50 shadow-sm`}>
            <ImgIcon c="h-6 w-6" />
          </div>
        ))}
      </div>
    </div>
  );
}
