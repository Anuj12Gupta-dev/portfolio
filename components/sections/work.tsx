import { projects } from "@/lib/content";
import { ArrowUpRight, Container, SectionHeader, Tag } from "@/components/ui";
import {
  ProjectPreview,
  type PreviewKind,
} from "@/components/illustrations/project-preview";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

/** Each product gets its own wireframe so the grid reads as six things. */
const PREVIEW: Record<string, PreviewKind> = {
  PeerPrep: "editor",
  Spendly: "dashboard",
  Socially: "feed",
  "PrepMate AI": "chat",
  "CrowdFund DApp": "chain",
  "Ghumkad Travels": "map",
};

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24">
      <Container>
        <div className="py-20 md:py-28 lg:py-32">
          <Reveal>
            <SectionHeader
              id="work-heading"
              badge="Selected work"
              align="center"
              title="Six products, all live"
              lede="Real-time collaboration, AI tooling, social platforms and on-chain systems — each designed, built and deployed end to end."
            />
          </Reveal>

          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <RevealItem key={project.title} className="h-full">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex h-full flex-col overflow-hidden"
                >
                  {/* wireframe preview */}
                  <div className="border-b border-line bg-sunken/50 p-5">
                    <ProjectPreview
                      kind={PREVIEW[project.title] ?? "dashboard"}
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-[19px] tracking-[-0.02em]">{project.title}</h3>
                      <span className="mt-0.5 flex items-center gap-2">
                        <span className="font-mono text-[11px] text-muted">
                          {project.year}
                        </span>
                        <ArrowUpRight className="size-4 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
                      </span>
                    </div>

                    <p className="mt-3 flex-1 text-[14.5px] leading-[1.6] text-body">
                      {project.summary}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 4).map((s) => (
                        <Tag key={s} className="text-[11.5px]">
                          {s}
                        </Tag>
                      ))}
                      {project.stack.length > 4 ? (
                        <span className="inline-flex items-center rounded-full border border-line px-2.5 py-1 text-[11.5px] text-muted">
                          +{project.stack.length - 4}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
