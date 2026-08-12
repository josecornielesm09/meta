"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";

export async function addMessage(formData: FormData) {
  const fromName = String(formData.get("fromName") || "").trim();
  const text = String(formData.get("text") || "").trim();
  const channel = String(formData.get("channel") || "whatsapp");
  const clientId = String(formData.get("clientId") || "") || null;
  if (!fromName || !text) return;
  await prisma.message.create({ data: { fromName, text, channel, clientId } });
  revalidatePath("/dashboard/mensajes");
}

export async function toggleMessage(formData: FormData) {
  const id = String(formData.get("id") || "");
  const m = await prisma.message.findUnique({ where: { id } });
  if (!m) return;
  await prisma.message.update({ where: { id }, data: { status: m.status === "respondido" ? "nuevo" : "respondido" } });
  revalidatePath("/dashboard/mensajes");
}
