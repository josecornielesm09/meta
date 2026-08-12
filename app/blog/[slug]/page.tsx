import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { renderMarkdown } from "@/lib/markdown";

export const dynamic = "force-dynamic";

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } });
  if (!post || post.status !== "publicado") notFound();

  return (
    <main className="min-h-screen bg-white py-12">
      <article className="container-x max-w-2xl">
        <Link href="/blog" className="text-sm text-brand-blue hover:underline">← Blog</Link>
        <h1 className="mt-4 text-3xl font-black text-brand-navy">{post.title}</h1>
        <p className="mt-2 text-slate-500">{post.excerpt}</p>
        <div
          className="prose mt-6 max-w-none text-slate-700"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />
      </article>
    </main>
  );
}
