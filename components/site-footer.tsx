import { navItems, profile } from "@/lib/content";
import { Container } from "@/components/ui";
import { Icon } from "@/components/icons";

const SOCIAL = [
  { icon: "github", href: profile.github, label: "GitHub" },
  { icon: "linkedin", href: profile.linkedin, label: "LinkedIn" },
  { icon: "mail", href: `mailto:${profile.email}`, label: "Email" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:gap-16">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-[9px] bg-ink text-paper">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-[18px]">
                  <path
                    d="M5 16.5 12 4l7 12.5M8.5 16.5h7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-ink">
                {profile.name}
              </span>
            </div>

            <p className="mt-4 max-w-sm text-[14.5px] leading-[1.65] text-body">
              {profile.tagline}
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={s.label}
                  className="grid size-9 place-items-center rounded-[10px] border border-line bg-paper text-muted transition-colors duration-300 hover:border-line-2 hover:text-ink"
                >
                  <Icon name={s.icon} className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Sections</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[14.5px] text-body transition-colors duration-300 hover:text-ink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-line py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-muted">
            &copy; 2026 {profile.name}. All rights reserved.
          </p>
          <p className="text-[13px] text-muted">Built with Next.js and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}
