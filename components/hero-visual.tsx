"use client"

import { useRef, useState } from "react"
import gsap from "gsap"

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "FastAPI",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Redux",
  "Git",
  "REST APIs",
  "GraphQL",
  "Prisma",
  "Firebase",
  "Clerk",
]

export function HeroVisual() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const boxRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleClick = () => {
    if (isAnimating || !boxRef.current) return

    setIsAnimating(true)

    // Rotate the entire box 90 degrees with visible 3D rotation
    gsap.to(boxRef.current, {
      rotateY: 90,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        // Update the tech stack index while box is perpendicular (invisible)
        setCurrentIndex((prev) => (prev + 1) % techStack.length)

        // Reset rotation to -90 (other side) and animate back to 0
        gsap.set(boxRef.current, { rotateY: -90 })
        gsap.to(boxRef.current, {
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => setIsAnimating(false),
        })
      },
    })

    // Animate surrounding shadow layers for depth effect
    const shadowLayers = containerRef.current?.querySelectorAll(".shadow-layer")
    shadowLayers?.forEach((layer, i) => {
      gsap.to(layer, {
        rotateY: 90 + i * 5,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(layer, { rotateY: -90 - i * 5 })
          gsap.to(layer, {
            rotateY: -i * 3,
            duration: 0.3,
            ease: "power2.out",
          })
        },
      })
    })
  }

  return (
    <div
      ref={containerRef}
      className="relative w-[400px] h-[400px] cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={handleClick}
      data-cursor="click"
    >
      {/* Shadow layers behind main box */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="shadow-layer absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: `translateZ(${-20 - i * 15}px) rotate(${-3 - i * 3}deg)`,
            zIndex: -i,
          }}
        >
          <div
            className="w-72 h-72 rounded-2xl border border-primary/10 bg-background/50"
            style={{
              boxShadow: `0 0 ${30 + i * 10}px oklch(0.75 0.15 195 / ${0.1 - i * 0.015})`,
            }}
          />
        </div>
      ))}

      {/* Main rotating box */}
      <div
        ref={boxRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        <div
          className="w-72 h-72 rounded-2xl glass flex items-center justify-center border border-primary/30 relative overflow-hidden"
          style={{
            boxShadow: "0 0 60px oklch(0.75 0.15 195 / 0.25), inset 0 0 30px oklch(0.75 0.15 195 / 0.05)",
          }}
        >
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full animate-shimmer" />

          {/* Tech name */}
          <span className="text-2xl font-bold text-primary text-glow">{techStack[currentIndex]}</span>

          {/* Corner accents */}
          <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg" />
          <div className="absolute top-3 right-3 w-8 h-8 border-r-2 border-t-2 border-primary/40 rounded-tr-lg" />
          <div className="absolute bottom-3 left-3 w-8 h-8 border-l-2 border-b-2 border-primary/40 rounded-bl-lg" />
          <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg" />
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_oklch(0.75_0.15_195_/_0.15)_0%,_transparent_60%)] pointer-events-none" />

      {/* Click hint */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60 uppercase tracking-widest">
        Click to see Tech stack
      </div>
    </div>
  )
}
