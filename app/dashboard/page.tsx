import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function DashboardHome() {
  const [leads, clients, posts, pendingServices] = await Promise.all([
    prisma.lead.count({ where: { status: "nuevo" } }),
    prisma.client.count(),
    prisma.blogPost.count({ where: { status: "publicado" } }),
    prisma.service.count({ where: { status: { not: "completado" } } }),
  ]);
  const stats = [
    { label: "Solicitudes nuevas", value: leads, color: "text-brand-blue" },
    { label: "Clientes activos", value: clients, color: "text-brand-green" },
    { label: "Posts publicados", value: posts, color: "text-brand-navy" },
    { label: "Tareas pendientes", value: pendingServices, color: "text-brand-red" },
  ];
  return (
    <div>
      <h1 className="text-2xl font-black text-brand-navy">Resumen</h1>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-5">
            <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
            <div className="mt-1 text-sm text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
