// Definición del paquete de SEO Local basado en la oferta de $599
export const PLAN = {
  id: "seo-local-599",
  name: "SEO Local Completo",
  price: 599,
  currency: "USD",
  billing: "inversión única",
  tagline: "Más visibilidad, más clientes, más ventas",
  features: [
    { id: "gbp_setup", title: "Google Business Profile", desc: "Creación y configuración correcta de tu perfil de negocio." },
    { id: "keywords", title: "Palabras clave estratégicas", desc: "Integración de keywords en tu Google Business." },
    { id: "web", title: "Página web de contacto", desc: "Web básica con SEO, indexada en Google." },
    { id: "whatsapp", title: "Bot de WhatsApp", desc: "Responde a tus clientes automáticamente por WhatsApp, 24/7." },
    { id: "videos", title: "3 videos cortos editados", desc: "Listos para destacar tu negocio." },
    { id: "imagenes", title: "5 imágenes optimizadas", desc: "Optimizadas para Google Business." },
    { id: "reviews", title: "30 reseñas positivas", desc: "Comentarios positivos en Google Reviews." },
  ],
  results: ["Más visibilidad local", "Más llamadas y mensajes", "Más clientes para tu negocio"],
};

// Videos promocionales cortos (como en el flyer)
export const VIDEOS = [
  { title: "Conoce nuestros servicios", tag: "Presentación", duration: "0:30" },
  { title: "Calidad que marca la diferencia", tag: "Testimonio", duration: "0:30" },
  { title: "Tu satisfacción es nuestra prioridad", tag: "Atención", duration: "0:30" },
];

// Pasos del proceso de trabajo
export const STEPS = [
  { n: "01", title: "Contratas el paquete", desc: "Un solo pago de $599, sin mensualidades ni sorpresas." },
  { n: "02", title: "Configuramos todo", desc: "Google Business, web, palabras clave, fotos y videos de tu negocio." },
  { n: "03", title: "Activamos el bot", desc: "El bot de WhatsApp responde a tus clientes al instante, todo el día." },
  { n: "04", title: "Apareces primero", desc: "Más visibilidad, más llamadas y más clientes cada mes." },
];

// Servicios/entregables que se crean automáticamente para cada cliente nuevo
export const DEFAULT_SERVICES = [
  { type: "gbp_setup", title: "Configuración de Google Business Profile" },
  { type: "keywords", title: "Integración de palabras clave" },
  { type: "web", title: "Página web de contacto con SEO" },
  { type: "whatsapp", title: "Bot de WhatsApp automático" },
  { type: "videos", title: "3 videos cortos editados" },
  { type: "imagenes", title: "5 imágenes optimizadas" },
  { type: "reviews", title: "30 reseñas positivas en Google" },
];
