import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function Glyph({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-[22px]", className)}
    >
      {children}
    </svg>
  );
}

/* Minimal 1.5px stroke set — one visual weight across the whole site. */
export const icons = {
  payments: (c?: string) => (
    <Glyph className={c}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2.5" />
      <path d="M2.5 10h19M6 14.5h3" />
    </Glyph>
  ),
  server: (c?: string) => (
    <Glyph className={c}>
      <rect x="3" y="3.5" width="18" height="7" rx="2" />
      <rect x="3" y="13.5" width="18" height="7" rx="2" />
      <path d="M6.5 7h.01M6.5 17h.01" />
    </Glyph>
  ),
  database: (c?: string) => (
    <Glyph className={c}>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </Glyph>
  ),
  code: (c?: string) => (
    <Glyph className={c}>
      <path d="M8.5 8 4.5 12l4 4M15.5 8l4 4-4 4M13.5 5l-3 14" />
    </Glyph>
  ),
  layout: (c?: string) => (
    <Glyph className={c}>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M9 9v11" />
    </Glyph>
  ),
  gauge: (c?: string) => (
    <Glyph className={c}>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 18l4-4.5" />
      <circle cx="12" cy="18" r="1.2" fill="currentColor" stroke="none" />
    </Glyph>
  ),
  sparkle: (c?: string) => (
    <Glyph className={c}>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </Glyph>
  ),
  shield: (c?: string) => (
    <Glyph className={c}>
      <path d="M12 3 5 6v5.5c0 4.3 2.9 7.7 7 9.5 4.1-1.8 7-5.2 7-9.5V6l-7-3Z" />
      <path d="M9.5 12l1.8 1.8 3.4-3.6" />
    </Glyph>
  ),
  graduation: (c?: string) => (
    <Glyph className={c}>
      <path d="M12 4 2.5 8.5 12 13l9.5-4.5L12 4Z" />
      <path d="M6.5 10.7v4.6c0 1.5 2.5 2.7 5.5 2.7s5.5-1.2 5.5-2.7v-4.6M21 9v5" />
    </Glyph>
  ),
  trophy: (c?: string) => (
    <Glyph className={c}>
      <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5.5H4.5V7a3 3 0 0 0 3 3M17 5.5h2.5V7a3 3 0 0 1-3 3M9.5 20h5M12 14v6" />
    </Glyph>
  ),
  mail: (c?: string) => (
    <Glyph className={c}>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </Glyph>
  ),
  phone: (c?: string) => (
    <Glyph className={c}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2Z" />
    </Glyph>
  ),
  github: (c?: string) => (
    <Glyph className={c}>
      <path d="M9 19.5c-4.5 1.4-4.5-2.3-6.3-2.8m12.6 5.3v-3.6a3 3 0 0 0-.9-2.4c2.9-.3 6-1.4 6-6.5a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C6 2.2 4.9 2.5 4.9 2.5a4.7 4.7 0 0 0-.1 3.5 5 5 0 0 0-1.4 3.5c0 5.1 3.1 6.2 6 6.5a3 3 0 0 0-.9 2.3V22" />
    </Glyph>
  ),
  linkedin: (c?: string) => (
    <Glyph className={c}>
      <path d="M16 8.5a5 5 0 0 1 5 5V21h-4v-7.5a1 1 0 0 0-2 0V21h-4v-12h4v1a5 5 0 0 1 1-1.5Z" />
      <rect x="2.5" y="9" width="4" height="12" />
      <circle cx="4.5" cy="4.5" r="2" />
    </Glyph>
  ),
  download: (c?: string) => (
    <Glyph className={c}>
      <path d="M12 3.5v11m0 0 4-4m-4 4-4-4M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17" />
    </Glyph>
  ),
  pin: (c?: string) => (
    <Glyph className={c}>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Glyph>
  ),
} as const;

export type IconKey = keyof typeof icons;

export function Icon({ name, className }: { name: IconKey; className?: string }) {
  return icons[name](className);
}
