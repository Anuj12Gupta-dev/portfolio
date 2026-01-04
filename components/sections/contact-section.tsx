"use client"

import type React from "react"
import { useRef, useState } from "react"
import { MagneticButton } from "../magnetic-button"
import { Mail, Phone, Linkedin, Send } from "lucide-react"

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:anujguptaaj123@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}`
    window.open(mailtoLink)
  }

  return (
    <section
      id="contact"
      className="relative z-50 min-h-screen flex flex-col justify-between pt-16 sm:pt-20 pb-8 overflow-hidden"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[700px] lg:w-[900px] h-[300px] sm:h-[400px] bg-[radial-gradient(ellipse_at_center,_oklch(0.85_0.01_240_/_0.12)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-5xl mx-auto w-full px-4 sm:px-6">
        {/* Heading */}
        <div className="reveal text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Let&apos;s Build
            <br />
            <span className="text-primary text-glow">Something Great</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to discuss opportunities? I&apos;m always open to new ideas and
            collaborations.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {/* Contact info */}
          <div className="reveal space-y-4 sm:space-y-6">
            <a
              href="mailto:anujguptaaj123@gmail.com"
              className="flex items-center gap-4 p-4 glass rounded-xl transition-colors hover:border-primary/40 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  anujguptaaj123@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+919569513380"
              className="flex items-center gap-4 p-4 glass rounded-xl transition-colors hover:border-primary/40 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  +91 9569513380
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/anuj-gupta-b930a0264/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass rounded-xl transition-colors hover:border-primary/40 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  Connect with me
                </p>
              </div>
            </a>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="reveal space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary placeholder:text-muted-foreground"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary placeholder:text-muted-foreground"
            />

            <textarea
              placeholder="Your Message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-3 bg-secondary border border-border rounded-xl resize-none focus:outline-none focus:border-primary placeholder:text-muted-foreground"
            />

            <MagneticButton>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl transition-all hover:shadow-[0_0_30px_oklch(0.9_0.01_240_/_0.35)]"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </MagneticButton>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
        © 2025   Anuj Gupta. Crafted with precision.
      </div>
    </section>
  )
}
