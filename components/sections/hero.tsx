import type { CSSProperties } from "react";
import { metrics, profile } from "@/lib/content";
import { ArrowRight, Badge, Container, Crosshair } from "@/components/ui";
import { HeroDiagram } from "@/components/illustrations/hero-diagram";
import { Icon } from "@/components/icons";

const PROOF = [
  { icon: "payments", label: "Payment gateways" },
  { icon: "server", label: "Django REST APIs" },
  { icon: "database", label: "Reconciliation" },
] as const;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden">
      {/* faint graph paper behind the whole hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-field fade-edges absolute inset-0 opacity-[0.5]" />
      </div>

      <Container>
        <div className="relative grid items-center gap-12 pt-28 pb-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-12 lg:pt-36 lg:pb-20">
          {/* ── copy ───────────────────────────────────────────── */}
          <div className="max-w-xl">
            <div className="rise">
              <Badge tone="outline" className="gap-2">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full rounded-full bg-accent opacity-70 [animation:pulse-ring_2.4s_ease-out_infinite]" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
                </span>
                {profile.status}
              </Badge>
            </div>

            <div className="rise" style={{ "--d": "60ms" } as CSSProperties}>
              <h1
                id="hero-heading"
                className="mt-6 text-[clamp(2.5rem,6.2vw,4.25rem)] leading-[1.04] tracking-[-0.04em]"
              >
                Backend systems
                <br />
                that move money.
              </h1>
            </div>

            <div className="rise" style={{ "--d": "120ms" } as CSSProperties}>
              <p className="mt-6 text-[17px] leading-[1.65] text-body">
                I&rsquo;m {profile.name} — a backend engineer at Playto building fintech
                infrastructure with Django and Django REST Framework. Invoicing, gateway
                routing, automated payouts and reconciliation.
              </p>
            </div>

            <div className="rise" style={{ "--d": "180ms" } as CSSProperties}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-paper shadow-soft transition-all duration-300 hover:-translate-y-px hover:shadow-card"
                >
                  View selected work
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-6 py-3 text-[15px] font-medium text-ink shadow-soft transition-all duration-300 hover:-translate-y-px hover:border-line-2 hover:shadow-card"
                >
                  Get in touch
                </a>
              </div>
            </div>

            <div className="rise" style={{ "--d": "240ms" } as CSSProperties}>
              <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                {PROOF.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-[13.5px] text-body"
                  >
                    <Icon name={item.icon} className="size-4 text-muted" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── diagram ────────────────────────────────────────── */}
          <div className="rise" style={{ "--d": "100ms" } as CSSProperties}>
            <div className="relative">
              <Crosshair className="-top-[5.5px] -left-[5.5px] hidden lg:block" />
              <Crosshair className="-right-[5.5px] -bottom-[5.5px] hidden lg:block" />
              <HeroDiagram className="w-full" />
            </div>
          </div>
        </div>
      </Container>

      {/* ── metrics strip ─────────────────────────────────────── */}
      <Container>
        <div className="rise" style={{ "--d": "100ms" } as CSSProperties}>
          <dl className="grid grid-cols-1 divide-y divide-line overflow-hidden rounded-card border border-line bg-surface shadow-soft sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {metrics.map((m) => (
              <div key={m.label} className="px-6 py-6 sm:px-7">
                <dd className="text-[2rem] leading-none font-semibold tracking-[-0.03em] text-ink tabular-nums">
                  {m.value}
                </dd>
                <dt className="mt-2.5 text-[13.5px] text-body">{m.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
