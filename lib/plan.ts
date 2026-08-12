// Datos de la marca (rebranding Promociones El Valle 956)
export const SITE = {
  name: "Promociones El Valle 956",
  short: "El Valle 956",
  address: "McAllen, TX, United States",
  instagram: "https://www.instagram.com/promocioneselvalle956",
  facebook: "https://www.facebook.com/promocioneselvalle956",
  logo: "/logo.svg", // reemplaza por /logo.png cuando subas tu logo real
};

// Contacto de WhatsApp (usado en todos los botones y el botón flotante)
export const WHATSAPP = {
  number: "19564560161", // solo dígitos, con código de país
  display: "+1 (956) 456-0161",
};

// Genera un enlace de WhatsApp con mensaje prellenado
export function waLink(message = "Hola, quiero posicionar mi negocio en Google.") {
  return `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`;
}

// CTA principal consistente en toda la landing
export const CTA = "Quiero posicionar mi negocio";

// Tipos de negocio ideales (para que el visitante se identifique)
export const BUSINESS_TYPES = [
  { icon: "🍽️", label: "Restaurantes" },
  { icon: "🔨", label: "Contractors" },
  { icon: "🏥", label: "Clínicas" },
  { icon: "🦷", label: "Dentistas" },
  { icon: "💇", label: "Salones de belleza" },
  { icon: "🔧", label: "Talleres" },
  { icon: "🛍️", label: "Tiendas" },
  { icon: "💼", label: "Servicios profesionales" },
  { icon: "🏗️", label: "Construcción" },
  { icon: "📍", label: "Negocios locales" },
];

// Transformación Antes / Después
export const BEFORE = [
  "Perfil incompleto",
  "Pocas imágenes",
  "Poca autoridad",
  "Sin página optimizada",
  "Información poco estratégica",
  "Baja presencia digital",
];
export const AFTER = [
  "Google Business optimizado",
  "Palabras clave relevantes",
  "Página preparada para SEO",
  "Mejor contenido visual",
  "Mayor reputación",
  "Presencia digital profesional",
];

// Pasos del "Sistema de Posicionamiento Local"
export const SYSTEM = [
  { icon: "gbp_setup", label: "Google Business" },
  { icon: "web", label: "Página SEO" },
  { icon: "keywords", label: "Palabras clave" },
  { icon: "videos", label: "Contenido" },
  { icon: "reviews", label: "Reseñas" },
  { icon: "trophy", label: "Mayor presencia digital" },
];

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
    { id: "web", title: "Página web optimizada para SEO", desc: "Página básica preparada para aparecer e indexarse en Google." },
    { id: "whatsapp", title: "Botón de WhatsApp directo", desc: "Para que tus clientes te contacten al instante." },
    { id: "videos", title: "3 videos cortos editados", desc: "Listos para destacar tu negocio." },
    { id: "imagenes", title: "5 imágenes optimizadas", desc: "Optimizadas para Google Business." },
    { id: "reviews", title: "30 reseñas positivas", desc: "Comentarios positivos en Google Reviews." },
  ],
  results: ["Más visibilidad local", "Más llamadas y mensajes", "Más clientes para tu negocio"],
};

// Tiempo de entrega destacado
// Concepto de sistema (sin plazos de entrega)
export const SYSTEM_NAME = "Sistema de Posicionamiento Local";

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
    id: "site", icon: "web", name: "Landing de Ventas", color: "from-cyan-500 to-sky-600",
    tagline: "Optimizada para vender",
    desc: "Una landing rápida y optimizada para ventas, con botón de contacto y WhatsApp, indexada en Google.",
    features: ["Diseño optimizado a ventas", "Botón de WhatsApp", "Indexada en Google"],
  },
  {
    id: "content", icon: "videos", name: "Contenido Visual", color: "from-rose-500 to-red-600",
    tagline: "Videos e imágenes que destacan",
    desc: "3 videos cortos y 5 imágenes profesionales optimizadas para tu Google Business y redes sociales.",
    features: ["3 videos editados", "5 imágenes optimizadas", "Listo para redes"],
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
  { n: "01", icon: "payments", title: "Contratas el paquete", desc: "Un solo pago de $599, sin mensualidades ni sorpresas." },
  { n: "02", icon: "settings", title: "Nos das tus datos", desc: "Nombre, logo, servicios y fotos de tu negocio. El resto lo hacemos nosotros." },
  { n: "03", icon: "check", title: "Construimos tu presencia", desc: "Google Business, página SEO, contenido visual y reseñas, todo integrado." },
  { n: "04", icon: "trophy", title: "Apareces primero", desc: "Más visibilidad, más llamadas y más clientes cada mes." },
];

// Servicios/entregables que se crean automáticamente para cada cliente nuevo
export const DEFAULT_SERVICES = [
  { type: "gbp_setup", title: "Configuración de Google Business Profile" },
  { type: "keywords", title: "Integración de palabras clave" },
  { type: "web", title: "Landing optimizada para ventas" },
  { type: "whatsapp", title: "Botón de WhatsApp directo" },
  { type: "videos", title: "3 videos cortos editados" },
  { type: "imagenes", title: "5 imágenes optimizadas" },
  { type: "reviews", title: "30 reseñas positivas en Google" },
];
