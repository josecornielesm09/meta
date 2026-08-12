import { prisma } from "@/lib/db";
import { addReview, deleteReview } from "./actions";

export const dynamic = "force-dynamic";

export default async function ReviewsPage() {
  const [reviews, clients] = await Promise.all([
    prisma.review.findMany({ orderBy: { createdAt: "desc" }, include: { client: true } }),
    prisma.client.findMany({ orderBy: { businessName: "asc" } }),
  ]);
  const avg = reviews.length ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1) : "—";

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-black text-brand-navy">⭐ LocalReviews</h1>
      <p className="mt-1 text-slate-500">Gestiona las reseñas de Google de tus clientes.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5"><div className="text-3xl font-black text-amber-500">{avg}</div><div className="text-sm text-slate-500">Promedio</div></div>
        <div className="rounded-xl border border-slate-200 bg-white p-5"><div className="text-3xl font-black text-brand-navy">{reviews.length}</div><div className="text-sm text-slate-500">Reseñas totales</div></div>
        <div className="rounded-xl border border-slate-200 bg-white p-5"><div className="text-3xl font-black text-brand-green">{clients.length}</div><div className="text-sm text-slate-500">Clientes</div></div>
      </div>

      {clients.length > 0 && (
        <form action={addReview} className="mt-6 grid gap-3 rounded-xl border border-slate-200 bg-white p-5 sm:grid-cols-2">
          <h2 className="font-bold text-brand-navy sm:col-span-2">Añadir reseña</h2>
          <select name="clientId" className="rounded-lg border border-slate-300 px-3 py-2" required>
            {clients.map((c) => <option key={c.id} value={c.id}>{c.businessName}</option>)}
          </select>
          <input name="author" placeholder="Nombre del cliente" className="rounded-lg border border-slate-300 px-3 py-2" required />
          <select name="rating" className="rounded-lg border border-slate-300 px-3 py-2" defaultValue="5">
            {[5,4,3,2,1].map((r) => <option key={r} value={r}>{r} estrellas</option>)}
          </select>
          <input name="text" placeholder="Comentario de la reseña" className="rounded-lg border border-slate-300 px-3 py-2" required />
          <button className="rounded-lg bg-brand-green px-4 py-2 font-bold text-white sm:col-span-2">Guardar reseña</button>
        </form>
      )}

      <div className="mt-6 space-y-3">
        {reviews.length === 0 && <p className="text-slate-400">Sin reseñas todavía.</p>}
        {reviews.map((r) => (
          <div key={r.id} className="flex items-start justify-between rounded-xl border border-slate-200 bg-white p-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-brand-navy">{r.author}</span>
                <span className="text-amber-400">{"★".repeat(r.rating)}<span className="text-slate-200">{"★".repeat(5 - r.rating)}</span></span>
              </div>
              <div className="text-xs text-slate-400">{r.client?.businessName ?? "—"}</div>
              <p className="mt-1 text-sm text-slate-600">{r.text}</p>
            </div>
            <form action={deleteReview}>
              <input type="hidden" name="id" value={r.id} />
              <button className="text-xs text-slate-400 hover:text-brand-red">Eliminar</button>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
