import { prisma } from "@/lib/db";
import { togglePublish } from "./actions";

export const dynamic = "force-dynamic";

export default async function BlogAdmin() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
    include: { client: true },
  });
  return (
    <div>
      <h1 className="text-2xl font-black text-brand-navy">Blog IA</h1>
      <p className="mt-1 text-slate-500">Genera artículos desde la ficha de cada cliente y publícalos aquí.</p>
      <div className="mt-6 space-y-3">
        {posts.length === 0 && <p className="text-slate-400">Sin artículos.</p>}
        {posts.map((p) => (
          <div key={p.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-bold text-brand-navy">{p.title}</div>
                <div className="text-sm text-slate-500">
                  {p.client?.businessName ?? "General"} · {p.generatedBy === "ia" ? "🤖 IA" : "✍️ Manual"}
                </div>
              </div>
              <form action={togglePublish}>
                <input type="hidden" name="id" value={p.id} />
                <button className="rounded-lg px-4 py-2 text-sm font-bold text-white"
                  style={{ background: p.status === "publicado" ? "#94a3b8" : "#16a34a" }}>
                  {p.status === "publicado" ? "Despublicar" : "Publicar"}
                </button>
              </form>
            </div>
            <p className="mt-2 text-sm text-slate-500">{p.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
