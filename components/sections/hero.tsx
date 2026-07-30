import type { CSSProperties } from "react";
import { about, profile } from "@/lib/content";
import { ArrowUpRight, Container } from "@/components/primitives";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative">
      <Container>
        <div className="flex min-h-[100svh] flex-col justify-between pt-28 pb-0 md:pt-36">
          {/* ── Status line ─────────────────────────────────────── */}
          <div
            className="fade-up flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-dashed border-line pb-5"
            style={rise(60)}
          >
            <p className="eyebrow flex items-center gap-2.5">
              <span aria-hidden className="size-1.5 rounded-full bg-accent" />
              {profile.status}
            </p>
            <p className="eyebrow">
              {profile.location} <span className="text-muted">/</span> Portfolio 2026
            </p>
          </div>

          {/* ── The name ────────────────────────────────────────── */}
          <div className="grid grid-cols-1 gap-y-10 py-14 lg:grid-cols-12 lg:items-end lg:gap-x-12 lg:py-20">
            <div className="lg:col-span-8">
              <h1
                id="hero-heading"
                className="display text-[clamp(3.25rem,13vw,10.5rem)]"
              >
                <span className="line-mask">
                  <span style={rise(120)}>Anuj</span>
                </span>
                <span className="line-mask">
                  <span className="text-muted" style={rise(240)}>
                    Gupta
                  </span>
                </span>
              </h1>
            </div>

            <div className="fade-up lg:col-span-4 lg:pb-4" style={rise(460)}>
              <p className="measure-tight text-base leading-relaxed text-soft md:text-lg">
                {profile.tagline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink transition-opacity duration-300 hover:opacity-85"
                >
                  View selected work
                  <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-soft transition-colors duration-300 hover:border-line-2 hover:bg-ink-3 hover:text-bone"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          {/* ── Facts strip ─────────────────────────────────────── */}
          <dl
            className="fade-up grid grid-cols-1 border-t border-dashed border-line sm:grid-cols-3"
            style={rise(580)}
          >
            {about.facts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-baseline justify-between gap-4 border-b border-dashed border-line py-6 last:border-b-0 sm:block sm:border-b-0 sm:border-l sm:px-8 sm:py-8 sm:first:border-l-0 sm:first:pl-0"
              >
                <dt className="eyebrow order-2 sm:order-none">{fact.label}</dt>
                <dd className="text-3xl font-medium tracking-tight tabular-nums sm:mt-5 sm:text-4xl">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
