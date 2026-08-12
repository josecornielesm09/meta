import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

// Posición simulada determinista a partir de la palabra clave (demo).
function pos(seed: string) {
  let h = 0; for (const c of seed) h = (h * 31 + c.charCodeAt(0)) % 997;
  return (h % 8) + 1; // 1..8
}

export default async function SeoPage() {
  const clients = await prisma.client.findMany({ orderBy: { businessName: "asc" } });

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-black text-brand-navy">🔍 LocalSEO</h1>
      <p className="mt-1 text-slate-500">Posición de tus clientes en Google por palabra clave.</p>

      <div className="mt-6 space-y-4">
        {clients.length === 0 && <p className="text-slate-400">Aún no hay clientes con SEO configurado.</p>}
        {clients.map((c) => {
          const kws = (c.keywords || "").split(",").map((k) => k.trim()).filter(Boolean);
          return (
            <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-brand-navy">{c.businessName}</div>
                  <div className="text-xs text-slate-400">{c.city || "Sin ciudad"} · {c.googleProfile ? "Google Business conectado" : "Sin Google Business"}</div>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{kws.length} keywords</span>
              </div>
              {kws.length === 0 ? (
                <p className="mt-3 text-sm text-slate-400">Agrega palabras clave en la ficha del cliente.</p>
              ) : (
                <div className="mt-3 space-y-2">
                  {kws.map((k) => {
                    const p = pos(k + c.id);
                    return (
                      <div key={k} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2 text-sm">
                        <span className="text-slate-700">{k}</span>
                        <span className={`rounded-full px-2.5 py-1 text-xs font-bold ${p <= 3 ? "bg-green-100 text-green-700" : p <= 5 ? "bg-amber-100 text-amber-700" : "bg-red-100 text-red-600"}`}>
                          Posición #{p} {p <= 3 ? "· Top 3 ✓" : ""}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
