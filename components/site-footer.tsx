import { profile } from "@/lib/content";
import { Container } from "@/components/primitives";

export function SiteFooter() {
  return (
    <footer className="border-t border-dashed border-line">
      <Container>
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow">
            &copy; 2026 {profile.name} <span className="text-muted">/</span> All rights reserved
          </p>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted transition-colors duration-300 hover:text-bone"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-muted transition-colors duration-300 hover:text-bone"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline text-sm text-muted transition-colors duration-300 hover:text-bone"
            >
              Email
            </a>
            <a
              href="#top"
              className="link-underline text-sm text-muted transition-colors duration-300 hover:text-bone"
            >
              Back to top
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
