"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/content";
import { Container } from "@/components/primitives";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  /* Hairline appears only once the page has moved. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Scroll-spy: marks the section currently under the reader. */
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  /* Lock the page while the mobile panel is open. */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open
          ? "border-b border-dashed border-line bg-ink/85 backdrop-blur-[6px]"
          : "border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#top"
            className="group flex items-baseline gap-3 text-sm font-medium tracking-tight"
          >
            <span>{profile.name}</span>
            <span className="eyebrow hidden transition-colors duration-300 group-hover:text-soft xl:inline">
              {profile.role}
            </span>
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={cn(
                  "link-underline text-sm transition-colors duration-300 hover:text-bone",
                  active === item.href ? "text-bone" : "text-muted",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.resume}
              download
              className="hidden rounded-full bg-bone px-4 py-2 text-sm font-medium text-ink transition-opacity duration-300 hover:opacity-85 sm:inline-block"
            >
              Résumé
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 flex size-10 items-center justify-center lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-5 bg-bone transition-transform duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px w-5 bg-bone transition-transform duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="dot-band max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-dashed border-line bg-ink lg:hidden"
      >
        <Container>
          <nav aria-label="Sections" className="flex flex-col py-4">
            {navItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-dashed border-line py-5 text-2xl tracking-tight transition-colors duration-300 last:border-0 hover:text-soft"
              >
                {item.label}
                <span className="eyebrow tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="mt-6 mb-2 rounded-full bg-bone px-5 py-3 text-center text-sm font-medium text-ink"
            >
              Download résumé
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
