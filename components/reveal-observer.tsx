"use client";

import { useEffect } from "react";

/**
 * One observer for the whole page.
 *
 * Sections stay server components and simply mark elements with
 * `data-reveal`; this flips `data-shown` once they enter the viewport.
 * All the actual motion is CSS, so nothing ships beyond this listener.
 */
export function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (nodes.length === 0) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const show = (el: HTMLElement) => el.setAttribute("data-shown", "true");

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach(show);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target as HTMLElement);
          observer.unobserve(entry.target);
        }
      },
      // Fire a little before the element is fully on screen so the
      // motion completes as the reader arrives, not after.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return null;
}
