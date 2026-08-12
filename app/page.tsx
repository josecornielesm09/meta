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

/* Ficha de Google flotante (mockup) */
function GoogleCard() {
  return (
    <div className="glass-panel w-full max-w-sm rounded-3xl p-5 text-white">
      <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm text-slate-300">
        <Icons.keywords className="h-4 w-4" /> tu negocio cerca de mí
      </div>
      <div className="mt-3 flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500/20 via-sky-500/20 to-violet-500/20">
        <span className="text-4xl">📍</span>
      </div>
      <div className="mt-4 flex items-start justify-between">
        <div>
          <div className="text-lg font-bold">Tu Negocio</div>
          <div className="mt-0.5 flex items-center gap-1.5 text-sm">
            <span className="font-semibold">4.9</span>
            <Stars className="h-3.5 w-3.5" />
            <span className="text-slate-400">(30)</span>
          </div>
          <div className="text-xs text-slate-400">Negocio local · <span className="text-brand-green">Abierto</span></div>
        </div>
        <span className="rounded-lg bg-brand-green/20 px-2 py-1 text-xs font-bold text-brand-green">#1 en Google</span>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-1.5 text-center text-[11px] font-medium text-sky-300">
        <div className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-2.5"><Icons.phone className="h-4 w-4" />Llamar</div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-2.5"><Icons.route className="h-4 w-4" />Ruta</div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-2.5"><Icons.star className="h-4 w-4" />Guardar</div>
        <div className="flex flex-col items-center gap-1 rounded-xl bg-white/5 py-2.5"><Icons.web className="h-4 w-4" />Sitio</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="bg-aurora min-h-screen overflow-x-hidden text-white">
      {/* aura de fondo animada, cubre toda la página */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="aurora-layer opacity-70" />
      </div>

      <div className="relative z-10">
        {/* ===== Nav ===== */}
        <header className="glass sticky top-0 z-50 border-b !border-white/10 !bg-white/5">
          <div className="container-x flex items-center justify-between py-3.5">
            <span className="font-display text-xl font-extrabold tracking-tight">
              SEO<span className="text-aurora">Local</span>
            </span>
            <nav className="hidden gap-8 text-sm font-medium text-slate-300 md:flex">
              <a href="#servicios" className="transition hover:text-white">Servicios</a>
              <a href="#como" className="transition hover:text-white">Cómo funciona</a>
              <a href="#precio" className="transition hover:text-white">Precio</a>
              <Link href="/blog" className="transition hover:text-white">Blog</Link>
            </nav>
            <Link href="/pedido" className="press rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-navy shadow-lg transition hover:bg-slate-100">
              Contratar
            </Link>
          </div>
        </header>

        {/* ===== Hero ===== */}
        <section className="container-x grid items-center gap-14 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" /> SEO Local · Resultados reales
            </span>
            <h1 className="mt-6 font-display text-5xl font-black leading-[0.98] tracking-[-0.03em] sm:text-6xl lg:text-[4.5rem]">
              Posiciona tu<br />negocio en <GoogleWord />
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300 sm:text-xl">
              El servicio completo de SEO Local para que{" "}
              <span className="text-aurora font-semibold">aparezcas primero</span> y destaques sobre toda tu competencia.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/pedido" className="press group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-green to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-emerald-500/30 transition hover:brightness-110">
                Contratar por ${PLAN.price}
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <a href="#servicios" className="press inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-lg font-bold text-white transition hover:bg-white/10">
                Ver qué incluye
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2"><Stars className="h-4 w-4" /> 30 reseñas reales</span>
              <span className="inline-flex items-center gap-2"><span className="text-brand-green">●</span> Pago único de ${PLAN.price}</span>
              <span className="inline-flex items-center gap-2"><span className="text-brand-green">●</span> Sin mensualidades</span>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-floaty">
              <GoogleCard />
            </div>
            <div className="glass-panel absolute -bottom-6 -left-2 hidden rounded-2xl px-5 py-3 sm:block">
              <div className="text-xs text-slate-400">Crecimiento</div>
              <div className="text-2xl font-black text-brand-green">↑ 300%</div>
            </div>
          </div>
        </section>

        {/* ===== Métricas ===== */}
        <section className="container-x">
          <div className="glass-panel grid grid-cols-2 gap-6 rounded-3xl px-6 py-8 text-center md:grid-cols-4">
            {[["30+", "Reseñas positivas"], ["7", "Servicios incluidos"], ["24/7", "Bot de WhatsApp"], ["$599", "Inversión única"]].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl font-black text-aurora sm:text-4xl">{n}</div>
                <div className="mt-1 text-sm text-slate-400">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Logos ===== */}
        <section className="py-16">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Negocios que ya confían en nosotros
          </p>
          <LogoMarquee />
        </section>

        {/* ===== Servicios (bento grid) ===== */}
        <section id="servicios" className="container-x py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">Todo incluido</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.02em] sm:text-5xl">
              Un paquete, <span className="text-aurora">todo resuelto</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400">Siete servicios que trabajan juntos para dominar las búsquedas locales.</p>
          </Reveal>

          <div className="mt-14 grid auto-rows-[minmax(0,1fr)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Tile grande destacado */}
            <Reveal className="sm:col-span-2 lg:row-span-2">
              <div className="gradient-border spring flex h-full flex-col justify-between rounded-3xl p-8 hover:-translate-y-1">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/20 text-brand-green">
                    <Icons.gbp_setup className="h-7 w-7" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">Google Business Profile</h3>
                  <p className="mt-2 max-w-sm text-slate-300">
                    Creamos y configuramos tu perfil de negocio con palabras clave estratégicas para que Google te muestre primero en tu zona.
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Ficha optimizada", "Keywords locales", "Fotos", "Categorías"].map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Tiles normales */}
            {PLAN.features.slice(1).map((f, i) => {
              const Icon = Icons[f.id] ?? Icons.check;
              return (
                <Reveal key={f.id} delay={(i % 3) * 80}>
                  <div className="glass-panel spring flex h-full flex-col rounded-3xl p-6 hover:-translate-y-1">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-brand-green">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-bold">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{f.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ===== Cómo funciona ===== */}
        <section id="como" className="container-x py-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">Proceso simple</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.02em] sm:text-5xl">Cómo funciona</h2>
          </Reveal>
          <div className="relative mt-14 grid gap-5 md:grid-cols-4">
            <div className="pointer-events-none absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div className="glass-panel spring relative h-full rounded-3xl p-6 hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-brand-green to-emerald-500 font-display text-sm font-black text-white">{s.n}</div>
                  <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-400">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== Videos ===== */}
        <section className="container-x py-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">Contenido audiovisual</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.02em] sm:text-5xl">Videos que <span className="text-aurora">venden</span></h2>
            <p className="mt-4 text-lg text-slate-400">3 videos cortos y profesionales, listos para redes y Google.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {VIDEOS.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="group glass-panel spring overflow-hidden rounded-3xl hover:-translate-y-1">
                  <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-slate-800/60 to-slate-900/60">
                    <div className="press flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand-navy shadow-xl transition duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110">
                      <svg className="ml-1 h-7 w-7" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                    <span className="absolute bottom-3 right-3 rounded bg-black/50 px-2 py-0.5 text-xs">{v.duration}</span>
                    <span className="absolute left-3 top-3 rounded-full bg-brand-green/90 px-2.5 py-1 text-xs font-semibold">{v.tag}</span>
                  </div>
                  <div className="p-5"><h3 className="font-display font-bold">{v.title}</h3></div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== Testimonios ===== */}
        <section className="container-x py-20">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">Testimonios</span>
            <h2 className="mt-3 font-display text-4xl font-black tracking-[-0.02em] sm:text-5xl">Clientes que ya <span className="text-aurora">crecieron</span></h2>
          </Reveal>
          <Reveal><TestimonialsSlider /></Reveal>
        </section>

        {/* ===== Precio ===== */}
        <section id="precio" className="container-x py-20">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <div className="gradient-border relative overflow-hidden rounded-[2rem] p-8 text-center sm:p-12">
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-gradient-to-r from-brand-green to-emerald-500 px-4 py-1.5 text-xs font-bold uppercase text-white">Oferta completa</div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-green">Todo por solo</p>
                <div className="mt-3 flex items-start justify-center">
                  <span className="mt-4 font-display text-4xl font-bold">$</span>
                  <span className="font-display text-8xl font-black leading-none tracking-tighter text-aurora">{PLAN.price}</span>
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Inversión única · sin mensualidades</p>
                <ul className="mx-auto mt-8 grid max-w-md gap-2.5 text-left sm:grid-cols-2">
                  {PLAN.features.map((f) => (
                    <li key={f.id} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/20 text-brand-green">
                        <Icons.check className="h-3 w-3" />
                      </span>
                      {f.title}
                    </li>
                  ))}
                </ul>
                <Link href="/pedido" className="press mt-9 block rounded-full bg-gradient-to-r from-brand-green to-emerald-500 px-6 py-4 text-lg font-bold text-white shadow-2xl shadow-emerald-500/30 transition hover:brightness-110">
                  Quiero contratar ahora
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== CTA final ===== */}
        <section className="container-x pb-24 pt-8">
          <Reveal>
            <div className="glass-panel relative overflow-hidden rounded-[2rem] px-8 py-16 text-center">
              <h2 className="font-display text-3xl font-black tracking-[-0.02em] sm:text-4xl">
                Aparece primero. <span className="text-aurora">Crece sin límites.</span>
              </h2>
              <p className="mt-3 text-lg text-slate-300">Tu negocio merece ser encontrado.</p>
              <Link href="/pedido" className="press mt-8 inline-block rounded-full bg-white px-9 py-4 text-lg font-bold text-brand-navy shadow-2xl transition hover:bg-slate-100">
                Empezar ahora →
              </Link>
            </div>
          </Reveal>
        </section>

        {/* ===== Footer ===== */}
        <footer className="border-t border-white/10 py-10 text-center text-slate-400">
          <div className="container-x">
            <span className="font-display text-lg font-extrabold text-white">SEO<span className="text-aurora">Local</span></span>
            <p className="mt-2 text-sm">Posiciona tu negocio en Google y crece sin límites.</p>
            <p className="mt-4 text-xs">
              <Link href="/dashboard" className="underline transition hover:text-white">Acceso panel de administración</Link>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
