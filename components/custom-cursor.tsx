"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [isHoveringClickable, setIsHoveringClickable] = useState(false)

  useEffect(() => {
    // Check if user prefers reduced motion or is on mobile
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    if (prefersReducedMotion || isMobile) return
    
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return
    
    // Throttle mouse move events to reduce performance impact
    let animationFrameId: number
    let mouseX = 0
    let mouseY = 0
    let followerX = 0
    let followerY = 0
    
    // Mouse move handler with throttling
    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      
      // Cancel any existing animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      
      // Update cursor position on next animation frame
      animationFrameId = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${mouseX - 10}px, ${mouseY - 10}px, 0)`
        
        // Update follower position with delay
        followerX += (mouseX - followerX) * 0.12
        followerY += (mouseY - followerY) * 0.12
        follower.style.transform = `translate3d(${followerX - 16}px, ${followerY - 16}px, 0)`
      })
    }

    // Find clickable elements and add hover listeners
    const handleMouseEnter = (size: "large" | "click") => {
      setIsHoveringClickable(size === "click")
      
      const scale = size === "click" ? 2.5 : 2
      cursor.style.transform = `scale(${scale})`
      follower.style.transform = `scale(${scale})`
    }

    const handleMouseLeave = () => {
      setIsHoveringClickable(false)
      
      cursor.style.transform = 'scale(1)'
      follower.style.transform = 'scale(1)'
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
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
      observer.disconnect()
    }
  }, [])

  // Check if user prefers reduced motion or is on mobile
  const [shouldHideCursor, setShouldHideCursor] = useState(false)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      const mobileQuery = window.matchMedia('(max-width: 767px)')
      
      const updateState = () => {
        setShouldHideCursor(motionQuery.matches || mobileQuery.matches)
      }
      
      updateState()
      
      const handleMotionChange = (e: MediaQueryListEvent) => {
        updateState()
      }
      
      const handleMobileChange = (e: MediaQueryListEvent) => {
        updateState()
      }
      
      motionQuery.addEventListener('change', handleMotionChange)
      mobileQuery.addEventListener('change', handleMobileChange)
      
      return () => {
        motionQuery.removeEventListener('change', handleMotionChange)
        mobileQuery.removeEventListener('change', handleMobileChange)
      }
    }
  }, [])
  
  if (shouldHideCursor) {
    return null
  }
  
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