import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { generateBlogPost, slugify } from "@/lib/ai";

// Endpoint para posteo automático de blog.
// Protégelo con un secreto: llámalo con ?key=CRON_SECRET (o header x-cron-key).
// Configúralo en un cron externo (ej. Vercel Cron / GitHub Actions) para contenido constante.
export async function GET(req: Request) {
  const url = new URL(req.url);
  const key = url.searchParams.get("key") || req.headers.get("x-cron-key");
  const secret = process.env.CRON_SECRET;
  if (secret && key !== secret) {
    return NextResponse.json({ error: "No autorizado." }, { status: 401 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json({ error: "Falta ANTHROPIC_API_KEY." }, { status: 500 });
  }

  const clients = await prisma.client.findMany({ where: { status: { in: ["onboarding", "activo"] } } });
  const created: string[] = [];

  for (const client of clients) {
    try {
      const gen = await generateBlogPost({
        businessName: client.businessName,
        city: client.city,
        keywords: client.keywords,
      });
      let slug = slugify(gen.title);
      if (await prisma.blogPost.findUnique({ where: { slug } })) {
        slug = `${slug}-${Date.now().toString(36)}`;
      }
      await prisma.blogPost.create({
        data: {
          clientId: client.id,
          title: gen.title,
          slug,
          excerpt: gen.excerpt,
          content: gen.content,
          keywords: gen.keywords.join(", "),
          status: "publicado",
          publishedAt: new Date(),
          generatedBy: "ia",
        },
      });
      created.push(`${client.businessName}: ${gen.title}`);
    } catch (e) {
      created.push(`${client.businessName}: ERROR ${(e as Error).message}`);
    }
  }

  return NextResponse.json({ ok: true, generados: created.length, detalle: created });
}
