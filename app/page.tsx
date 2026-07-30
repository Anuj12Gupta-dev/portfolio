import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { RevealObserver } from "@/components/reveal-observer";
import { DotBand, Rule } from "@/components/primitives";
import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Capabilities } from "@/components/sections/capabilities";
import { Education } from "@/components/sections/education";
import { Recognition } from "@/components/sections/recognition";
import { Contact } from "@/components/sections/contact";
import { profile, projects } from "@/lib/content";

/**
 * Section separation rotates between three devices so the rhythm never
 * settles into a single repeated gesture: a dashed rule, a dot-grid
 * band, and plain whitespace.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        <Hero />
        <DotBand />
        <Profile />
        <Rule />
        <Experience />
        <DotBand />
        <Work />
        <Rule />
        <Capabilities />
        <Rule />
        <Education />
        <Rule />
        <Recognition />
        <DotBand />
        <Contact />
      </main>

      <SiteFooter />
      <RevealObserver />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: profile.name,
            jobTitle: profile.role,
            email: `mailto:${profile.email}`,
            telephone: profile.phone,
            url: "https://anuj-gupta-dev.vercel.app",
            sameAs: [profile.linkedin, profile.github],
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kanpur",
              addressRegion: "Uttar Pradesh",
              addressCountry: "IN",
            },
            worksFor: { "@type": "Organization", name: "Playto" },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "Dr. A.P.J. Abdul Kalam Technical University",
            },
            knowsAbout: [
              "Django",
              "Django REST Framework",
              "Payment gateway integration",
              "Python",
              "PostgreSQL",
              "Next.js",
              "TypeScript",
            ],
            subjectOf: projects.map((project) => ({
              "@type": "SoftwareApplication",
              name: project.title,
              url: project.href,
              applicationCategory: "WebApplication",
            })),
          }),
        }}
      />
    </>
  );
}
