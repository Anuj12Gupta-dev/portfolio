import { profile } from "@/lib/content";
import { ArrowRight, ArrowUpRight, Badge, Container } from "@/components/ui";
import { Icon, type IconKey } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

const CHANNELS: readonly {
  icon: IconKey;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}[] = [
  { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
  {
    icon: "github",
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
    external: true,
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: profile.linkedinHandle,
    href: profile.linkedin,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24">
      <Container>
        <div className="pb-20 md:pb-28 lg:pb-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-card border border-line bg-surface px-6 py-14 text-center shadow-card sm:px-10 sm:py-18">
              {/* blueprint texture inside the CTA slab */}
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="dot-field fade-edges absolute inset-0" />
              </div>

              <div className="relative">
                <Badge>Contact</Badge>
                <h2
                  id="contact-heading"
                  className="mx-auto mt-5 max-w-2xl text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.08] tracking-[-0.035em]"
                >
                  Let&rsquo;s build something worth shipping
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-[16.5px] leading-[1.65] text-body">
                  I&rsquo;m open to full-time roles, internships and collaborations. The
                  fastest route is a direct email.
                </p>

                <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-medium text-paper shadow-soft transition-all duration-300 hover:-translate-y-px hover:shadow-card"
                  >
                    Start a conversation
                    <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3 text-[15px] font-medium text-ink shadow-soft transition-all duration-300 hover:-translate-y-px hover:border-line-2 hover:shadow-card"
                  >
                    <Icon name="download" className="size-4" />
                    Download résumé
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <RevealGroup className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map((c) => (
              <RevealItem key={c.label} className="h-full">
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card card-hover group flex h-full items-center gap-4 p-5"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-tile border border-line bg-sunken text-ink">
                    <Icon name={c.icon} className="size-[19px]" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="eyebrow block">{c.label}</span>
                    {/* Contact details must stay readable in full — break
                        rather than truncate when the column is narrow. */}
                    <span className="mt-1.5 block text-[13.5px] break-all text-ink">
                      {c.value}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
