"use client";

import { useEffect, useState } from "react";
import { waLink, CTA, PLAN } from "@/lib/plan";

// Barra CTA fija en móvil, aparece tras hacer un poco de scroll.
export default function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 p-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-center font-bold text-white shadow-lg active:scale-[0.98]"
      >
        {CTA} · ${PLAN.price}
      </a>
    </div>
  );
}
