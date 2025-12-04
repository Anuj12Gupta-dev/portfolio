"use client"

import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: "Spendly",
    description:
      "AI-powered expense tracking app with smart insights and analytics. Uses intelligent scripts to scan and analyze spending patterns for better financial decisions.",
    tech: ["Next.js", "TypeScript", "Prisma", "Clerk", "Tailwind CSS"],
    link: "https://wealth-git-main-anujguptas-projects.vercel.app/",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "PrepMate AI",
    description:
      "Interview preparation platform that generates tailored questions and answers based on job descriptions and experience level. Built to help candidates ace their interviews.",
    tech: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://ai-mock-interview-ebba4.web.app/",
    color: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Ghumkad Travels",
    description:
      "AI-powered trip planner that generates complete travel itineraries in seconds. From destinations to daily activities—all intelligently curated.",
    tech: ["React", "Node.js", "MongoDB", "JavaScript", "Tailwind CSS"],
    link: "https://ai-travel-planner-two-beta.vercel.app/",
    color: "from-blue-500/20 to-indigo-500/20",
  },
]

export function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return

        card.addEventListener("mousemove", (e) => {
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left
          const y = e.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2
          const rotateX = (y - centerY) / 20
          const rotateY = (centerX - x) / 20

          gsap.to(card, {
            rotateX,
            rotateY,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: "power2.out",
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in building modern, AI-powered web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                cardsRef.current[index] = el
              }}
              className="reveal group relative"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Glow effect */}
              <div
                className={`absolute -inset-px bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
              />

              <div className="relative glass rounded-2xl p-6 h-full flex flex-col border border-border/50 group-hover:border-primary/30 transition-colors">
                {/* Project title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{project.description}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 bg-secondary rounded-full text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
