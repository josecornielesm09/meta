# SEO Local — Plataforma completa

Plataforma para **ofrecer, vender y entregar** un servicio de SEO Local (paquete de $599), inspirada en la oferta "Posiciona tu negocio en Google".

Incluye:

- 🌐 **Landing de ventas** que replica la oferta (servicios, resultados, precio $599) con formulario de contratación.
- 📥 **Captación de solicitudes (leads)** desde la landing, almacenadas en base de datos.
- 👥 **Panel de administración** para convertir solicitudes en clientes y gestionar sus entregables.
- ✅ **Checklist de entregables** del paquete (Google Business, keywords, web, videos, imágenes, reseñas...).
- 🤖 **Blog automático con IA** (Anthropic Claude): genera artículos SEO por cliente, manual o por cron.
- ⭐ Modelos para reseñas y datos SEO de cada cliente.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS**
- **Prisma** + **SQLite** (portable; cambia a Postgres editando `prisma/schema.prisma`)
- **@anthropic-ai/sdk** para la generación de contenido

## Puesta en marcha

```bash
npm install
cp .env.example .env          # edita las variables
npx prisma db push            # crea la base de datos
npm run db:seed               # (opcional) datos de ejemplo
npm run dev                   # http://localhost:3000
```

### Variables de entorno (`.env`)

| Variable            | Descripción                                        |
|---------------------|----------------------------------------------------|
| `DATABASE_URL`      | Conexión a la base de datos (SQLite por defecto).  |
| `ANTHROPIC_API_KEY` | Clave de la API de Anthropic para el blog con IA.  |
| `ADMIN_USER`        | Usuario del panel (`/login`).                      |
| `ADMIN_PASSWORD`    | Contraseña del panel.                              |
| `CRON_SECRET`       | (Opcional) protege el endpoint de posteo automático.|

## Flujo de uso

1. Un negocio contrata desde `/pedido` → se crea un **Lead**.
2. En `/dashboard/leads` conviertes el lead en **Cliente**; se crean sus 7 entregables automáticamente.
3. En la ficha del cliente completas sus datos SEO y marcas entregables como completados.
4. Generas artículos de blog con IA (botón "🤖 Generar artículo") y los publicas desde `/dashboard/blog`.
5. Los artículos publicados aparecen en el **blog público** `/blog`.

## Entrega automática del blog

El endpoint `GET /api/cron/blog?key=CRON_SECRET` genera y **publica** un artículo para cada cliente activo.
Prográmalo con un cron externo (Vercel Cron, GitHub Actions, cron-job.org) para contenido constante.

## Rutas principales

| Ruta                       | Descripción                          |
|----------------------------|--------------------------------------|
| `/`                        | Landing de ventas                    |
| `/pedido`                  | Formulario de contratación           |
| `/blog`, `/blog/[slug]`    | Blog público                         |
| `/login`                   | Acceso al panel                      |
| `/dashboard`               | Resumen (métricas)                   |
| `/dashboard/leads`         | Solicitudes recibidas                |
| `/dashboard/clientes`      | Gestión de clientes y entregables    |
| `/dashboard/blog`          | Gestión y publicación de artículos   |

> **Nota:** El panel usa autenticación básica por credenciales para uso interno. Para producción con múltiples usuarios, migra a una solución de auth completa (NextAuth, Clerk, etc.).
