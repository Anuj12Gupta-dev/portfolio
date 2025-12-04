"use client"

import { useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"

gsap.registerPlugin(ScrollTrigger)

const skills = {
  frontend: [
    { name: "Next.js", level: 90 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 80 },
    { name: "Prisma", level: 75 },
    { name: "Firebase", level: 80 },
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "AI Integrations", level: 80 },
  ],
}

const techMarquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Prisma",
  "Firebase",
  "Tailwind CSS",
  "Express.js",
  "Git",
]

export function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeCategory, setActiveCategory] = useState<keyof typeof skills>("frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skill-bar",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 80%",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeCategory])

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Tech marquee */}
      <div className="absolute top-0 left-0 right-0 py-4 border-y border-border/30 overflow-hidden">
        <div className="flex animate-marquee gap-12">
          {[...techMarquee, ...techMarquee].map((tech, index) => (
            <span key={`${tech}-${index}`} className="text-sm text-muted-foreground/50 whitespace-nowrap font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-16">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning frontend frameworks, backend technologies, and modern development
            practices.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {(Object.keys(skills) as Array<keyof typeof skills>).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-6 py-2.5 text-sm font-medium rounded-full transition-all",
                activeCategory === category ? "bg-primary text-primary-foreground" : "glass hover:bg-secondary/80",
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="skills-grid max-w-3xl mx-auto space-y-4">
          {skills[activeCategory].map((skill) => (
            <div
              key={skill.name}
              className="group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-2">
                <span
                  className={cn(
                    "text-sm font-medium transition-colors",
                    hoveredSkill === skill.name ? "text-primary" : "text-foreground",
                  )}
                >
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full bg-gradient-to-r from-primary to-primary/60 rounded-full origin-left"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
