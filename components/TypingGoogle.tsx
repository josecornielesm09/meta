"use client";

import { useEffect, useState } from "react";

const LETTERS: [string, string][] = [
  ["G", "#1a73e8"],
  ["o", "#ea4335"],
  ["o", "#fbbc05"],
  ["g", "#1a73e8"],
  ["l", "#16a34a"],
  ["e", "#ea4335"],
];

// Escribe "Google" letra por letra (efecto máquina de escribir) en bucle.
export default function TypingGoogle() {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (n < LETTERS.length) {
      const t = setTimeout(() => setN(n + 1), 170);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setN(0), 2800); // pausa y reinicia
    return () => clearTimeout(t);
  }, [n]);

  return (
    <span className="whitespace-nowrap font-display" aria-label="Google">
      <span aria-hidden="true">
        {LETTERS.slice(0, n).map(([ch, color], i) => (
          <span key={i} style={{ color }}>{ch}</span>
        ))}
        <span className="ml-0.5 inline-block w-[3px] animate-pulse self-stretch align-baseline text-brand-green">|</span>
      </span>
    </span>
  );
}
