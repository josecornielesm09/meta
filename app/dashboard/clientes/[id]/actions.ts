"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { generateBlogPost, slugify } from "@/lib/ai";

export async function toggleService(formData: FormData) {
  const id = String(formData.get("id"));
  const s = await prisma.service.findUnique({ where: { id } });
  if (!s) return;
  await prisma.service.update({
    where: { id },
    data: { status: s.status === "completado" ? "en_progreso" : "completado" },
  });
  revalidatePath(`/dashboard/clientes/${s.clientId}`);
}

export async function updateClientSeo(formData: FormData) {
  const id = String(formData.get("id"));
  await prisma.client.update({
    where: { id },
    data: {
      city: String(formData.get("city") || "") || null,
      keywords: String(formData.get("keywords") || "") || null,
      googleProfile: String(formData.get("googleProfile") || "") || null,
      website: String(formData.get("website") || "") || null,
    },
  });
  revalidatePath(`/dashboard/clientes/${id}`);
}

export async function generatePostForClient(formData: FormData) {
  const id = String(formData.get("id"));
  const client = await prisma.client.findUnique({ where: { id } });
  if (!client) return;

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
      status: "borrador",
      generatedBy: "ia",
    },
  });
  revalidatePath(`/dashboard/clientes/${id}`);
}
