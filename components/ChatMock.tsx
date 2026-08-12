// Mockup de conversación de WhatsApp en español (estilo OneLocal / referidos).
export default function ChatMock() {
  return (
    <div className="relative mx-auto flex max-w-md gap-4">
      {/* columna de avatares */}
      <div className="flex flex-col items-center gap-3 pt-2">
        {["#f59e0b", "#0ea5e9", "#e11d48"].map((c, i) => (
          <span key={i} className="flex h-12 w-12 items-center justify-center rounded-full text-white shadow-sm" style={{ background: c }}>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4 0-8 2-8 5v1h16v-1c0-3-4-5-8-5z" /></svg>
          </span>
        ))}
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-200 to-blue-300 text-sm font-bold text-blue-800 shadow-sm">+240</span>
      </div>

      {/* burbujas */}
      <div className="flex-1 space-y-4 pt-2">
        <div>
          <div className="rounded-2xl rounded-tl-sm bg-orange-50 p-4 text-slate-700 shadow-sm">
            Refiere a un vecino para una revisión o reparación y <strong>ambos obtienen 15% de descuento</strong>. 🏠
          </div>
          <div className="mt-1 text-xs text-slate-400">Ahora</div>
        </div>
        <div className="flex flex-col items-end">
          <div className="rounded-2xl rounded-tr-sm bg-slate-100 p-4 text-slate-700 shadow-sm">
            ¡Suena genial, me interesa! 🙌
          </div>
          <div className="mt-1 text-xs text-slate-400">Ahora</div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-400 shadow-sm">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white">
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2z" /></svg>
          </span>
          Escribe un mensaje…
        </div>
      </div>
    </div>
  );
}
