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
    // Handle form submission
    const mailtoLink = `mailto:anujguptaaj123@gmail.com?subject=Contact from ${formState.name}&body=${formState.message}`
    window.open(mailtoLink)
  }

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_at_center,_oklch(0.75_0.15_195_/_0.1)_0%,_transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="reveal text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Let&apos;s Build
            <br />
            <span className="text-primary text-glow">Something Great</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I&apos;m always open to new ideas and
            collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="reveal space-y-6">
            <a
              href="mailto:anujguptaaj123@gmail.com"
              className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">anujguptaaj123@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+919569513380"
              className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium group-hover:text-primary transition-colors">+91 9569513380</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/anuj-gupta-b930a0264/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 glass rounded-xl hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <p className="font-medium group-hover:text-primary transition-colors">Connect with me</p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form ref={formRef} onSubmit={handleSubmit} className="reveal space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary border border-border rounded-xl focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground"
              />
            </div>

            <MagneticButton>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:shadow-[0_0_30px_oklch(0.75_0.15_195_/_0.4)] transition-all"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </MagneticButton>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Anuj Gupta. Crafted with precision.
          </p>
        </div>
      </div>
    </section>
  )
}
