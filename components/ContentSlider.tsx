import AutoSlider from "@/components/AutoSlider";
import Media from "@/components/Media";
import { Icons } from "@/components/Icons";
import { VIDEOS } from "@/lib/plan";

const Play = ({ c = "h-6 w-6" }: { c?: string }) => (
  <svg className={c} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
);

function Slide({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-card sm:p-5">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-green" />
        <span className="text-sm font-bold text-brand-navy">{label}</span>
      </div>
      <div className="flex h-56 items-center justify-center overflow-hidden rounded-xl bg-slate-50 sm:h-72">{children}</div>
    </div>
  );
}

/* Mock compacto de navegador (respaldo de la página web) */
function BrowserMock() {
  return (
    <div className="w-full max-w-md p-3">
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-1.5 bg-slate-100 px-2 py-1.5">
          <span className="h-2 w-2 rounded-full bg-red-400" /><span className="h-2 w-2 rounded-full bg-amber-400" /><span className="h-2 w-2 rounded-full bg-green-400" />
          <span className="ml-2 rounded bg-white px-2 text-[8px] text-slate-400">tunegocio.com</span>
        </div>
        <div className="grid grid-cols-2 gap-3 p-3">
          <div className="flex flex-col justify-center">
            <div className="font-display text-sm font-black text-brand-navy">Estamos para ayudar</div>
            <div className="mt-1 h-1.5 w-20 rounded bg-slate-200" />
            <div className="mt-2 w-fit rounded bg-brand-green px-2 py-1 text-[8px] font-bold text-white">CONTÁCTANOS</div>
          </div>
          <div className="rounded border border-slate-200 p-2">
            <div className="space-y-1">
              <div className="h-3 rounded bg-slate-100" /><div className="h-3 rounded bg-slate-100" /><div className="h-3 rounded bg-slate-100" />
            </div>
            <div className="mt-1.5 rounded bg-brand-green py-1 text-center text-[8px] font-bold text-white">ENVIAR</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContentSlider() {
  return (
    <AutoSlider labels={["Página web", "Videos", "Imágenes", "Google Business"]}>
      {/* Página web */}
      <Slide label="Tu página web optimizada">
        <Media src="/media/showcase-desktop.png" alt="Página web del negocio" className="max-h-full w-auto object-contain" fallback={<BrowserMock />} />
      </Slide>

      {/* Videos */}
      <Slide label="Tus 3 videos editados">
        <div className="grid w-full grid-cols-3 gap-2 p-3">
          {VIDEOS.map((v, i) => (
            <div key={v.title} className="relative overflow-hidden rounded-lg">
              <div className="relative aspect-[9/12]">
                <Media src={`/media/video-${i + 1}.jpg`} alt={v.title} className="absolute inset-0 h-full w-full object-cover"
                  fallback={<div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow"><Play c="ml-0.5 h-4 w-4" /></span>
                </div>
                <span className="absolute bottom-1.5 left-1.5 right-1.5 text-[8px] font-bold uppercase leading-tight text-white drop-shadow">{v.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Imágenes */}
      <Slide label="Tus 5 imágenes optimizadas">
        <div className="grid w-full grid-cols-3 gap-2 p-3">
          {["from-emerald-200 to-emerald-400","from-sky-200 to-sky-400","from-amber-200 to-amber-400","from-rose-200 to-rose-400","from-violet-200 to-violet-400","from-slate-200 to-slate-400"].map((g, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
              <Media src={`/media/foto-${i + 1}.jpg`} alt={`Imagen ${i + 1}`} className="absolute inset-0 h-full w-full object-cover"
                fallback={<div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${g} text-white/60`}><Icons.imagenes className="h-6 w-6" /></div>} />
            </div>
          ))}
        </div>
      </Slide>

      {/* Google Business */}
      <Slide label="Tu perfil de Google Business">
        <Media src="/media/google-mobile.png" alt="Perfil de Google Business" className="max-h-full w-auto object-contain"
          fallback={
            <div className="w-full max-w-xs p-3">
              <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-navy text-white"><Icons.gbp_setup className="h-5 w-5" /></span>
                  <div>
                    <div className="text-sm font-bold text-brand-navy">Tu Negocio</div>
                    <div className="text-[11px] text-amber-500">4.9 ★★★★★ <span className="text-slate-400">(30)</span></div>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-4 gap-1 text-center text-[9px] font-semibold text-brand-blue">
                  <div className="rounded bg-slate-50 py-1.5">Llamar</div><div className="rounded bg-slate-50 py-1.5">Ruta</div><div className="rounded bg-slate-50 py-1.5">Guardar</div><div className="rounded bg-slate-50 py-1.5">Sitio</div>
                </div>
              </div>
            </div>
          } />
      </Slide>
    </AutoSlider>
  );
}
