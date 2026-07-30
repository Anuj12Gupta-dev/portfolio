"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/content";
import { Container, ArrowRight } from "@/components/ui";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((i) => document.querySelector(i.href))
      .filter((el): el is Element => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(`#${e.target.id}`);
      },
      { rootMargin: "-25% 0px -68% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          {/* wordmark */}
          <a href="#top" className="group flex items-center gap-2.5">
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
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                className={cn(
                  "text-[14.5px] transition-colors duration-300 hover:text-ink",
                  active === item.href ? "text-ink" : "text-body",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href={profile.resume}
              download
              className="group hidden items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper shadow-soft transition-all duration-300 hover:-translate-y-px hover:shadow-card sm:inline-flex"
            >
              Résumé
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="grid size-9 place-items-center rounded-[10px] border border-line bg-surface text-ink shadow-soft lg:hidden"
            >
              <span className="relative block h-2.5 w-4">
                <span
                  className={cn(
                    "absolute left-0 block h-px w-4 bg-current transition-all duration-300",
                    open ? "top-1 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-px w-4 bg-current transition-all duration-300",
                    open ? "top-1 -rotate-45" : "top-2.5",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {/* mobile panel */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <Container>
          <nav aria-label="Sections" className="grid gap-1 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-[17px] text-ink transition-colors duration-300 hover:bg-surface"
              >
                {item.label}
                <ArrowRight className="size-4 text-muted" />
              </a>
            ))}
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="mt-3 mb-2 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-paper"
            >
              Download résumé
            </a>
          </nav>
        </Container>
      </div>
    </header>
  );
}
