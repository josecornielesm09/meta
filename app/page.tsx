import Link from "next/link";
import { PLAN } from "@/lib/plan";

export default function HomePage() {
  return (
    <main>
      {/* Header */}
      <header className="border-b border-slate-100">
        <div className="container-x flex items-center justify-between py-4">
          <span className="text-lg font-extrabold text-brand-navy">
            SEO<span className="text-brand-green">Local</span>
          </span>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#servicios" className="hover:text-brand-blue">Servicios</a>
            <a href="#resultados" className="hover:text-brand-blue">Resultados</a>
            <a href="#precio" className="hover:text-brand-blue">Precio</a>
            <Link href="/blog" className="hover:text-brand-blue">Blog</Link>
          </nav>
          <Link
            href="/pedido"
            className="rounded-lg bg-brand-green px-4 py-2 text-sm font-bold text-white hover:bg-brand-greenDark"
          >
            Contratar
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-black leading-tight text-brand-navy md:text-5xl">
              POSICIONA TU NEGOCIO EN{" "}
              <span className="text-brand-blue">G</span>
              <span className="text-brand-red">O</span>
              <span className="text-brand-yellow">O</span>
              <span className="text-brand-blue">G</span>
              <span className="text-brand-green">L</span>
              <span className="text-brand-red">E</span>
            </h1>
            <p className="mt-3 inline-block rounded-md bg-brand-green px-3 py-1 text-sm font-bold uppercase tracking-wide text-white">
              {PLAN.tagline}
            </p>
            <p className="mt-6 max-w-md text-lg text-slate-600">
              Servicio completo de SEO Local para que tu negocio{" "}
              <strong className="text-brand-green">aparezca primero en Google</strong> y destaque
              sobre la competencia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pedido"
                className="rounded-lg bg-brand-green px-6 py-3 font-bold text-white shadow hover:bg-brand-greenDark"
              >
                Contratar por ${PLAN.price}
              </Link>
              <a
                href="#servicios"
                className="rounded-lg border border-slate-300 px-6 py-3 font-bold text-slate-700 hover:border-brand-blue hover:text-brand-blue"
              >
                Ver qué incluye
              </a>
            </div>
          </div>

          {/* Mock de resultado en Google */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-lg">
            <div className="mb-3 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-500">
              🔎 tu negocio cerca de mí
            </div>
            <div className="rounded-lg bg-slate-100 p-4">
              <div className="text-xl font-bold text-brand-navy">Tu Negocio 📍</div>
              <div className="mt-1 text-sm text-yellow-500">★★★★★ <span className="text-slate-500">(50)</span></div>
              <div className="text-sm text-slate-500">Negocio local · <span className="text-brand-green">Abierto</span></div>
              <div className="mt-4 grid grid-cols-4 gap-2 text-center text-xs font-semibold text-brand-blue">
                <div>📞<br/>Llamar</div>
                <div>🧭<br/>Ruta</div>
                <div>🔖<br/>Guardar</div>
                <div>🌐<br/>Sitio</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16">
        <div className="container-x">
          <h2 className="mb-2 inline-block rounded-lg bg-brand-navy px-4 py-2 text-xl font-bold text-white">
            ¿Qué incluye este servicio?
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PLAN.features.map((f) => (
              <div key={f.title} className="rounded-xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md">
                <div className="text-3xl">{f.icon}</div>
                <h3 className="mt-3 font-bold text-brand-navy">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section id="resultados" className="bg-brand-navy py-14 text-white">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-green">📈 Resultados reales</h2>
            <ul className="mt-4 space-y-2 text-slate-200">
              {PLAN.results.map((r) => (
                <li key={r}>✓ {r}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-brand-yellow">★★★★★ 50 reseñas positivas</h2>
            <p className="mt-4 text-slate-200">
              Impulsa tu reputación y genera confianza en nuevos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Precio */}
      <section id="precio" className="py-16">
        <div className="container-x">
          <div className="mx-auto max-w-md rounded-2xl border-2 border-brand-green p-8 text-center shadow-lg">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-green">Todo por solo</p>
            <div className="my-2 text-6xl font-black text-brand-navy">${PLAN.price}</div>
            <p className="text-sm font-semibold text-slate-500">{PLAN.billing}</p>
            <ul className="my-6 space-y-2 text-left text-sm text-slate-600">
              {PLAN.features.map((f) => (
                <li key={f.title}>✅ {f.title}</li>
              ))}
            </ul>
            <Link
              href="/pedido"
              className="block rounded-lg bg-brand-green px-6 py-3 font-bold text-white hover:bg-brand-greenDark"
            >
              Quiero contratar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-green py-6 text-center text-white">
        <p className="font-bold">
          🎯 Aparece primero. Destaca siempre. Crece sin límites. · ¡Tu negocio merece ser encontrado!
        </p>
        <p className="mt-2 text-sm text-green-100">
          <Link href="/dashboard" className="underline">Acceso panel de administración</Link>
        </p>
      </footer>
    </main>
  );
}
