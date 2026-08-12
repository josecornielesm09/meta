import { PrismaClient } from "@prisma/client";
import { DEFAULT_SERVICES } from "../lib/plan";

const prisma = new PrismaClient();

async function main() {
  await prisma.lead.create({
    data: {
      businessName: "Panadería La Espiga",
      contactName: "María López",
      email: "maria@laespiga.com",
      phone: "+52 555 123 4567",
      message: "Quiero aparecer primero cuando busquen panadería cerca de mí.",
    },
  });

  const client = await prisma.client.create({
    data: {
      businessName: "Taller Mecánico El Rápido",
      contactName: "Juan Pérez",
      email: "juan@elrapido.com",
      phone: "+52 555 987 6543",
      city: "Guadalajara",
      keywords: "taller mecánico, cambio de aceite, frenos",
      status: "activo",
      services: { create: DEFAULT_SERVICES.map((s) => ({ type: s.type, title: s.title })) },
    },
  });

  console.log("Seed listo. Cliente demo:", client.businessName);
}

main().finally(() => prisma.$disconnect());
