import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------
   Container — the single gutter used across the site.
   ------------------------------------------------------------------ */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10", className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------
   Crosshair — the `+` tick that marks blueprint intersections.
   ------------------------------------------------------------------ */
export function Crosshair({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={cn("pointer-events-none absolute size-[11px] text-blueprint/70", className)}
    >
      <path d="M6 0.5v11M0.5 6h11" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   BlueprintFrame — dashed technical-drawing frame with corner ticks.
   The structural motif the whole page is built on.
   ------------------------------------------------------------------ */
export function BlueprintFrame({
  children,
  className,
  ticks = true,
}: {
  children: ReactNode;
  className?: string;
  ticks?: boolean;
}) {
  return (
    <div className={cn("relative border border-dashed border-blueprint/40", className)}>
      {ticks ? (
        <>
          <Crosshair className="-top-[5.5px] -left-[5.5px]" />
          <Crosshair className="-top-[5.5px] -right-[5.5px]" />
          <Crosshair className="-bottom-[5.5px] -left-[5.5px]" />
          <Crosshair className="-right-[5.5px] -bottom-[5.5px]" />
        </>
      ) : null}
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------
   DottedBand — graph-paper strip used to breathe between movements.
   ------------------------------------------------------------------ */
export function DottedBand({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative h-12 border-y border-dashed border-blueprint/40 md:h-16",
        className,
      )}
    >
      <div className="dot-field absolute inset-0" />
    </div>
  );
}

/* ------------------------------------------------------------------
   Badge — small filled pill. Section eyebrows, statuses.
   ------------------------------------------------------------------ */
export function Badge({
  children,
  className,
  tone = "accent",
}: {
  children: ReactNode;
  className?: string;
  tone?: "accent" | "outline";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12.5px] font-medium",
        tone === "accent"
          ? "bg-accent text-on-accent"
          : "border border-line bg-surface text-body shadow-soft",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------
   Tag — the filled capsule used for tech and capability lists.
   ------------------------------------------------------------------ */
export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-accent/85 px-3 py-1 text-[12.5px] leading-5 text-on-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------
   IconTile — rounded square holding a 1.5px stroke glyph.
   ------------------------------------------------------------------ */
export function IconTile({
  children,
  className,
  size = "md",
}: {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-tile border border-line bg-sunken text-ink",
        size === "md" ? "size-12" : "size-9",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------
   Button — pill, three intents. Anchor by default.
   ------------------------------------------------------------------ */
type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
        size === "lg" ? "px-6 py-3 text-[15px]" : "px-4.5 py-2.5 text-sm",
        variant === "primary" &&
          "bg-ink text-paper shadow-soft hover:-translate-y-px hover:shadow-card",
        variant === "secondary" &&
          "border border-line bg-surface text-ink shadow-soft hover:-translate-y-px hover:border-line-2 hover:shadow-card",
        variant === "ghost" && "text-body hover:text-ink",
        className,
      )}
    >
      {children}
    </a>
  );
}

/* ------------------------------------------------------------------
   Card — the base raised surface.
   ------------------------------------------------------------------ */
export function Card({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return <div className={cn("card", hover && "card-hover", className)}>{children}</div>;
}

/* ------------------------------------------------------------------
   SpecTable — mono key / value rows. First row plain, remainder
   filled, exactly like a data readout in the reference language.
   ------------------------------------------------------------------ */
export function SpecTable({
  rows,
  className,
}: {
  rows: readonly { key: string; value: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-tile border border-line bg-surface shadow-soft",
        className,
      )}
    >
      {rows.map((row, i) => (
        <div
          key={row.key}
          className={cn(
            "flex items-center justify-between gap-4 px-3.5 py-2",
            i > 0 && "bg-accent/80",
          )}
        >
          <span
            className={cn(
              "font-mono text-[12px]",
              i > 0 ? "text-on-accent/70" : "text-muted",
            )}
          >
            {row.key}
          </span>
          <span
            className={cn(
              "text-right text-[12.5px] font-medium",
              i > 0 ? "text-on-accent" : "text-ink",
            )}
          >
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------
   SectionHeader — badge, headline, lede. Centred or left.
   ------------------------------------------------------------------ */
export function SectionHeader({
  badge,
  title,
  lede,
  align = "left",
  id,
  className,
}: {
  badge: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
  id?: string;
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      <Badge>{badge}</Badge>
      <h2
        id={id}
        className="mt-5 text-[clamp(1.75rem,4vw,2.75rem)] leading-[1.1] tracking-[-0.03em]"
      >
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "mt-4 text-[16.5px] leading-[1.65] text-body",
            align === "center" ? "mx-auto max-w-2xl" : "measure",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------
   FloatingLabel — the small annotation pill that overlaps diagrams.
   ------------------------------------------------------------------ */
export function FloatingLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[12px] font-medium text-ink shadow-card",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------
   ArrowRight / ArrowUpRight — the only recurring glyphs.
   ------------------------------------------------------------------ */
export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRight({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-4", className)}
    >
      <path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" />
    </svg>
  );
}
