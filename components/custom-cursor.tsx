"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    // Mouse move handler
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      })
      
      // Follower circle with delay for smooth trailing effect
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.8,
        ease: "power2.out",
      })
    }

    // Find clickable elements and add hover listeners
    const handleMouseEnter = (size: "large" | "click") => {
      setIsHoveringClickable(size === "click")
      gsap.to(cursor, {
        scale: size === "click" ? 2.5 : 2,
        duration: 0.3,
        ease: "power2.out",
      })
      
      gsap.to(follower, {
        scale: size === "click" ? 2.5 : 2,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    const handleMouseLeave = () => {
      setIsHoveringClickable(false)
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      
      gsap.to(follower, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      })
    }

    // Setup event listeners
    window.addEventListener("mousemove", onMouseMove)

    // Add listeners to clickable elements
    const setupListeners = () => {
      // Large cursor for nav items, buttons, and contact links
      const largeElements = document.querySelectorAll('nav a, [data-cursor="large"], button, .glass')
      // Click text cursor for project cards and tech box
      const clickElements = document.querySelectorAll('[data-cursor="click"], #projects .group')

      largeElements.forEach((el) => {
        el.addEventListener("mouseenter", () => handleMouseEnter("large"))
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      clickElements.forEach((el) => {
        el.addEventListener("mouseenter", () => handleMouseEnter("click"))
        el.addEventListener("mouseleave", handleMouseLeave)
      })
    }

    // Initial setup and re-run on DOM changes
    setupListeners()
    const observer = new MutationObserver(setupListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Main cursor (follows mouse instantly) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        {/* Outer ring */}
        <div className="absolute w-full h-full rounded-full border-2 border-white" />
        {/* Inner dot */}
        <div className="w-1 h-1 rounded-full bg-white" />
      </div>
      
      {/* Follower cursor (follows with delay) */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] mix-blend-difference hidden md:flex items-center justify-center"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        <div className="absolute w-full h-full rounded-full border border-white/50" />
      </div>
    </>
  )
}