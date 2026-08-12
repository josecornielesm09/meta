"use client";

import { Children, useEffect, useRef, useState } from "react";

// Slider con autoplay, arrastrable (touch/mouse), puntos y pausa al interactuar.
export default function AutoSlider({
  children,
  interval = 4000,
  labels = [],
}: {
  children: React.ReactNode;
  interval?: number;
  labels?: string[];
}) {
  const slides = Children.toArray(children);
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [drag, setDrag] = useState(0);
  const [dragging, setDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const g = useRef({ startX: 0, active: false, width: 0 });

  // autoplay (pausa mientras se arrastra)
  useEffect(() => {
    if (dragging || count <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(t);
  }, [dragging, count, interval, index]);

  function down(e: React.PointerEvent) {
    const el = trackRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    g.current = { startX: e.clientX, active: true, width: el.offsetWidth };
    setDragging(true);
  }
  function move(e: React.PointerEvent) {
    if (!g.current.active) return;
    let o = e.clientX - g.current.startX;
    if ((index === 0 && o > 0) || (index === count - 1 && o < 0)) o *= 0.35;
    setDrag(o);
  }
  function up() {
    if (!g.current.active) return;
    g.current.active = false;
    const th = g.current.width * 0.2;
    let t = index;
    if (drag < -th) t = Math.min(count - 1, index + 1);
    else if (drag > th) t = Math.max(0, index - 1);
    setIndex(t);
    setDrag(0);
    setDragging(false);
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="overflow-hidden rounded-2xl"
        style={{ cursor: dragging ? "grabbing" : "grab", touchAction: "pan-y" }}
        onPointerDown={down}
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
      >
        <div
          className="flex"
          style={{
            transform: `translateX(calc(${-index * 100}% + ${drag}px))`,
            transition: dragging ? "none" : "transform 0.6s var(--spring-soft, cubic-bezier(0.22,1,0.36,1))",
          }}
        >
          {slides.map((s, i) => (
            <div key={i} className="w-full shrink-0 select-none px-0.5">
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* puntos con etiqueta opcional */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={labels[i] || `Ir a ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-brand-green" : "w-2.5 bg-white/30 hover:bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
