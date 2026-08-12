"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export async function togglePublish(formData: FormData) {
  const id = String(formData.get("id"));
  const p = await prisma.blogPost.findUnique({ where: { id } });
  if (!p) return;
  const publishing = p.status !== "publicado";
  await prisma.blogPost.update({
    where: { id },
    data: {
      status: publishing ? "publicado" : "borrador",
      publishedAt: publishing ? new Date() : null,
    },
  });
  revalidatePath("/dashboard/blog");
  revalidatePath("/blog");
}
