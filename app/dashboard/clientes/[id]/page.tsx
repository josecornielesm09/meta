import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { toggleService, updateClientSeo, generatePostForClient } from "./actions";

export const dynamic = "force-dynamic";

export default async function ClientDetail({ params }: { params: { id: string } }) {
  const client = await prisma.client.findUnique({
    where: { id: params.id },
    include: { services: true, posts: { orderBy: { createdAt: "desc" } } },
  });
  if (!client) notFound();

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-black text-brand-navy">{client.businessName}</h1>
      <p className="text-slate-500">{client.contactName} · {client.email} {client.phone ? `· ${client.phone}` : ""}</p>

      {/* Datos SEO */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-3 font-bold text-brand-navy">Datos SEO</h2>
        <form action={updateClientSeo} className="grid gap-3 sm:grid-cols-2">
          <input type="hidden" name="id" value={client.id} />
          <input name="city" defaultValue={client.city ?? ""} placeholder="Ciudad" className="rounded-lg border border-slate-300 px-3 py-2" />
          <input name="keywords" defaultValue={client.keywords ?? ""} placeholder="Palabras clave (coma)" className="rounded-lg border border-slate-300 px-3 py-2" />
          <input name="googleProfile" defaultValue={client.googleProfile ?? ""} placeholder="URL Google Business" className="rounded-lg border border-slate-300 px-3 py-2" />
          <input name="website" defaultValue={client.website ?? ""} placeholder="Sitio web" className="rounded-lg border border-slate-300 px-3 py-2" />
          <button className="rounded-lg bg-brand-navy px-4 py-2 text-sm font-bold text-white sm:col-span-2">Guardar</button>
        </form>
      </section>

      {/* Entregables */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="mb-3 font-bold text-brand-navy">Entregables del paquete</h2>
        <div className="space-y-2">
          {client.services.map((s) => (
            <form key={s.id} action={toggleService} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2">
              <input type="hidden" name="id" value={s.id} />
              <span className={s.status === "completado" ? "text-slate-400 line-through" : "text-slate-700"}>{s.title}</span>
              <button className="rounded-md px-3 py-1 text-xs font-bold text-white"
                style={{ background: s.status === "completado" ? "#94a3b8" : "#16a34a" }}>
                {s.status === "completado" ? "Completado" : "Marcar completado"}
              </button>
            </form>
          ))}
        </div>
      </section>

      {/* Blog IA */}
      <section className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-brand-navy">Blog automático (IA)</h2>
          <form action={generatePostForClient}>
            <input type="hidden" name="id" value={client.id} />
            <button className="rounded-lg bg-brand-blue px-4 py-2 text-sm font-bold text-white">🤖 Generar artículo</button>
          </form>
        </div>
        <div className="mt-4 space-y-2">
          {client.posts.length === 0 && <p className="text-sm text-slate-400">Sin artículos generados.</p>}
          {client.posts.map((p) => (
            <div key={p.id} className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-2 text-sm">
              <span className="text-slate-700">{p.title}</span>
              <span className="rounded-full bg-white px-2 py-1 text-xs text-slate-500">{p.status}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
