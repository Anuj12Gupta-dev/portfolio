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

export function RotatingTechBox() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const boxRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)

  const handleClick = () => {
    if (isAnimating.current) return
    isAnimating.current = true

    const nextIndex = (currentIndex + 1) % techStack.length

    // Create the 3D flip animation
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex(nextIndex)
        isAnimating.current = false
      },
    })

    // Animate the box rotating 90 degrees on X axis
    tl.to(innerRef.current, {
      rotateX: -90,
      duration: 0.3,
      ease: "power2.in",
    })
      .set(innerRef.current, {
        rotateX: 90,
      })
      .call(() => {
        // Update text at the halfway point
        if (innerRef.current) {
          innerRef.current.textContent = techStack[nextIndex]
        }
      })
      .to(innerRef.current, {
        rotateX: 0,
        duration: 0.3,
        ease: "power2.out",
      })

    // Add a subtle scale bounce to the container
    gsap.to(boxRef.current, {
      scale: 0.95,
      duration: 0.15,
      ease: "power2.in",
      yoyo: true,
      repeat: 1,
    })
  }

  return (
    <div
      ref={boxRef}
      onClick={handleClick}
      data-cursor="click"
      className="relative inline-flex items-center gap-2 cursor-pointer group"
      style={{ perspective: "500px" }}
    >
      {/* Glow effect behind the box */}
      <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* The rotating box */}
      <div className="relative px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg overflow-hidden group-hover:border-primary/60 transition-colors">
        {/* Inner rotating content */}
        <div
          ref={innerRef}
          className="text-primary font-semibold whitespace-nowrap"
          style={{ transformStyle: "preserve-3d" }}
        >
          {techStack[currentIndex]}
        </div>

        {/* Shimmer effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </div>

      {/* Rotating particles around the box */}
      <div className="absolute -inset-4 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              top: i < 2 ? "-4px" : "auto",
              bottom: i >= 2 ? "-4px" : "auto",
              left: i % 2 === 0 ? "-4px" : "auto",
              right: i % 2 === 1 ? "-4px" : "auto",
              animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
