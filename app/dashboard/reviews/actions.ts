"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export async function addReview(formData: FormData) {
  const clientId = String(formData.get("clientId") || "");
  const author = String(formData.get("author") || "").trim();
  const text = String(formData.get("text") || "").trim();
  const rating = Number(formData.get("rating") || 5);
  if (!clientId || !author || !text) return;
  await prisma.review.create({ data: { clientId, author, text, rating } });
  revalidatePath("/dashboard/reviews");
}

export async function deleteReview(formData: FormData) {
  const id = String(formData.get("id") || "");
  if (id) await prisma.review.delete({ where: { id } });
  revalidatePath("/dashboard/reviews");
}
