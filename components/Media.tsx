"use client";

import { useState } from "react";

// Muestra una imagen desde /public. Si el archivo no existe todavía,
// muestra el contenido de respaldo (fallback) para que nunca se vea roto.
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
  const [failed, setFailed] = useState(false);
  if (failed) return <>{fallback}</>;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} loading="lazy" className={className} onError={() => setFailed(true)} />;
}
