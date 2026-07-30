import type { CSSProperties } from "react";
import { profile } from "@/lib/content";
import { ArrowUpRight, Container } from "@/components/primitives";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, external: false },
  { label: "GitHub", value: profile.githubHandle, href: profile.github, external: true },
  { label: "LinkedIn", value: profile.linkedinHandle, href: profile.linkedin, external: true },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
      <Container>
        <div className="grid grid-cols-1 gap-y-10 py-24 md:py-32 lg:grid-cols-12 lg:gap-x-12 lg:py-40">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-4 lg:sticky lg:top-28 lg:block" data-reveal>
              <span className="eyebrow tabular-nums text-muted lg:block">07</span>
              <span aria-hidden className="h-px w-8 bg-line lg:hidden" />
              <span className="eyebrow lg:mt-3 lg:block">Contact</span>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h2
              id="contact-heading"
              className="headline text-[clamp(2.25rem,7vw,5rem)]"
              data-reveal
            >
              Let&rsquo;s build something
              <br className="hidden sm:block" />{" "}
              <span className="text-muted">worth shipping.</span>
            </h2>

            <p
              className="measure mt-8 text-base leading-relaxed text-soft md:text-lg"
              data-reveal
              style={{ "--reveal-delay": "80ms" } as CSSProperties}
            >
              I&rsquo;m open to full-time roles, internships and collaborations. If you have
              something in mind, the fastest route is a direct email.
            </p>

            <div
              className="mt-12 flex flex-wrap items-center gap-3"
              data-reveal
              style={{ "--reveal-delay": "140ms" } as CSSProperties}
            >
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-bone px-5 py-2.5 text-sm font-medium text-ink transition-opacity duration-300 hover:opacity-85"
              >
                Start a conversation
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-soft transition-colors duration-300 hover:border-line-2 hover:bg-ink-3 hover:text-bone"
              >
                Download résumé
              </a>
            </div>

            <ul
              className="mt-16 border-t border-dashed border-line"
              data-reveal
              style={{ "--reveal-delay": "200ms" } as CSSProperties}
            >
              {channels.map((channel) => (
                <li key={channel.label} className="border-b border-dashed border-line">
                  <a
                    href={channel.href}
                    {...(channel.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group -mx-4 flex items-baseline justify-between gap-6 px-4 py-6 transition-colors duration-500 hover:bg-ink-2 md:-mx-6 md:px-6"
                  >
                    <span className="eyebrow">{channel.label}</span>
                    <span className="flex items-center gap-3 text-sm text-bone sm:text-base">
                      {channel.value}
                      <ArrowUpRight className="size-4 text-line-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bone" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
