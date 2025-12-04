"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const timeline = [
  {
    title: "Smart India Hackathon 2025",
    subtitle: "Qualified Internal Hackathon",
    period: "2025",
    description:
      "Successfully qualified the college internal hackathon round for Smart India Hackathon, demonstrating problem-solving skills and innovative thinking.",
  },
  {
    title: "B.Tech Computer Science",
    subtitle: "Dr. A.P.J. Abdul Kalam Technical University",
    period: "2023 - 2027",
    description:
      "Pursuing Computer Science degree with focus on software development, data structures, and modern web technologies.",
  },
  {
    title: "Higher Secondary Education",
    subtitle: "N.L.K Vidya Mandir Inter College",
    period: "2021 - 2022",
    description:
      "Completed Class XII with strong foundation in mathematics and science, sparking interest in computer science.",
  },
]

export function ExperienceSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 75%",
          },
        },
      )

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 75%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Journey & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key milestones and educational background shaping my path as a developer.
          </p>
        </div>

        <div className="timeline-container relative">
          {/* Timeline line */}
          <div className="timeline-line absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent origin-top" />

          {timeline.map((item, index) => (
            <div
              key={item.title}
              className={`timeline-item relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary glow-cyan z-10" />

              {/* Content */}
              <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <span className="text-xs text-primary font-mono">{item.period}</span>
                <h3 className="text-lg font-semibold mt-1 mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">{item.description}</p>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
