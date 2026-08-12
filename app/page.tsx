import Link from "next/link";
import { PLAN, VIDEOS, STEPS } from "@/lib/plan";
import { Icons, Stars } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import TestimonialsSlider from "@/components/TestimonialsSlider";

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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur">
        <div className="container-x flex items-center justify-between py-3.5">
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            SEO<span className="text-brand-green">Local</span>
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#servicios" className="transition hover:text-white">Servicios</a>
            <a href="#como" className="transition hover:text-white">Cómo funciona</a>
            <a href="#precio" className="transition hover:text-white">Precio</a>
            <Link href="/blog" className="transition hover:text-white">Blog</Link>
          </nav>
          <Link href="/pedido" className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-greenDark">
            Contratar
          </Link>
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
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" /> SEO Local · Resultados reales
            </span>
            <h1 className="mt-5 font-display text-4xl font-black leading-[1.05] sm:text-5xl lg:text-[3.4rem]">
              Posiciona tu negocio en <GoogleWord />
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-slate-300">
              Servicio completo de SEO Local para que tu negocio{" "}
              <strong className="text-white">aparezca primero en Google</strong> y destaque sobre la competencia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/pedido" className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-bold text-white shadow-xl shadow-brand-green/30 transition hover:bg-brand-greenDark">
                Contratar por ${PLAN.price}
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <a href="#servicios" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10">
                Ver qué incluye
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

          {/* Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-floaty">
              <LaptopMock />
            </div>
            <div className="absolute -bottom-8 left-0 hidden animate-floaty sm:block" style={{ animationDelay: "1.5s" }}>
              <PhoneMock />
            </div>
          </div>
        </div>

        {/* franja de métricas */}
        <div className="relative border-t border-white/10 bg-white/[0.03]">
          <div className="container-x grid grid-cols-2 gap-4 py-8 text-center md:grid-cols-4">
            {[["30+", "Reseñas positivas"], ["7", "Entregables incluidos"], ["24/7", "Bot de WhatsApp"], ["$599", "Pago único"]].map(([n, l]) => (
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

      {/* ===== Servicios ===== */}
      <section id="servicios" className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Todo incluido</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">
              ¿Qué incluye este servicio?
            </h2>
            <p className="mt-3 text-slate-500">Un paquete completo para dominar las búsquedas locales de tu zona.</p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLAN.features.map((f, i) => {
              const Icon = Icons[f.id] ?? Icons.check;
              return (
                <Reveal key={f.id} delay={(i % 3) * 90}>
                  <div className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-soft">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold text-brand-navy">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
            {/* tarjeta destacada de cierre */}
            <Reveal delay={180}>
              <div className="flex h-full flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-green to-brand-greenDark p-6 text-white">
                <div className="font-display text-3xl font-black">7 en 1</div>
                <p className="mt-2 text-sm text-green-50">
                  Todos los servicios que necesitas para dominar Google, en un solo paquete.
                </p>
                <Link href="/pedido" className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-white px-4 py-2 text-sm font-bold text-brand-greenDark">
                  Empezar →
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Cómo funciona ===== */}
      <section id="como" className="py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Proceso simple</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Cómo funciona</h2>
            <p className="mt-3 text-slate-500">De la contratación a los primeros lugares de Google, sin complicaciones.</p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="font-display text-4xl font-black text-slate-100">{s.n}</div>
                  <h3 className="mt-2 font-display text-lg font-bold text-brand-navy">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-600">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-700 to-slate-900">
                  <div className="flex aspect-video items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-brand-navy shadow-lg transition group-hover:scale-110">
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

      {/* ===== Testimonios ===== */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Testimonios</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Lo que dicen nuestros clientes</h2>
            <p className="mt-3 text-slate-500">Negocios reales que hoy aparecen primero en Google.</p>
          </Reveal>
          <Reveal><TestimonialsSlider /></Reveal>
        </div>
      </section>

      {/* ===== Precio ===== */}
      <section id="precio" className="py-20">
        <div className="container-x">
          <div className="mx-auto max-w-lg">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border-2 border-brand-green bg-white p-8 text-center shadow-soft sm:p-10">
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-brand-green px-4 py-1.5 text-xs font-bold uppercase text-white">Oferta completa</div>
                <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Todo por solo</p>
                <div className="mt-2 flex items-start justify-center">
                  <span className="mt-3 font-display text-3xl font-bold text-brand-navy">$</span>
                  <span className="font-display text-7xl font-black leading-none text-brand-navy">{PLAN.price}</span>
                </div>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-400">{PLAN.billing}</p>
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
                <Link href="/pedido" className="mt-8 block rounded-full bg-brand-green px-6 py-4 text-lg font-bold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-greenDark">
                  Quiero contratar ahora
                </Link>
                <p className="mt-3 text-xs text-slate-400">Sin mensualidades · Pago único</p>
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
          <Link href="/pedido" className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-brand-greenDark shadow-lg transition hover:bg-slate-100">
            Empezar ahora →
          </Link>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-brand-navy py-10 text-center text-slate-400">
        <div className="container-x">
          <span className="font-display text-lg font-extrabold text-white">
            SEO<span className="text-brand-green">Local</span>
          </span>
          <p className="mt-2 text-sm">Posiciona tu negocio en Google y crece sin límites.</p>
          <p className="mt-4 text-xs">
            <Link href="/dashboard" className="underline transition hover:text-white">Acceso panel de administración</Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
