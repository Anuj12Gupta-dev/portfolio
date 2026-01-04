"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MagneticButton } from "./magnetic-button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
]

export function Navigation() {
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setHidden(true)
        setMenuOpen(false) // close menu on scroll down
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={cn(
        "fixed top-4 left-0 right-0 z-50 transition-transform duration-500 ease-out",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-6",
          "backdrop-blur-xl bg-white/5 border border-white/10",
          "rounded-2xl md:rounded-3xl supports-[backdrop-filter]:bg-white/5"
        )}
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-semibold tracking-tight">
            <span className="text-primary">A</span>
            <span className="text-foreground">G</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <MagneticButton>
              <a
                href="#contact"
                className="px-5 py-2.5 text-sm font-medium rounded-full
                           bg-primary/90 text-primary-foreground
                           hover:bg-primary transition-colors"
              >
                Get in Touch
              </a>
            </MagneticButton>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="pt-4 pb-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}

            <MagneticButton>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex justify-center px-5 py-2.5 text-sm font-medium rounded-full
                           bg-primary/90 text-primary-foreground
                           hover:bg-primary transition-colors"
              >
                Get in Touch
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </nav>
  )
}
