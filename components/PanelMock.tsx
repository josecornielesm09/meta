// Mockup del panel "Rendimiento" en español (estilo OneLocal), 100% SVG/CSS.
const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct"];
const LINE_A = [40, 80, 50, 62, 81, 41, 50, 70, 51, 61]; // línea principal (azul)
const LINE_B = [31, 60, 11, 39, 60, 11, 41, 50, 29, 38]; // secundaria
const LINE_C = [10, 41, 20, 30, 40, 11, 41, 50, 20, 11]; // gris

function path(data: number[], w: number, h: number, max = 90) {
  const step = w / (data.length - 1);
  return data.map((v, i) => `${i === 0 ? "M" : "L"} ${(i * step).toFixed(1)} ${(h - (v / max) * h).toFixed(1)}`).join(" ");
}

function UpBadge({ v, className = "" }: { v: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-brand-greenDark ${className}`}>
      {v} <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l7 7h-4v9h-6v-9H5z" /></svg>
    </span>
  );
}

export default function PanelMock() {
  const W = 300, H = 130;
  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
      {/* barra superior */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-black text-brand-navy">El Valle <span className="text-brand-red">956</span></span>
          <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase text-amber-700">Ejemplo</span>
        </div>
        <span className="rounded-md border border-slate-200 px-2 py-1 text-[11px] text-slate-500">Últimos 90 días ▾</span>
      </div>

      {/* Perfil de Google — gráfica */}
      <div className="mt-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-brand-navy">Perfil de Google</span>
          <UpBadge v="+151%" />
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 w-full">
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1="0" x2={W} y1={(H / 3) * i} y2={(H / 3) * i} stroke="#eef2f7" strokeWidth="1" />
          ))}
          <path d={path(LINE_C, W, H)} fill="none" stroke="#cbd5e1" strokeWidth="2" />
          <path d={path(LINE_B, W, H)} fill="none" stroke="#94a3b8" strokeWidth="2" />
          <path d={path(LINE_A, W, H)} fill="none" stroke="#1a73e8" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {LINE_A.map((v, i) => (
            <circle key={i} cx={(i * (W / (LINE_A.length - 1)))} cy={H - (v / 90) * H} r="3" fill="#1a73e8" />
          ))}
        </svg>
        <div className="flex justify-between text-[9px] text-slate-400">
          {MESES.map((m) => <span key={m}>{m}</span>)}
        </div>
      </div>

      {/* tiles inferiores */}
      <div className="mt-3 grid grid-cols-3 gap-2">
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="text-lg font-black text-brand-navy">691</div>
          <div className="text-[10px] text-slate-500">Visitas web</div>
        </div>
        <div className="rounded-xl bg-slate-50 p-3">
          <div className="flex items-center gap-1 text-lg font-black text-brand-green">121%</div>
          <div className="text-[10px] text-slate-500">Búsqueda orgánica</div>
        </div>
        <div className="rounded-xl bg-brand-navy p-3 text-white">
          <div className="text-lg font-black">223</div>
          <div className="text-[10px] text-slate-300">Conversiones</div>
        </div>
      </div>
    </div>
  );
}

// Anillo de progreso: "35 nuevos clientes este mes"
export function LeadsRing() {
  const r = 26, c = 2 * Math.PI * r, pct = 0.7;
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-card">
      <svg width="64" height="64" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r={r} fill="none" stroke="#fee2e2" strokeWidth="7" />
        <circle cx="32" cy="32" r={r} fill="none" stroke="#f97316" strokeWidth="7" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)} transform="rotate(-90 32 32)" />
      </svg>
      <div>
        <div className="flex items-center gap-1.5 font-display text-xl font-black text-brand-navy">
          35 <svg className="h-4 w-4 text-brand-green" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l7 7h-4v9h-6v-9H5z" /></svg>
        </div>
        <div className="text-sm text-slate-500">nuevos clientes este mes</div>
      </div>
    </div>
  );
}
