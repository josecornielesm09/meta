import { waLink } from "@/lib/plan";

// Botón flotante de WhatsApp, fijo en la esquina, presente en todo el sitio.
export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3.5 font-bold text-white shadow-xl shadow-green-600/30 transition hover:scale-105 hover:bg-[#20bd5a]"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg className="relative h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 004.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm5.52 14.03c-.25.7-1.47 1.36-2.02 1.41-.52.05-1.17.07-1.89-.12-.44-.14-1-.32-1.72-.63-3.02-1.31-5-4.35-5.15-4.55-.15-.2-1.23-1.64-1.23-3.13s.78-2.22 1.06-2.53c.28-.31.61-.38.81-.38l.58.01c.19.01.44-.07.68.52.25.6.85 2.07.92 2.22.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.64-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.72.81 2.01.96.3.15.5.22.57.35.07.12.07.72-.18 1.42z" />
      </svg>
      <span className="relative hidden pr-1 sm:inline">WhatsApp</span>
    </a>
  );
}
