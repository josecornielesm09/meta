// Definición del paquete de SEO Local basado en la oferta de $599
export const PLAN = {
  id: "seo-local-599",
  name: "SEO Local Completo",
  price: 599,
  currency: "USD",
  billing: "inversión única",
  tagline: "Más visibilidad, más clientes, más ventas",
  features: [
    { icon: "🏪", title: "Google Business Profile", desc: "Creación y configuración correcta de tu perfil de negocio." },
    { icon: "🔍", title: "Palabras clave estratégicas", desc: "Integración de keywords en tu Google Business." },
    { icon: "🌐", title: "Página web de contacto", desc: "Web básica con SEO, indexada en Google." },
    { icon: "🤖", title: "Blog con IA automático", desc: "Sistema de posteo automático para contenido constante." },
    { icon: "🎬", title: "3 videos cortos editados", desc: "Listos para destacar tu negocio." },
    { icon: "🖼️", title: "5 imágenes optimizadas", desc: "Optimizadas para Google Business." },
    { icon: "⭐", title: "50 reseñas positivas", desc: "Comentarios positivos en Google Reviews." },
  ],
  results: ["Más visibilidad local", "Más llamadas y mensajes", "Más clientes para tu negocio"],
};

// Servicios/entregables que se crean automáticamente para cada cliente nuevo
export const DEFAULT_SERVICES = [
  { type: "gbp_setup", title: "Configuración de Google Business Profile" },
  { type: "keywords", title: "Integración de palabras clave" },
  { type: "web", title: "Página web de contacto con SEO" },
  { type: "blog_ia", title: "Sistema de blog automático con IA" },
  { type: "videos", title: "3 videos cortos editados" },
  { type: "imagenes", title: "5 imágenes optimizadas" },
  { type: "reviews", title: "50 reseñas positivas en Google" },
];
