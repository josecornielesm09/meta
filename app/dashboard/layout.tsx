import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/auth";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  if (!isAuthenticated()) redirect("/login");
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-56 shrink-0 border-r border-slate-200 bg-white p-5">
        <div className="mb-8 text-lg font-black text-brand-navy">
          SEO<span className="text-brand-green">Local</span>
        </div>
        <nav className="space-y-1 text-sm font-medium text-slate-600">
          <Link href="/dashboard" className="block rounded-lg px-3 py-2 hover:bg-slate-100">📊 Resumen</Link>
          <Link href="/dashboard/leads" className="block rounded-lg px-3 py-2 hover:bg-slate-100">📥 Solicitudes</Link>
          <Link href="/dashboard/clientes" className="block rounded-lg px-3 py-2 hover:bg-slate-100">👥 Clientes</Link>
          <Link href="/dashboard/blog" className="block rounded-lg px-3 py-2 hover:bg-slate-100">🤖 Blog IA</Link>
          <Link href="/" className="block rounded-lg px-3 py-2 hover:bg-slate-100">🌐 Ver sitio</Link>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
