"use client";

import { useEffect, useRef } from "react";

// Resplandor circular que sigue el cursor e ilumina el fondo de su sección (solo desktop).
export default function MouseGlow({
  color = "rgba(22,163,74,0.28)",
  size = 260,
}: {
  color?: string;
  size?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = ref.current;
    const parent = glow?.parentElement;
    if (!glow || !parent) return;
    const onMove = (e: PointerEvent) => {
      const r = parent.getBoundingClientRect();
      glow.style.setProperty("--mx", `${e.clientX - r.left}px`);
      glow.style.setProperty("--my", `${e.clientY - r.top}px`);
      glow.style.opacity = "1";
    };
    const onLeave = () => (glow.style.opacity = "0");
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);
    return () => {
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden opacity-0 transition-opacity duration-300 md:block"
      style={{ background: `radial-gradient(${size}px circle at var(--mx, 50%) var(--my, 50%), ${color}, transparent 70%)` }}
    />
  );
}
