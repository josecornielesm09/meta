// Mockup de búsqueda con mapa y ficha del negocio (estilo OneLocal), en español.
export default function MapCard() {
  return (
    <div className="relative mx-auto max-w-sm">
      {/* barra de búsqueda */}
      <div className="flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-soft">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-brand-blue">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
        </span>
        <span className="flex-1 text-sm text-slate-600">servicios cerca de mí</span>
        <span className="text-slate-300">🎤 📷</span>
      </div>

      {/* mapa */}
      <div className="relative mt-4 h-64 overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#eef2f5,#e6eef7)] shadow-soft">
        {/* calles */}
        <div className="absolute inset-0 opacity-60" style={{ backgroundImage: "linear-gradient(#fff 2px,transparent 2px),linear-gradient(90deg,#fff 2px,transparent 2px)", backgroundSize: "40px 40px" }} />
        <div className="absolute left-0 top-1/3 h-2 w-full -rotate-6 bg-white/70" />
        <div className="absolute left-1/3 top-0 h-full w-2 rotate-6 bg-white/70" />

        {/* pin con pulso */}
        <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="absolute -inset-5 animate-ping rounded-full bg-orange-400/30" />
          <svg className="relative h-10 w-10 text-orange-500 drop-shadow" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" /></svg>
        </div>

        {/* ficha del negocio */}
        <div className="absolute right-3 top-6 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-navy text-white">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z" /></svg>
          </span>
          <div>
            <div className="text-sm font-bold text-brand-navy">Tu Negocio</div>
            <div className="text-xs text-slate-500">Servicios locales</div>
            <div className="mt-0.5 flex items-center gap-1 text-xs">
              <span className="text-amber-400">★★★★★</span>
              <span className="font-semibold text-slate-600">1,2K</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
