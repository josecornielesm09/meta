const LOGOS = [
  { name: "Panadería La Espiga", icon: "🥖" },
  { name: "Taller El Rápido", icon: "🔧" },
  { name: "Salón Bella Vista", icon: "💇" },
  { name: "Restaurante El Sabor", icon: "🍽️" },
  { name: "Clínica Dental Sonríe", icon: "🦷" },
  { name: "Gimnasio FitZone", icon: "🏋️" },
  { name: "Ferretería El Tornillo", icon: "🔩" },
  { name: "Cafetería Aroma", icon: "☕" },
];

// Marquee infinito con logos de empresas (CSS puro, sin JS).
export default function LogoMarquee() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <div className="group relative overflow-hidden">
      {/* difuminado en los bordes (hacia el fondo oscuro) */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[#060c18] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[#060c18] to-transparent" />
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {row.map((l, i) => (
          <div
            key={i}
            className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur"
          >
            <span className="text-xl">{l.icon}</span>
            <span className="whitespace-nowrap text-sm font-semibold text-slate-200">{l.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
