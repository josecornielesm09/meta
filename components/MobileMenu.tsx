"use client";
import { useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/plan";

const LINKS = [
  { href: "#productos", label: "Productos" },
  { href: "#como", label: "Cómo funciona" },
  { href: "#faq", label: "Preguntas" },
  { href: "#precio", label: "Precio" },
  { href: "/blog", label: "Blog" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button aria-label="Menú" onClick={() => setOpen((v) => !v)} className="flex h-10 w-10 items-center justify-center rounded-lg text-white">
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-brand-navy px-5 pb-5 pt-2 shadow-xl">
          <nav className="flex flex-col">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-white/5 py-3 font-medium text-slate-200">
                {l.label}
              </Link>
            ))}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="mt-4 rounded-full bg-brand-green px-5 py-3 text-center font-bold text-white">
              Contratar por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
