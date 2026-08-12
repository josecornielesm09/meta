import Link from "next/link";
import { PLAN, VIDEOS, STEPS, PRODUCTS, waLink, WHATSAPP } from "@/lib/plan";
import MobileMenu from "@/components/MobileMenu";
import Faq from "@/components/Faq";
import { Icons, Stars } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import SerpMock from "@/components/SerpMock";
import GoogleReviews from "@/components/GoogleReviews";
import PanelMock, { LeadsRing } from "@/components/PanelMock";
import ChatMock from "@/components/ChatMock";
import MapCard from "@/components/MapCard";
import StackedReviews from "@/components/StackedReviews";

const GoogleWord = () => (
  <span className="whitespace-nowrap font-display">
    <span className="text-brand-blue">G</span>
    <span className="text-brand-red">o</span>
    <span className="text-brand-yellow">o</span>
    <span className="text-brand-blue">g</span>
    <span className="text-brand-green">l</span>
    <span className="text-brand-red">e</span>
  </span>
);

/* Mockup de teléfono mostrando la ficha de Google Business */
function PhoneMock() {
  return (
    <div className="relative w-[210px] rounded-[2rem] border-[6px] border-slate-800 bg-slate-800 shadow-2xl">
      <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-700" />
      <div className="overflow-hidden rounded-[1.5rem] bg-white pt-5">
        <div className="mx-3 flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-[11px] text-slate-500">
          <Icons.keywords className="h-3.5 w-3.5" /> tu negocio cerca de mí
        </div>
        <div className="mx-3 mt-2 h-20 rounded-lg bg-gradient-to-br from-emerald-100 via-sky-100 to-emerald-50" />
        <div className="p-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-bold text-brand-navy">Tu Negocio</div>
              <div className="flex items-center gap-1 text-[11px]">
                <span className="font-semibold text-slate-700">4.9</span>
                <Stars className="h-3 w-3" />
                <span className="text-slate-400">(30)</span>
              </div>
              <div className="text-[10px] text-slate-500">
                Negocio local · <span className="text-brand-green">Abierto</span>
              </div>
            </div>
            <span className="rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold text-brand-greenDark">#1</span>
          </div>
          <div className="mt-3 grid grid-cols-4 gap-1 text-center text-[9px] font-semibold text-brand-blue">
            <div className="flex flex-col items-center gap-1 rounded-lg py-1.5"><Icons.phone className="h-4 w-4" />Llamar</div>
            <div className="flex flex-col items-center gap-1 rounded-lg py-1.5"><Icons.route className="h-4 w-4" />Ruta</div>
            <div className="flex flex-col items-center gap-1 rounded-lg py-1.5"><Icons.star className="h-4 w-4" />Guardar</div>
            <div className="flex flex-col items-center gap-1 rounded-lg py-1.5"><Icons.web className="h-4 w-4" />Sitio</div>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1">
            <div className="h-10 rounded bg-slate-100" /><div className="h-10 rounded bg-slate-100" /><div className="h-10 rounded bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* Mockup de laptop mostrando el sitio web del negocio */
function LaptopMock() {
  return (
    <div className="w-full max-w-md">
      <div className="rounded-t-xl border-[6px] border-slate-800 bg-white">
        <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          <span className="ml-2 flex-1 rounded bg-white px-2 py-0.5 text-[10px] text-slate-400">tunegocio.com</span>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="h-3 w-20 rounded bg-brand-navy/80" />
            <div className="flex gap-1.5">
              <div className="h-2 w-8 rounded bg-slate-200" /><div className="h-2 w-8 rounded bg-slate-200" /><div className="h-2 w-8 rounded bg-brand-green" />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <div className="h-2.5 w-24 rounded bg-slate-800" />
              <div className="mt-1.5 h-2 w-20 rounded bg-slate-300" />
              <div className="mt-1 h-2 w-16 rounded bg-slate-300" />
              <div className="mt-3 h-5 w-20 rounded-full bg-brand-green" />
            </div>
            <div className="h-20 rounded-lg bg-gradient-to-br from-sky-100 to-emerald-100" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            <div className="h-10 rounded-lg bg-slate-100" /><div className="h-10 rounded-lg bg-slate-100" /><div className="h-10 rounded-lg bg-slate-100" />
          </div>
        </div>
      </div>
      <div className="mx-auto h-2 w-[112%] -translate-x-[5%] rounded-b-xl bg-slate-800" />
      <div className="mx-auto h-1 w-16 rounded-b-lg bg-slate-700" />
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== Header ===== */}
      <header className="glass-dark sticky top-0 z-50 border-b border-white/10">
        <div className="container-x flex items-center justify-between py-3.5">
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            SEO<span className="text-brand-green">Local</span>
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#productos" className="transition hover:text-white">Productos</a>
            <a href="#como" className="transition hover:text-white">Cómo funciona</a>
            <a href="#faq" className="transition hover:text-white">Preguntas</a>
            <a href="#precio" className="transition hover:text-white">Precio</a>
            <Link href="/blog" className="transition hover:text-white">Blog</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="press hidden rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-greenDark sm:inline-block">
              Contratar
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />

        <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" /> La plataforma de marketing local todo-en-uno
            </span>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
              Todo tu marketing local, en <GoogleWord />
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-300">
              Una sola plataforma con todo lo que tu negocio necesita para{" "}
              <strong className="text-white">aparecer primero en Google</strong>, conseguir reseñas, responder clientes y crecer.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={waLink(`Hola, quiero contratar el paquete de SEO Local de $${PLAN.price}.`)} target="_blank" rel="noopener noreferrer" className="press group inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-bold text-white shadow-xl shadow-brand-green/30 transition hover:bg-brand-greenDark">
                Empezar por ${PLAN.price}
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <a href="#productos" className="press inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10">
                Ver la plataforma
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5"><Stars className="h-4 w-4" /> 30 reseñas</span>
              <span className="hidden sm:inline">·</span>
              <span>Inversión única</span>
              <span className="hidden sm:inline">·</span>
              <span>Sin mensualidades</span>
            </div>
          </div>

          {/* Mockup del panel */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-floaty">
              <PanelMock />
            </div>
            <div className="absolute -bottom-8 left-0 hidden animate-floaty sm:block" style={{ animationDelay: "1.5s" }}>
              <LeadsRing />
            </div>
          </div>
        </div>

        {/* franja de métricas */}
        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <div className="container-x grid grid-cols-2 gap-4 py-8 text-center md:grid-cols-4">
            {[["8", "Productos integrados"], ["30+", "Reseñas positivas"], ["24/7", "Bot de WhatsApp"], ["$599", "Desde"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-black text-white">{n}</div>
                <div className="mt-1 text-sm text-slate-400">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Logos ===== */}
      <section className="bg-white py-14">
        <div className="container-x">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
            Negocios que ya confían en nosotros
          </p>
          <LogoMarquee />
        </div>
      </section>

      {/* ===== Productos (plataforma) ===== */}
      <section id="productos" className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Una plataforma, todo incluido</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">
              8 productos que trabajan <span className="text-brand-green">juntos</span>
            </h2>
            <p className="mt-3 text-slate-500">Cada herramienta de marketing local que tu negocio necesita, integrada en un solo lugar.</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((p, i) => {
              const Icon = Icons[p.icon] ?? Icons.check;
              return (
                <Reveal key={p.id} delay={(i % 4) * 80}>
                  <div className="group spring relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white hover:-translate-y-2 hover:border-transparent hover:shadow-soft">
                    {/* cabecera con degradado */}
                    <div className={`relative flex h-28 items-center justify-center overflow-hidden bg-gradient-to-br ${p.color}`}>
                      <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 25% 25%, #fff 1.5px, transparent 1.5px)", backgroundSize: "18px 18px" }} />
                      {/* brillo que barre al pasar el mouse */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      {/* icono grande decorativo de fondo */}
                      <Icon className="pointer-events-none absolute -bottom-4 -right-3 h-24 w-24 text-white/15 transition-transform duration-700 group-hover:rotate-6" />
                      {/* icono principal en círculo de vidrio */}
                      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/25 backdrop-blur-sm ring-1 ring-white/40 transition duration-500 group-hover:scale-110 group-hover:bg-white/35">
                        <Icon className="h-7 w-7 text-white drop-shadow" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display text-lg font-bold text-brand-navy">{p.name}</h3>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-green">{p.tagline}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                      <ul className="mt-3 space-y-1.5">
                        {p.features.map((ft) => (
                          <li key={ft} className="flex items-center gap-2 text-xs text-slate-500">
                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-green-100 text-brand-greenDark"><Icons.check className="h-2.5 w-2.5" /></span>
                            {ft}
                          </li>
                        ))}
                      </ul>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand-green opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                        Saber más →
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10 text-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 rounded-2xl bg-brand-navy px-8 py-6 text-white">
              <span className="font-display text-lg font-bold">Todos los productos, un solo precio.</span>
              <a href={waLink(`Hola, quiero contratar el paquete de SEO Local de $${PLAN.price}.`)} target="_blank" rel="noopener noreferrer" className="press rounded-full bg-brand-green px-6 py-3 font-bold text-white transition hover:bg-brand-greenDark">
                Empezar por ${PLAN.price} →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Presencia + Reputación ===== */}
      <section className="py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Visibilidad + reputación</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">
              Tu negocio, <span className="text-brand-green">imposible de ignorar</span>
            </h2>
            <p className="mt-3 text-slate-500">Apareces en el mapa cuando te buscan, y tus reseñas generan confianza al instante.</p>
          </Reveal>
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            <Reveal><MapCard /></Reveal>
            <Reveal delay={120}>
              <StackedReviews />
              <p className="mt-6 text-center text-sm text-slate-500 lg:text-left">
                Reseñas reales de clientes que hoy encuentran tu negocio primero.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Cómo funciona ===== */}
      <section id="como" className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Proceso simple</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Cómo funciona</h2>
            <p className="mt-3 text-slate-500">De la contratación a los primeros lugares de Google, sin complicaciones.</p>
          </Reveal>
          <div className="relative mt-16 grid gap-8 md:grid-cols-4">
            {/* línea conectora */}
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-8 hidden h-0.5 bg-gradient-to-r from-brand-green/30 via-brand-green/50 to-brand-green/30 md:block" />
            {STEPS.map((s, i) => {
              const Icon = Icons[s.icon] ?? Icons.check;
              return (
                <Reveal key={s.n} delay={i * 110}>
                  <div className="group relative flex h-full flex-col items-center text-center">
                    {/* badge con icono */}
                    <div className="spring relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-green to-emerald-500 text-white shadow-lg shadow-brand-green/30 group-hover:-translate-y-1">
                      <Icon className="h-8 w-8" />
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-brand-navy text-[11px] font-black text-white">{i + 1}</span>
                    </div>
                    <div className="mt-5 w-full flex-1 rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 group-hover:border-brand-green/40 group-hover:shadow-card">
                      <h3 className="font-display text-lg font-bold text-brand-navy">{s.title}</h3>
                      <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Demostración SEO ===== */}
      <section className="bg-slate-50 py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Así funciona el SEO</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">
              De la página 2… a ser <span className="text-brand-green">el primero</span>
            </h2>
            <p className="mt-4 text-slate-600">
              El 90% de las personas nunca pasa de la primera página de Google. Si tu negocio no está
              arriba, es como si no existiera. Con SEO Local subimos tu ficha al{" "}
              <strong>“map pack”</strong> — las 3 fichas con mapa que Google muestra primero.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {["Apareces en el mapa cuando buscan tu servicio", "Por encima de tu competencia directa", "Más clics, llamadas y visitas a tu negocio"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-white"><Icons.check className="h-3.5 w-3.5" /></span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}><SerpMock /></Reveal>
        </div>
      </section>

      {/* ===== WhatsApp / Referidos ===== */}
      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1"><ChatMock /></Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">LocalChat · Referidos</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">
              Responde y <span className="text-brand-green">fideliza</span> por WhatsApp
            </h2>
            <p className="mt-4 text-slate-600">
              El bot de WhatsApp responde a tus clientes al instante, 24/7. Y con los referidos,
              cada cliente feliz te trae más clientes automáticamente.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {["Respuestas automáticas al instante", "Programa de referidos con descuentos", "Nunca pierdes una consulta, ni de noche"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-white"><Icons.check className="h-3.5 w-3.5" /></span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ===== Videos ===== */}
      <section className="bg-brand-navy py-20 text-white">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Contenido audiovisual</span>
            <h2 className="mt-2 font-display text-3xl font-black sm:text-4xl">Videos que destacan tu negocio</h2>
            <p className="mt-3 text-slate-400">3 videos cortos y profesionales, listos para redes y Google.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {VIDEOS.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="group spring relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-700 to-slate-900 hover:-translate-y-1">
                  <div className="flex aspect-video items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110">
                      <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-0.5 text-xs">{v.duration}</span>
                    <span className="absolute left-3 top-3 rounded-full bg-brand-green/90 px-2.5 py-1 text-xs font-semibold">{v.tag}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold">{v.title}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Reseñas de Google ===== */}
      <section className="py-20">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Testimonios</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Reseñas reales de clientes</h2>
            <p className="mt-3 text-slate-500">Negocios que hoy aparecen primero en Google.</p>
          </Reveal>
          <Reveal><GoogleReviews /></Reveal>
        </div>
      </section>

      {/* ===== Comparación ===== */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">La diferencia</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">
              Con nosotros vs. <span className="text-slate-400">por tu cuenta</span>
            </h2>
          </Reveal>
          <Reveal className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card">
            <div className="grid grid-cols-2">
              <div className="border-r border-slate-100 bg-brand-navy p-6 text-center text-white">
                <div className="font-display text-lg font-bold">Con SEO<span className="text-brand-green">Local</span></div>
              </div>
              <div className="p-6 text-center">
                <div className="font-display text-lg font-bold text-slate-400">Por tu cuenta</div>
              </div>
            </div>
            {[
              ["Apareces primero en Google", "Peleas por visibilidad"],
              ["30 reseñas positivas gestionadas", "Pocas o ninguna reseña"],
              ["Bot de WhatsApp 24/7", "Pierdes clientes fuera de horario"],
              ["Web + videos + fotos incluidos", "Contratas todo por separado"],
              ["Un solo pago de $599", "Gastas más y sin garantía"],
            ].map(([si, no], i) => (
              <div key={i} className="grid grid-cols-2 border-t border-slate-100">
                <div className="flex items-center gap-2 border-r border-slate-100 p-4 text-sm text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-brand-greenDark"><Icons.check className="h-3 w-3" /></span>
                  {si}
                </div>
                <div className="flex items-center gap-2 p-4 text-sm text-slate-400">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">✕</span>
                  {no}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Preguntas frecuentes</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">¿Tienes dudas?</h2>
            <p className="mt-3 text-slate-500">Resolvemos las preguntas más comunes antes de empezar.</p>
          </Reveal>
          <Reveal><Faq /></Reveal>
        </div>
      </section>

      {/* ===== Precio ===== */}
      <section id="precio" className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Precio simple</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Un solo precio, todo incluido</h2>
            <p className="mt-3 text-slate-500">Sin mensualidades, sin letras chiquitas. Pagas una vez y es tuyo.</p>
          </Reveal>

          <div className="mx-auto mt-12 max-w-lg">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border-2 border-brand-green bg-white p-8 shadow-soft sm:p-10">
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-brand-green px-4 py-1.5 text-xs font-bold uppercase text-white">Oferta completa</div>
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Todo por solo</p>
                  <div className="mt-2 flex items-start justify-center">
                    <span className="mt-3 font-display text-3xl font-bold text-brand-navy">$</span>
                    <span className="font-display text-7xl font-black leading-none text-brand-navy">{PLAN.price}</span>
                    <span className="mt-4 ml-2 text-left text-sm text-slate-400 line-through">$1,200</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-400">{PLAN.billing}</p>
                </div>

                <ul className="mx-auto mt-8 max-w-sm space-y-2.5 text-left">
                  {PLAN.features.map((f) => (
                    <li key={f.id} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-brand-greenDark">
                        <Icons.check className="h-3 w-3" />
                      </span>
                      {f.title}
                    </li>
                  ))}
                </ul>

                {/* bonos */}
                <div className="mx-auto mt-6 max-w-sm rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-wide text-brand-green">🎁 Bonos incluidos</div>
                  <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                    <li>✓ Configuración completa, lista para usar</li>
                    <li>✓ Soporte por WhatsApp durante el proceso</li>
                    <li>✓ Panel para ver tus resultados</li>
                  </ul>
                </div>

                <a href={waLink(`Hola, quiero contratar el paquete de SEO Local de $${PLAN.price}.`)} target="_blank" rel="noopener noreferrer" className="press mt-8 block rounded-full bg-brand-green px-6 py-4 text-center text-lg font-bold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-greenDark">
                  Quiero contratar ahora
                </a>

                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-brand-greenDark"><Icons.check className="h-3 w-3" /></span>
                  Garantía de satisfacción · Pago único · Sin mensualidades
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <section className="relative overflow-hidden bg-brand-green py-16 text-center text-white">
        <div className="dot-grid absolute inset-0 opacity-20" />
        <div className="container-x relative">
          <h2 className="font-display text-2xl font-black sm:text-3xl">Aparece primero. Destaca siempre. Crece sin límites.</h2>
          <p className="mt-2 text-lg text-green-50">¡Tu negocio merece ser encontrado!</p>
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="press mt-6 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-brand-greenDark shadow-lg transition hover:bg-slate-100">
            Empezar ahora →
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-brand-navy pt-14 text-slate-400">
        <div className="container-x grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-lg font-extrabold text-white">SEO<span className="text-brand-green">Local</span></span>
            <p className="mt-3 max-w-xs text-sm">La plataforma de marketing local todo-en-uno para que tu negocio crezca en Google.</p>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22C17.5 21.84 22 17.4 22 11.94 22 6.48 17.5 2 12.04 2z" /></svg>
              {WHATSAPP.display}
            </a>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold text-white">Productos</div>
            <ul className="space-y-2 text-sm">
              {PRODUCTS.slice(0, 5).map((p) => (
                <li key={p.id}><a href="#productos" className="transition hover:text-white">{p.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold text-white">Enlaces</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#como" className="transition hover:text-white">Cómo funciona</a></li>
              <li><a href="#faq" className="transition hover:text-white">Preguntas frecuentes</a></li>
              <li><a href="#precio" className="transition hover:text-white">Precio</a></li>
              <li><Link href="/blog" className="transition hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold text-white">Contacto</div>
            <ul className="space-y-2 text-sm">
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp: {WHATSAPP.display}</a></li>
              <li><a href="/pedido" className="transition hover:text-white">Formulario de contacto</a></li>
              <li><Link href="/dashboard" className="transition hover:text-white">Panel de administración</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs">
          © {new Date().getFullYear()} SEOLocal · Aparece primero en Google.
        </div>
      </footer>
    </main>
  );
}
