export const dynamic = "force-dynamic";

const CAMPAIGNS = [
  { name: "Google Ads · Búsqueda local", platform: "Google", budget: "$10/día", status: "Ejemplo" },
  { name: "Meta Ads · Reconocimiento", platform: "Facebook/Instagram", budget: "$8/día", status: "Ejemplo" },
];

export default function AdsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-black text-brand-navy">📣 LocalAds</h1>
      <p className="mt-1 text-slate-500">Campañas de anuncios en Google y redes para tus clientes.</p>

      <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-center">
        <p className="text-slate-600">Conecta las cuentas publicitarias para gestionar campañas reales.</p>
        <div className="mt-4 flex justify-center gap-3">
          <button className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-bold text-white">Conectar Google Ads</button>
          <button className="rounded-lg bg-[#1877f2] px-4 py-2 text-sm font-bold text-white">Conectar Meta Ads</button>
        </div>
      </div>

      <h2 className="mt-8 font-bold text-brand-navy">Campañas (ejemplo)</h2>
      <div className="mt-3 space-y-3">
        {CAMPAIGNS.map((c) => (
          <div key={c.name} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
            <div>
              <div className="font-semibold text-brand-navy">{c.name}</div>
              <div className="text-xs text-slate-400">{c.platform} · {c.budget}</div>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
