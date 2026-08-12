import Link from "next/link";
import { PLAN } from "@/lib/plan";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import TestimonialsSlider from "@/components/TestimonialsSlider";

const GoogleWord = () => (
  <span className="whitespace-nowrap">
    <span className="text-brand-blue">G</span>
    <span className="text-brand-red">o</span>
    <span className="text-brand-yellow">o</span>
    <span className="text-brand-blue">g</span>
    <span className="text-brand-green">l</span>
    <span className="text-brand-red">e</span>
  </span>
);

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* ===== Header ===== */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
        <div className="container-x flex items-center justify-between py-3.5">
          <span className="text-xl font-extrabold tracking-tight text-brand-navy">
            SEO<span className="text-brand-green">Local</span>
          </span>
          <nav className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#servicios" className="transition hover:text-brand-blue">Servicios</a>
            <a href="#resultados" className="transition hover:text-brand-blue">Resultados</a>
            <a href="#precio" className="transition hover:text-brand-blue">Precio</a>
            <Link href="/blog" className="transition hover:text-brand-blue">Blog</Link>
          </nav>
          <Link
            href="/pedido"
            className="rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-brand-greenDark hover:shadow-md"
          >
            Contratar
          </Link>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

        <div className="container-x relative grid items-center gap-12 py-16 md:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-green" /> SEO Local · Resultados reales
            </span>
            <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Posiciona tu negocio en <GoogleWord />
            </h1>
            <p className="mt-4 inline-block rounded-lg bg-brand-green px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-white shadow-sm">
              Más visibilidad · Más clientes · Más ventas
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-600">
              Servicio completo de SEO Local para que tu negocio{" "}
              <strong className="text-brand-greenDark">aparezca primero en Google</strong> y destaque
              sobre la competencia.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/pedido"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3.5 font-bold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-greenDark"
              >
                Contratar por ${PLAN.price}
                <span className="transition group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-700 transition hover:border-brand-blue hover:text-brand-blue"
              >
                Ver qué incluye
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400">★★★★★</span> 50 reseñas
              </div>
              <div>·</div>
              <div>Inversión única</div>
              <div>·</div>
              <div>Sin mensualidades</div>
            </div>
          </div>

          {/* Mockup de resultado en Google */}
          <div className="relative animate-fade-up">
            <div className="animate-floaty rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
              {/* barra de búsqueda */}
              <div className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-500">
                <span className="text-brand-blue">🔍</span> tu negocio cerca de mí
              </div>
              {/* mini mapa */}
              <div className="mt-3 flex h-24 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-blue-50">
                <span className="text-3xl">📍</span>
              </div>
              {/* ficha del negocio */}
              <div className="mt-3 rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-lg font-bold text-brand-navy">Tu Negocio</div>
                    <div className="mt-0.5 text-sm">
                      <span className="font-semibold text-slate-700">4.9</span>{" "}
                      <span className="text-yellow-400">★★★★★</span>{" "}
                      <span className="text-slate-400">(50)</span>
                    </div>
                    <div className="text-sm text-slate-500">
                      Negocio local · <span className="font-medium text-brand-green">Abierto</span>
                    </div>
                  </div>
                  <div className="rounded-lg bg-green-50 px-2 py-1 text-xs font-bold text-brand-greenDark">
                    #1
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-4 gap-1 text-center text-[11px] font-semibold text-brand-blue">
                  {[["📞", "Llamar"], ["🧭", "Ruta"], ["🔖", "Guardar"], ["🌐", "Sitio"]].map(([i, l]) => (
                    <div key={l} className="rounded-lg py-2 transition hover:bg-blue-50">
                      <div className="text-base">{i}</div>
                      {l}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* etiqueta flotante */}
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-brand-navy px-4 py-3 text-white shadow-lg">
              <div className="text-xs text-slate-300">Posición en Google</div>
              <div className="text-lg font-black text-brand-green">↑ Primeros lugares</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Franja de confianza ===== */}
      <section className="border-y border-slate-100 bg-slate-50/60">
        <div className="container-x grid grid-cols-2 gap-4 py-8 text-center md:grid-cols-4">
          {[
            ["50+", "Reseñas positivas"],
            ["7", "Entregables incluidos"],
            ["24/7", "Blog con IA activo"],
            ["$599", "Pago único"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-3xl font-black text-brand-navy">{n}</div>
              <div className="mt-1 text-sm text-slate-500">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Logos de empresas que confían ===== */}
      <section className="py-14">
        <div className="container-x">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
            Negocios que ya confían en nosotros
          </p>
          <LogoMarquee />
        </div>
      </section>

      {/* ===== Servicios ===== */}
      <section id="servicios" className="py-20">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">
              Todo incluido
            </span>
            <h2 className="mt-2 text-3xl font-black text-brand-navy sm:text-4xl">
              ¿Qué incluye este servicio?
            </h2>
            <p className="mt-3 text-slate-500">
              Un paquete completo para dominar las búsquedas locales de tu zona.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLAN.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-green/40 hover:shadow-soft">
                  <div className="absolute right-4 top-4 text-6xl font-black text-slate-50 transition group-hover:text-green-50">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-green/10 text-2xl">
                    {f.icon}
                  </div>
                  <h3 className="relative mt-4 text-lg font-bold text-brand-navy">{f.title}</h3>
                  <p className="relative mt-1.5 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonios (slider) ===== */}
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">
              Testimonios
            </span>
            <h2 className="mt-2 text-3xl font-black text-brand-navy sm:text-4xl">
              Lo que dicen nuestros clientes
            </h2>
            <p className="mt-3 text-slate-500">
              Negocios reales que hoy aparecen primero en Google.
            </p>
          </Reveal>
          <Reveal>
            <TestimonialsSlider />
          </Reveal>
        </div>
      </section>

      {/* ===== Resultados ===== */}
      <section id="resultados" className="relative overflow-hidden bg-brand-navy py-20 text-white">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="container-x relative grid gap-12 md:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">
              Resultados reales
            </span>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Tu negocio, imposible de ignorar 📈
            </h2>
            <ul className="mt-6 space-y-3">
              {PLAN.results.map((r) => (
                <li key={r} className="flex items-center gap-3 text-lg text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-sm text-white">
                    ✓
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black">
                <span className="text-brand-blue">G</span>
              </span>
              <div>
                <div className="text-yellow-400">★★★★★</div>
                <div className="font-bold">50 reseñas positivas</div>
              </div>
            </div>
            <p className="mt-4 text-slate-300">
              Impulsa tu reputación y genera confianza en nuevos clientes desde el primer día.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                ["+300%", "Visibilidad"],
                ["+150%", "Llamadas"],
                ["#1", "En el mapa"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-xl bg-white/5 p-4">
                  <div className="text-2xl font-black text-brand-green">{n}</div>
                  <div className="mt-1 text-xs text-slate-300">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-xl bg-white/5 p-4">
              <div className="text-sm text-yellow-400">★★★★★</div>
              <p className="mt-1 text-sm text-slate-200">
                “¡Excelente servicio! Muy recomendados. Ahora nos encuentran fácil.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Precio ===== */}
      <section id="precio" className="bg-slate-50 py-20">
        <div className="container-x">
          <div className="mx-auto max-w-lg">
            <div className="relative overflow-hidden rounded-3xl border-2 border-brand-green bg-white p-8 text-center shadow-soft sm:p-10">
              <div className="absolute right-0 top-0 rounded-bl-2xl bg-brand-green px-4 py-1.5 text-xs font-bold uppercase text-white">
                Oferta completa
              </div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-green">
                Todo por solo
              </p>
              <div className="mt-2 flex items-start justify-center">
                <span className="mt-3 text-3xl font-bold text-brand-navy">$</span>
                <span className="text-7xl font-black leading-none text-brand-navy">{PLAN.price}</span>
              </div>
              <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-400">
                {PLAN.billing}
              </p>

              <ul className="mx-auto mt-8 max-w-sm space-y-2.5 text-left">
                {PLAN.features.map((f) => (
                  <li key={f.title} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs text-brand-greenDark">
                      ✓
                    </span>
                    {f.title}
                  </li>
                ))}
              </ul>

              <Link
                href="/pedido"
                className="mt-8 block rounded-full bg-brand-green px-6 py-4 text-lg font-bold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-greenDark"
              >
                Quiero contratar ahora
              </Link>
              <p className="mt-3 text-xs text-slate-400">Sin mensualidades · Pago único</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <section className="bg-brand-green py-14 text-center text-white">
        <div className="container-x">
          <h2 className="text-2xl font-black sm:text-3xl">
            🎯 Aparece primero. Destaca siempre. Crece sin límites.
          </h2>
          <p className="mt-2 text-lg text-green-50">¡Tu negocio merece ser encontrado!</p>
          <Link
            href="/pedido"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3.5 font-bold text-brand-greenDark shadow-lg transition hover:bg-slate-100"
          >
            Empezar ahora →
          </Link>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="bg-brand-navy py-8 text-center text-slate-300">
        <div className="container-x">
          <span className="text-lg font-extrabold text-white">
            SEO<span className="text-brand-green">Local</span>
          </span>
          <p className="mt-2 text-sm">Posiciona tu negocio en Google y crece sin límites.</p>
          <p className="mt-4 text-xs">
            <Link href="/dashboard" className="text-slate-400 underline hover:text-white">
              Acceso panel de administración
            </Link>
          </p>
        </div>
      </footer>
    </main>
  );
}
