"use client";

import { useEffect, useState } from "react";

// Muestra una imagen desde /public SOLO si carga correctamente.
// Mientras no exista el archivo, muestra el respaldo (fallback) sin imágenes rotas.
export default function Media({
  src,
  alt,
  className = "",
  fallback = null,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback?: React.ReactNode;
}) {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    let active = true;
    const img = new window.Image();
    img.onload = () => active && setOk(true);
    img.onerror = () => active && setOk(false);
    img.src = src;
    return () => {
      active = false;
    };
  }, [src]);

  if (!ok) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" className={className} />;
}
