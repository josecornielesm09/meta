import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function ClientesPage() {
  const clients = await prisma.client.findMany({
    orderBy: { createdAt: "desc" },
    include: { services: true },
  });
  return (
    <div>
      <h1 className="text-2xl font-black text-brand-navy">Clientes</h1>
      <div className="mt-6 space-y-3">
        {clients.length === 0 && <p className="text-slate-400">Aún no hay clientes. Conviértelos desde Solicitudes.</p>}
        {clients.map((c) => {
          const done = c.services.filter((s) => s.status === "completado").length;
          return (
            <Link key={c.id} href={`/dashboard/clientes/${c.id}`}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4 hover:shadow-md">
              <div>
                <div className="font-bold text-brand-navy">{c.businessName}</div>
                <div className="text-sm text-slate-500">{c.contactName} · {c.email}</div>
              </div>
              <div className="text-right">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">{c.status}</span>
                <div className="mt-1 text-xs text-slate-400">{done}/{c.services.length} entregables</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
