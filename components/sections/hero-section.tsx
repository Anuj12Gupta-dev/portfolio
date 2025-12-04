"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { MagneticButton } from "../magnetic-button"
import { HeroVisual } from "../hero-visual"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subheadRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })

    tl.fromTo(headlineRef.current, { opacity: 0, y: 80 }, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" })
      .fromTo(subheadRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.6")
      .fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(0.15_0.02_195)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight"
          >
            Building Scalable
            <br />
            <span className="text-primary text-glow">Web Experiences</span>
            <br />
            <span className="text-muted-foreground">with Next.js, AI & ....</span>
          </h1>

          <p ref={subheadRef} className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Full-Stack Developer crafting modern, performant applications. Specializing in React ecosystems, AI
            integrations, and intelligent user experiences.
          </p>

          <div ref={ctaRef} className="flex flex-wrap gap-4 pt-4">
            <MagneticButton>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-medium rounded-full transition-all hover:shadow-[0_0_30px_oklch(0.75_0.15_195_/_0.4)]"
              >
                View Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/Anuj_Gupta_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3.5 glass font-medium rounded-full hover:bg-secondary/80 transition-colors"
              >
                Download Resume
              </a>
            </MagneticButton>
          </div>
        </div>

        <div className="hidden lg:flex justify-center items-center">
          <HeroVisual />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  )
}
