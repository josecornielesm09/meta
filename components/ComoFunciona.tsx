import Reveal from "@/components/Reveal";
import { Icons } from "@/components/Icons";
import { STEPS } from "@/lib/plan";

// Sección "Cómo funciona": línea de tiempo premium, animada y 100% responsive,
// con la paleta del logo (azul → rojo sobre base oscura).
export default function ComoFunciona() {
  return (
    <section id="como" className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      {/* halos decorativos */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-green shadow-sm">
            Proceso simple
          </span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight text-brand-navy sm:text-4xl">Cómo funciona</h2>
          <p className="mt-3 text-slate-500">De la contratación a los primeros lugares de Google, sin complicaciones.</p>
        </Reveal>

        <div className="relative mt-16 grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* línea conectora animada (solo desktop) */}
          <div className="pointer-events-none absolute left-[12%] right-[12%] top-9 hidden lg:block">
            <div className="h-[3px] w-full rounded-full bg-gradient-to-r from-brand-blue/25 via-brand-green/40 to-brand-blue/25" />
            <div className="como-flow absolute inset-0 h-[3px] rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          </div>

          {STEPS.map((s, i) => {
            const Icon = Icons[s.icon] ?? Icons.check;
            return (
              <Reveal key={s.n} delay={i * 110}>
                <div className="group relative flex h-full flex-col items-center text-center">
                  {/* badge con icono + número */}
                  <div className="relative z-10">
                    <div className="spring flex h-[70px] w-[70px] items-center justify-center rounded-[22px] bg-gradient-to-br from-brand-blue to-brand-green text-white shadow-xl shadow-brand-green/25 ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:shadow-2xl">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border-[3px] border-slate-50 bg-brand-navy text-xs font-black text-white shadow-md">
                      {i + 1}
                    </span>
                  </div>

                  {/* tarjeta */}
                  <div className="relative mt-6 w-full flex-1 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-green/30 group-hover:shadow-card">
                    <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-green transition-transform duration-300 group-hover:scale-x-100" />
                    <h3 className="font-display text-lg font-bold text-brand-navy">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
