import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   Container — one gutter, used everywhere. Nothing else sets padding.
   ------------------------------------------------------------------ */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------
   Rule — a dashed hairline. The primary separator on the page.
   ------------------------------------------------------------------ */
export function Rule({ className }: { className?: string }) {
  return <div aria-hidden className={cn("border-t border-dashed border-line", className)} />;
}

/* ------------------------------------------------------------------
   DotBand — graph-paper texture used as a breathing separator between
   major movements. Bounded by hairlines top and bottom.
   ------------------------------------------------------------------ */
export function DotBand({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "dot-band h-14 border-y border-dashed border-line md:h-20",
        className,
      )}
    />
  );
}

/* ------------------------------------------------------------------
   Section — the editorial two-column shell.

   A sticky left rail carries the index and label; the content column
   carries the headline and body. On mobile the rail collapses to a
   single inline line above the content.
   ------------------------------------------------------------------ */
export function Section({
  id,
  index,
  label,
  children,
  className,
}: {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn("scroll-mt-24", className)}>
      <Container>
        <div className="grid grid-cols-1 gap-y-10 py-24 md:py-32 lg:grid-cols-12 lg:gap-x-12 lg:py-40">
          <div className="lg:col-span-3">
            <div
              className="flex items-center gap-4 lg:sticky lg:top-28 lg:block"
              data-reveal
            >
              <span className="eyebrow tabular-nums text-muted lg:block">{index}</span>
              <span aria-hidden className="h-px w-8 bg-line lg:hidden" />
              <span className="eyebrow lg:mt-3 lg:block">{label}</span>
            </div>
          </div>

          <div className="lg:col-span-9">{children}</div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------
   SectionHeading — the display headline inside a section's content
   column. Optionally followed by a lede paragraph.
   ------------------------------------------------------------------ */
export function SectionHeading({
  id,
  children,
  lede,
}: {
  id: string;
  children: ReactNode;
  lede?: ReactNode;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <h2
        id={`${id}-heading`}
        className="headline text-balance text-[2rem] leading-[1.05] sm:text-[2.5rem] lg:text-[3.25rem]"
        data-reveal
      >
        {children}
      </h2>
      {lede ? (
        <p
          className="measure mt-6 text-base leading-relaxed text-soft md:text-lg"
          data-reveal
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------
   ArrowUpRight — the only recurring glyph. Inline SVG so it costs
   nothing and inherits currentColor.
   ------------------------------------------------------------------ */
export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}
