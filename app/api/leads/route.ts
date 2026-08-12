import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body.businessName || !body.contactName || !body.email) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }
    const lead = await prisma.lead.create({
      data: {
        businessName: String(body.businessName),
        contactName: String(body.contactName),
        email: String(body.email),
        phone: body.phone ? String(body.phone) : null,
        message: body.message ? String(body.message) : null,
      },
    });
    return NextResponse.json({ ok: true, id: lead.id });
  } catch {
    return NextResponse.json({ error: "Error del servidor." }, { status: 500 });
  }
}
