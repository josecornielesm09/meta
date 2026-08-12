import { prisma } from "@/lib/db";
import { convertLead } from "./actions";

export const dynamic = "force-dynamic";

export default async function LeadsPage() {
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <div>
      <h1 className="text-2xl font-black text-brand-navy">Solicitudes</h1>
      <p className="mt-1 text-slate-500">Formularios recibidos desde la landing.</p>
      <div className="mt-6 space-y-3">
        {leads.length === 0 && <p className="text-slate-400">Sin solicitudes todavía.</p>}
        {leads.map((l) => (
          <div key={l.id} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
            <div>
              <div className="font-bold text-brand-navy">{l.businessName}</div>
              <div className="text-sm text-slate-500">{l.contactName} · {l.email} {l.phone ? `· ${l.phone}` : ""}</div>
              {l.message && <div className="mt-1 text-sm text-slate-400">{l.message}</div>}
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{l.status}</span>
              {l.status !== "convertido" && (
                <form action={convertLead}>
                  <input type="hidden" name="id" value={l.id} />
                  <button className="rounded-lg bg-brand-green px-3 py-1 text-sm font-bold text-white hover:bg-brand-greenDark">
                    Convertir en cliente
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
