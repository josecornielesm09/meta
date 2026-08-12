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

// Productos de la plataforma (estilo OneLocal): cada uno con marca propia
export const PRODUCTS = [
  {
    id: "seo", icon: "keywords", name: "LocalSEO", color: "from-blue-500 to-brand-blue",
    tagline: "Aparece primero en Google",
    desc: "Optimizamos tu Google Business Profile y tus palabras clave para que domines las búsquedas locales de tu zona.",
    features: ["Google Business Profile", "Palabras clave locales", "Ranking en el mapa"],
  },
  {
    id: "reviews", icon: "reviews", name: "LocalReviews", color: "from-amber-400 to-orange-500",
    tagline: "Reputación que genera confianza",
    desc: "Consigue y gestiona reseñas de 5 estrellas en Google automáticamente para atraer más clientes.",
    features: ["Reseñas automáticas", "Panel de reputación", "Respuestas rápidas"],
  },
  {
    id: "chat", icon: "whatsapp", name: "LocalChat", color: "from-green-500 to-emerald-600",
    tagline: "Nunca pierdas un cliente",
    desc: "Bot de WhatsApp y chat web que responde a tus clientes al instante, 24/7, incluso cuando duermes.",
    features: ["Bot de WhatsApp", "Chat en tu web", "Respuestas 24/7"],
  },
  {
    id: "site", icon: "web", name: "LocalSite", color: "from-cyan-500 to-sky-600",
    tagline: "Tu web lista para vender",
    desc: "Una página web rápida, optimizada para SEO e indexada en Google, con formulario de contacto.",
    features: ["Web con SEO", "Indexada en Google", "Formulario de contacto"],
  },
  {
    id: "contacts", icon: "contacts", name: "LocalContacts", color: "from-indigo-500 to-violet-600",
    tagline: "Todos tus clientes en un lugar",
    desc: "Un CRM simple para organizar tus clientes, dar seguimiento y no perder ninguna oportunidad.",
    features: ["Base de clientes", "Seguimiento", "Historial"],
  },
  {
    id: "content", icon: "videos", name: "LocalContent", color: "from-rose-500 to-red-600",
    tagline: "Contenido que destaca",
    desc: "Videos cortos e imágenes profesionales optimizadas para tu Google Business y redes sociales.",
    features: ["3 videos editados", "5 imágenes optimizadas", "Listo para redes"],
  },
  {
    id: "ads", icon: "ads", name: "LocalAds", color: "from-fuchsia-500 to-purple-600",
    tagline: "Anuncios que traen clientes",
    desc: "Campañas de anuncios en Google y redes para acelerar tus resultados y llegar a más gente.",
    features: ["Google & Meta Ads", "Segmentación local", "Reportes claros"],
  },
  {
    id: "payments", icon: "payments", name: "LocalPayments", color: "from-teal-500 to-emerald-600",
    tagline: "Cobra fácil y rápido",
    desc: "Recibe pagos en línea con enlaces de cobro simples, sin complicaciones para ti ni tus clientes.",
    features: ["Links de pago", "Cobros en línea", "Sin complicaciones"],
  },
];

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
