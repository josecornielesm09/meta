import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

const GROUPS: { title: string; items: { href: string; label: string; icon: string }[] }[] = [
  {
    title: "General",
    items: [
      { href: "/dashboard", label: "Resumen", icon: "📊" },
      { href: "/dashboard/leads", label: "Solicitudes", icon: "📥" },
      { href: "/dashboard/clientes", label: "Clientes", icon: "👥" },
    ],
  },
  {
    title: "Servicios",
    items: [
      { href: "/dashboard/reviews", label: "Reseñas", icon: "⭐" },
      { href: "/dashboard/seo", label: "SEO Local", icon: "🔍" },
      { href: "/dashboard/blog", label: "Contenido", icon: "🎬" },
      { href: "/dashboard/payments", label: "Cobros", icon: "💳" },
    ],
  },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) redirect("/login");
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="flex w-60 shrink-0 flex-col border-r border-slate-200 bg-white p-5">
        <div className="mb-8 flex items-center gap-2">
          <img src="/logo.svg" alt="El Valle 956" className="h-9 w-auto" />
          <span className="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold text-brand-greenDark">Panel</span>
        </div>
        <nav className="space-y-5 text-sm">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <div className="mb-1 px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">{g.title}</div>
              <div className="space-y-0.5">
                {g.items.map((it) => (
                  <Link key={it.href} href={it.href} className="flex items-center gap-2.5 rounded-lg px-3 py-2 font-medium text-slate-600 transition hover:bg-slate-100">
                    <span>{it.icon}</span> {it.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <Link href="/" className="mt-auto flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-500 hover:bg-slate-100">
          🌐 Ver sitio
        </Link>
      </aside>
      <main className="flex-1 overflow-x-auto p-8">{children}</main>
    </div>
  );
}
