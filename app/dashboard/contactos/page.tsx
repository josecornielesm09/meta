import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ContactosPage() {
  const [clients, leads] = await Promise.all([
    prisma.client.findMany({ orderBy: { createdAt: "desc" } }),
    prisma.lead.findMany({ orderBy: { createdAt: "desc" } }),
  ]);
  type Row = { name: string; business: string; email: string; phone: string | null; type: string; status: string };
  const rows: Row[] = [
    ...clients.map((c) => ({ name: c.contactName, business: c.businessName, email: c.email, phone: c.phone, type: "Cliente", status: c.status })),
    ...leads.filter((l) => l.status !== "convertido").map((l) => ({ name: l.contactName, business: l.businessName, email: l.email, phone: l.phone, type: "Prospecto", status: l.status })),
  ];

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-black text-brand-navy">📇 LocalContacts</h1>
      <p className="mt-1 text-slate-500">Todos tus contactos: clientes y prospectos en un solo lugar.</p>
      <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr><th className="px-4 py-3">Contacto</th><th className="px-4 py-3">Negocio</th><th className="px-4 py-3">Email</th><th className="px-4 py-3">Tipo</th></tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.length === 0 && <tr><td colSpan={4} className="px-4 py-6 text-center text-slate-400">Sin contactos.</td></tr>}
            {rows.map((r, i) => (
              <tr key={i} className="hover:bg-slate-50">
                <td className="px-4 py-3 font-medium text-brand-navy">{r.name}<div className="text-xs text-slate-400">{r.phone ?? ""}</div></td>
                <td className="px-4 py-3 text-slate-600">{r.business}</td>
                <td className="px-4 py-3 text-slate-500">{r.email}</td>
                <td className="px-4 py-3"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${r.type === "Cliente" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{r.type}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
