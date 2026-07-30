import { SiteHeader } from "@/components/site-header";
import { MotionProvider } from "@/components/motion-provider";
import { SiteFooter } from "@/components/site-footer";
import { DottedBand } from "@/components/ui";
import { Hero } from "@/components/sections/hero";
import { Profile } from "@/components/sections/profile";
import { Experience } from "@/components/sections/experience";
import { Work } from "@/components/sections/work";
import { Capabilities } from "@/components/sections/capabilities";
import { Credentials } from "@/components/sections/credentials";
import { Contact } from "@/components/sections/contact";
import { profile, projects } from "@/lib/content";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <MotionProvider>
        <main>
          <Hero />
          <Profile />
          <DottedBand />
          <Experience />
          <DottedBand />
          <Work />
          <Capabilities />
          <DottedBand />
          <Credentials />
          <Contact />
        </main>
      </MotionProvider>

      <SiteFooter />

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
            subjectOf: projects.map((p) => ({
              "@type": "SoftwareApplication",
              name: p.title,
              url: p.href,
              applicationCategory: "WebApplication",
            })),
          }),
        }}
      />
    </>
  );
}
