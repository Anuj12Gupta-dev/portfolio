"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads only the Framer Motion features this site actually uses
 * (animations, variants and viewport triggers) instead of the full
 * bundle. `strict` makes the plain `motion` component throw, so the
 * lightweight `m` component can never be bypassed by accident.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
