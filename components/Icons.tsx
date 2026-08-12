// Set de iconos SVG de línea (sin emojis) para un look profesional.
type Props = { className?: string };

const base = "h-6 w-6";

export const Icons: Record<string, (p: Props) => JSX.Element> = {
  gbp_setup: ({ className = base }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l1.5-5h15L21 9" /><path d="M4 9v10a1 1 0 001 1h14a1 1 0 001-1V9" />
      <path d="M3 9a2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 005 0 2.5 2.5 0 004 0" />
      <path d="M9 20v-5h6v5" />
    </svg>
  ),
  keywords: ({ className = base }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" />
    </svg>
  ),
  web: ({ className = base }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" />
      <circle cx="6" cy="6.5" r=".5" fill="currentColor" /><circle cx="8" cy="6.5" r=".5" fill="currentColor" />
    </svg>
  ),
  blog_ia: ({ className = base }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="7" width="16" height="12" rx="2" /><path d="M9 7V5a3 3 0 016 0v2" />
      <circle cx="9" cy="13" r="1" /><circle cx="15" cy="13" r="1" /><path d="M2 12v3M22 12v3" />
    </svg>
  ),
  videos: ({ className = base }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m10 9 5 3-5 3V9z" fill="currentColor" stroke="none" />
    </svg>
  ),
  imagenes: ({ className = base }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m21 16-5-5L5 20" />
    </svg>
  ),
  reviews: ({ className = base }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.2l1-5.8L3.5 9.2l5.9-.9L12 3z" fill="currentColor" stroke="none" />
    </svg>
  ),
  check: ({ className = "h-4 w-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12 5 5L20 7" />
    </svg>
  ),
  phone: ({ className = "h-5 w-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.5 2.1L8 9.8a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.7 2z" />
    </svg>
  ),
  route: ({ className = "h-5 w-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-6.3-7-11a7 7 0 0114 0c0 4.7-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
  star: ({ className = "h-4 w-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="m12 3 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9 6.7 19.2l1-5.8L3.5 9.2l5.9-.9L12 3z" />
    </svg>
  ),
};

export function Stars({ className = "h-4 w-4", count = 5 }: { className?: string; count?: number }) {
  return (
    <span className="inline-flex text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Icons.star key={i} className={className} />
      ))}
    </span>
  );
}
