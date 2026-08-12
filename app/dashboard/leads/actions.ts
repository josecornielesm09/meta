"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { DEFAULT_SERVICES } from "@/lib/plan";

export async function convertLead(formData: FormData) {
  const id = String(formData.get("id"));
  const lead = await prisma.lead.findUnique({ where: { id } });
  if (!lead) return;

  const client = await prisma.client.create({
    data: {
      businessName: lead.businessName,
      contactName: lead.contactName,
      email: lead.email,
      phone: lead.phone,
      services: { create: DEFAULT_SERVICES.map((s) => ({ type: s.type, title: s.title })) },
    },
  });
  await prisma.lead.update({ where: { id }, data: { status: "convertido" } });
  revalidatePath("/dashboard/leads");
  redirect(`/dashboard/clientes/${client.id}`);
}
