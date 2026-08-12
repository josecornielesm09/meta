import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function DashboardHome() {
  const [leads, clients, posts, pendingServices, reviews, newMessages] = await Promise.all([
    prisma.lead.count({ where: { status: "nuevo" } }),
    prisma.client.count(),
    prisma.blogPost.count({ where: { status: "publicado" } }),
    prisma.service.count({ where: { status: { not: "completado" } } }),
    prisma.review.count(),
    prisma.message.count({ where: { status: "nuevo" } }),
  ]);

  const stats = [
    { label: "Solicitudes nuevas", value: leads, color: "text-brand-blue", href: "/dashboard/leads" },
    { label: "Clientes activos", value: clients, color: "text-brand-green", href: "/dashboard/clientes" },
    { label: "Reseñas gestionadas", value: reviews, color: "text-amber-500", href: "/dashboard/reviews" },
    { label: "Posts publicados", value: posts, color: "text-brand-navy", href: "/dashboard/blog" },
    { label: "Tareas pendientes", value: pendingServices, color: "text-brand-red", href: "/dashboard/clientes" },
  ];

  const modules = [
    { href: "/dashboard/reviews", label: "Reseñas", icon: "⭐", desc: "Reseñas de Google" },
    { href: "/dashboard/seo", label: "SEO Local", icon: "🔍", desc: "Posiciones en Google" },
    { href: "/dashboard/blog", label: "Contenido", icon: "🎬", desc: "Videos e imágenes" },
    { href: "/dashboard/payments", label: "Cobros", icon: "💳", desc: "Enlaces de cobro" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-black text-brand-navy">Resumen</h1>
      <p className="mt-1 text-slate-500">Vista general de tu plataforma.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-md">
            <div className={`text-3xl font-black ${s.color}`}>{s.value}</div>
            <div className="mt-1 text-sm text-slate-500">{s.label}</div>
          </Link>
        ))}
      </div>

      <h2 className="mt-10 font-bold text-brand-navy">Módulos de la plataforma</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {modules.map((m) => (
          <Link key={m.href} href={m.href} className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="text-2xl">{m.icon}</div>
            <div className="mt-2 font-bold text-brand-navy">{m.label}</div>
            <div className="text-xs text-slate-500">{m.desc}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
