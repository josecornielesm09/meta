import Link from "next/link";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export default async function BlogIndex() {
  const posts = await prisma.blogPost.findMany({
    where: { status: "publicado" },
    orderBy: { publishedAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container-x max-w-3xl">
        <Link href="/" className="text-sm text-brand-blue hover:underline">← Inicio</Link>
        <h1 className="mt-4 text-3xl font-black text-brand-navy">Blog</h1>
        <p className="mt-1 text-slate-500">Contenido generado automáticamente con IA.</p>

        {posts.length === 0 ? (
          <p className="mt-10 text-slate-400">Aún no hay artículos publicados.</p>
        ) : (
          <div className="mt-8 space-y-6">
            {posts.map((p) => (
              <article key={p.id} className="rounded-xl border border-slate-200 p-6 hover:shadow-md">
                <h2 className="text-xl font-bold text-brand-navy">
                  <Link href={`/blog/${p.slug}`} className="hover:text-brand-blue">{p.title}</Link>
                </h2>
                <p className="mt-2 text-slate-600">{p.excerpt}</p>
                <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand-green">
                  Leer más →
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
