"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: "3+", label: "Projects Shipped" },
  { value: "5+", label: "Technologies" },
  { value: "2025", label: "SIH Qualifier" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="reveal space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Crafting Digital
              <br />
              <span className="text-primary">Experiences</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m Anuj Gupta, a Computer Science student at Dr. A.P.J. Abdul Kalam Technical University,
                passionate about building web applications that blend exceptional user experience with powerful
                functionality.
              </p>
              <p>
                My expertise spans the modern JavaScript ecosystem—from React and Next.js on the frontend to Node.js and
                various databases on the backend. I&apos;m particularly drawn to AI integrations, having built several
                applications that leverage intelligent automation to solve real-world problems.
              </p>
              <p>
                Currently seeking opportunities to contribute to innovative teams where I can grow as a developer while
                delivering impactful solutions.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://linkedin.com/in/anujgupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                LinkedIn →
              </a>
              <a
                href="mailto:anujguptaaj123@gmail.com"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Email →
              </a>
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="stat-item glass rounded-2xl p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
