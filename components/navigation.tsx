"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MagneticButton } from "./magnetic-button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "glass py-4" : "py-6")}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-semibold tracking-tight">
          <span className="text-primary">A</span>
          <span className="text-foreground">G</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <MagneticButton>
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </MagneticButton>
      </div>
    </nav>
  )
}
