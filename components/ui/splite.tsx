'use client'

import { Suspense, lazy, useState, useEffect, useCallback, useRef } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

// Lazy load Spline only when needed
const Spline = lazy(() => import('@splinetool/react-spline'))

// Utility function to check if WebGL is supported
function isWebGLSupported() {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && 
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch (e) {
    return false
  }
}

// Check if device is low-end based on hardware concurrency and memory
function isLowEndDevice() {
  if (typeof navigator !== 'undefined') {
    const cores = navigator.hardwareConcurrency || 4
    // @ts-ignore: deviceMemory is not in TypeScript types but is available in browsers
    const memory = navigator.deviceMemory || 4
    
    // Consider device low-end if it has 4 or fewer cores and 4GB or less RAM
    return cores <= 4 && memory <= 4
  }
  return false
}

interface SplineSceneProps {
  scene: string
  className?: string
  fallback?: React.ReactNode
  alwaysVisible?: boolean // When true, ignores intersection observer and always shows when conditions allow
}

export function SplineScene({ scene, className, fallback, alwaysVisible = false }: SplineSceneProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  
  // Check for prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])
  

  
  useEffect(() => {
    // Only disable on mobile, if user prefers reduced motion, or if WebGL is not supported
    // Allow on low-end devices but with performance optimizations
    if (isMobile || prefersReducedMotion || !isWebGLSupported()) {
      setIsVisible(false)
      setIsInView(false) // Ensure it's not in view either
      return
    }
    
    setIsVisible(true)
  }, [isMobile, prefersReducedMotion])
  
  // Set initial inView state based on alwaysVisible prop
  useEffect(() => {
    if (alwaysVisible && isVisible) {
      setIsInView(true);
    }
  }, [alwaysVisible, isVisible]);
  
  // Set up Intersection Observer only if not always visible
  useEffect(() => {
    if (!isVisible || !containerRef.current || alwaysVisible) return // Only set up observer if component should be visible, ref is available, and not always visible
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.01, rootMargin: '50px' } // Start loading when even slightly visible
    )
    
    observer.observe(containerRef.current)
    
    return () => {
      observer.disconnect()
    }
  }, [isVisible, alwaysVisible]) // Include alwaysVisible in dependency array
  
  // Show fallback or nothing if not visible
  if (!isVisible || (!isInView && !alwaysVisible)) {
    return fallback || (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
        <div className="text-center">
          <div className="text-gray-400 mb-2">3D Scene Preview</div>
          <div className="text-sm text-gray-500">Scroll to view</div>
        </div>
      </div>
    )
  }
  
  return (
    <div ref={containerRef} className="spline-container w-full h-full">
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="loader"></div>
          </div>
        }
      >
        <Spline
          scene={scene}
          className={className}
        />
      </Suspense>
    </div>
  )
}