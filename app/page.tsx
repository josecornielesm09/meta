import Link from "next/link";
import { PLAN, waLink, SITE, CTA, BUSINESS_TYPES, BEFORE, AFTER } from "@/lib/plan";
import { Icons, Stars } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import LogoMarquee from "@/components/LogoMarquee";
import PanelMock from "@/components/PanelMock";
import ContentSlider from "@/components/ContentSlider";
import Media from "@/components/Media";
import MobileMenu from "@/components/MobileMenu";
import TypingGoogle from "@/components/TypingGoogle";
import MouseGlow from "@/components/MouseGlow";
import ReviewsSlider from "@/components/ReviewsSlider";

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

const HERO_CHIPS = [
  "Google Business", "Página web SEO", "Palabras clave", "3 videos", "5 imágenes", "30 reseñas",
];

const waMain = () => waLink("Hola, quiero posicionar mi negocio en Google.");

export default function HomePage() {
  return (
    <main className="overflow-x-hidden pb-16 sm:pb-0">
      {/* ===== Header ===== */}
      <header className="glass-dark sticky top-0 z-50 overflow-hidden border-b border-white/10">
        <MouseGlow color="rgba(22,163,74,0.35)" size={220} />
        <div className="container-x relative z-10 flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-2.5">
            <img src={SITE.logo} alt={SITE.name} className="h-11 w-auto" />
            <span className="hidden font-display text-sm font-bold leading-tight text-white sm:block">
              Promociones<br /><span className="text-brand-green">El Valle 956</span>
            </span>
          </Link>
          <nav className="hidden gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#incluye" className="transition hover:text-white">Qué incluye</a>
            <a href="#precio" className="transition hover:text-white">Precio</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={waMain()} target="_blank" rel="noopener noreferrer" className="press hidden rounded-full bg-brand-green px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-greenDark sm:inline-block">
              Contratar
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* ===== 1. Hero ===== */}
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />

        <div className="container-x relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:py-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200">
              <span className="h-2 w-2 animate-pulse rounded-full bg-brand-green" /> Sistema de Posicionamiento Local · Negocios locales
            </span>
            <h1 className="mt-5 font-display text-3xl font-black leading-[1.08] sm:text-4xl lg:text-5xl">
              Haz que más clientes encuentren tu negocio en <TypingGoogle />
            </h1>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
              Optimiza la presencia de tu negocio con Google Business, una página web preparada para SEO, contenido profesional y una estrategia para fortalecer tu reputación en Google.
            </p>

            {/* chips de lo incluido */}
            <div className="mt-5 flex flex-wrap gap-2">
              {HERO_CHIPS.map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">
                  <Icons.check className="h-3 w-3 text-brand-green" /> {c}
                </span>
              ))}
            </div>

            {/* precio + CTA */}
            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href={waMain()} target="_blank" rel="noopener noreferrer" className="press group inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-4 text-base font-bold text-white shadow-xl shadow-brand-green/30 transition hover:bg-brand-greenDark">
                {CTA}
                <span className="transition group-hover:translate-x-1">→</span>
              </a>
              <div className="text-sm text-slate-300">
                <span className="font-display text-2xl font-black text-white">${PLAN.price}</span> · pago único
              </div>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <Stars className="h-4 w-4" /> 30 reseñas incluidas · Negocios locales en McAllen, TX
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="animate-floaty"><PanelMock /></div>
          </div>
        </div>
      </section>

      {/* ===== 2. Prueba / confianza ===== */}
      <section className="bg-white py-12">
        <div className="container-x">
          <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-slate-400">
            Negocios locales que confían en nosotros
          </p>
          <LogoMarquee />
        </div>
      </section>

      {/* ===== 3. Todo lo que incluye ===== */}
      <section id="incluye" className="bg-slate-50 py-12 sm:py-16">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">La oferta completa</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Todo lo que incluye</h2>
            <p className="mt-3 text-slate-500">Un sistema completo para fortalecer la presencia de tu negocio en Google.</p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PLAN.features.map((f, i) => {
              const Icon = Icons[f.id] ?? Icons.check;
              const isReviews = f.id === "reviews";
              return (
                <Reveal key={f.id} delay={(i % 3) * 80}>
                  <div className={`spring flex h-full items-start gap-4 rounded-2xl border bg-white p-5 hover:-translate-y-1 hover:shadow-soft ${isReviews ? "border-brand-green/50 ring-1 ring-brand-green/20" : "border-slate-200"}`}>
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${isReviews ? "bg-brand-green text-white" : "bg-brand-navy text-brand-green"}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-brand-navy">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Un solo ecosistema (imagen del cliente con respaldo al slider) */}
          <Reveal className="mt-10">
            {/* respaldo cuando aún no subes la imagen */}
            {(() => {
              const Fallback = (
                <div>
                  <div className="text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Contenido optimizado</span>
                    <h3 className="mt-2 font-display text-2xl font-black text-brand-navy sm:text-3xl">Así se verá tu negocio</h3>
                    <p className="mt-2 text-sm text-slate-500">Desliza para ver tu página web, videos, imágenes y perfil de Google.</p>
                  </div>
                  <div className="mx-auto mt-8 max-w-2xl"><ContentSlider /></div>
                </div>
              );
              return (
                <>
                  <div className="hidden lg:block">
                    <Media src="/media/ecosistema-desktop.png" alt="Un solo ecosistema: Google Business, fotos, publicaciones, reseñas y calificación" className="mx-auto w-full max-w-5xl" fallback={Fallback} />
                  </div>
                  <div className="lg:hidden">
                    <Media src="/media/ecosistema-mobile.png" alt="Un solo ecosistema para más visibilidad y más clientes" className="mx-auto w-full max-w-md" fallback={Fallback} />
                  </div>
                </>
              );
            })()}
          </Reveal>
        </div>
      </section>

      {/* ===== 5. Antes / Después ===== */}
      <section className="bg-slate-50 py-12 sm:py-16">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">La transformación</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">De una presencia básica a una presencia profesional</h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6">
                <div className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-slate-500">Antes</div>
                <ul className="space-y-2.5">
                  {BEFORE.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm text-slate-500">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400">✕</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-2xl border-2 border-brand-green bg-white p-6 shadow-card">
                <div className="mb-4 inline-flex rounded-full bg-brand-green px-3 py-1 text-xs font-bold uppercase text-white">Después</div>
                <ul className="space-y-2.5">
                  {AFTER.map((t) => (
                    <li key={t} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-brand-greenDark"><Icons.check className="h-3 w-3" /></span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Tipos de negocios ===== */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">¿Para quién es?</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Ideal para negocios locales</h2>
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {BUSINESS_TYPES.map((b) => (
              <span key={b.label} className="spring inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-card">
                <span className="text-lg">{b.icon}</span> {b.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Reseñas (slider) ===== */}
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <Reveal className="mx-auto mb-8 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Testimonios</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Lo que dicen nuestros clientes</h2>
          </Reveal>
          <Reveal><ReviewsSlider /></Reveal>
        </div>
      </section>

      {/* ===== Precio ===== */}
      <section id="precio" className="bg-slate-50 py-12 sm:py-16">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-brand-green">Una inversión, todo incluido</span>
            <h2 className="mt-2 font-display text-3xl font-black text-brand-navy sm:text-4xl">Todo lo necesario para fortalecer tu presencia en Google</h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-lg">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl border-2 border-brand-green bg-white p-8 shadow-soft sm:p-10">
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-brand-green px-4 py-1.5 text-xs font-bold uppercase text-white">Oferta completa</div>
                <div className="text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-brand-green">Todo por solo</p>
                  <div className="mt-2 flex items-start justify-center">
                    <span className="mt-3 font-display text-3xl font-bold text-brand-navy">$</span>
                    <span className="font-display text-7xl font-black leading-none text-brand-navy">{PLAN.price}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-slate-400">Pago único</p>
                </div>
                <ul className="mx-auto mt-8 max-w-sm space-y-2.5 text-left">
                  {PLAN.features.map((f) => (
                    <li key={f.id} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-brand-greenDark"><Icons.check className="h-3 w-3" /></span>
                      {f.title}
                    </li>
                  ))}
                </ul>
                <a href={waMain()} target="_blank" rel="noopener noreferrer" className="press mt-8 block rounded-full bg-brand-green px-6 py-4 text-center text-lg font-bold text-white shadow-lg shadow-brand-green/25 transition hover:bg-brand-greenDark">
                  {CTA}
                </a>
                <p className="mt-3 text-center text-xs text-slate-400">Sin mensualidades · Pago único</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <section className="relative overflow-hidden bg-brand-green py-16 text-center text-white">
        <div className="dot-grid absolute inset-0 opacity-20" />
        <div className="container-x relative">
          <h2 className="mx-auto max-w-2xl font-display text-2xl font-black leading-tight sm:text-4xl">
            Tus clientes ya están buscando en Google. Haz que encuentren tu negocio.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-green-50">
            Mejora tu presencia digital con un sistema completo diseñado para negocios locales.
          </p>
          <a href={waMain()} target="_blank" rel="noopener noreferrer" className="press mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-brand-greenDark shadow-lg transition hover:bg-slate-100">
            {CTA} · ${PLAN.price}
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="relative overflow-hidden bg-brand-navy pt-14 text-slate-400">
        <MouseGlow color="rgba(26,115,232,0.3)" size={320} />
        <div className="container-x relative z-10 grid gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <img src={SITE.logo} alt={SITE.name} className="h-14 w-auto" />
            <p className="mt-3 max-w-xs text-sm">Sistema de Posicionamiento Local para que tu negocio destaque en Google.</p>
            <p className="mt-3 flex items-center gap-2 text-sm">
              <svg className="h-4 w-4 text-brand-green" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 21s-7-6.3-7-11a7 7 0 0114 0c0 4.7-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>
              {SITE.address}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition hover:scale-110">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22C17.5 21.84 22 17.4 22 11.94 22 6.48 17.5 2 12.04 2z" /></svg>
              </a>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 text-white transition hover:scale-110">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></svg>
              </a>
              <a href={SITE.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877f2] text-white transition hover:scale-110">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold text-white">Incluye</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#incluye" className="transition hover:text-white">Google Business</a></li>
              <li><a href="#incluye" className="transition hover:text-white">Página web SEO</a></li>
              <li><a href="#incluye" className="transition hover:text-white">Contenido visual</a></li>
              <li><a href="#reputacion" className="transition hover:text-white">30 reseñas</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold text-white">Enlaces</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#sistema" className="transition hover:text-white">El sistema</a></li>
              <li><a href="#precio" className="transition hover:text-white">Precio</a></li>
              <li><a href="#faq" className="transition hover:text-white">Preguntas frecuentes</a></li>
              <li><Link href="/dashboard" className="transition hover:text-white">Panel</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-sm font-bold text-white">Contacto</div>
            <ul className="space-y-2 text-sm">
              <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">WhatsApp directo</a></li>
              <li>McAllen, TX</li>
            </ul>
          </div>
        </div>
        <div className="relative z-10 border-t border-white/10 py-6 text-center text-xs">
          © {new Date().getFullYear()} {SITE.name} · McAllen, TX
        </div>
      </footer>
    </main>
  );
}
