import type { CSSProperties } from "react";
import { projects } from "@/lib/content";
import { ArrowUpRight, Section, SectionHeading } from "@/components/primitives";

export function Work() {
  return (
    <Section id="work" index="03" label="Selected work">
      <SectionHeading
        id="work"
        lede="Six applications, all live and publicly available. Real-time collaboration, social platforms, AI tooling and on-chain systems."
      >
        Work that ships.
      </SectionHeading>

      <ol className="border-t border-dashed border-line">
        {projects.map((project, i) => (
          <li
            key={project.title}
            className="border-b border-dashed border-line"
            data-reveal
            style={{ "--reveal-delay": `${Math.min(i, 4) * 70}ms` } as CSSProperties}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-4 block px-4 py-9 transition-colors duration-500 hover:bg-ink-2 md:-mx-6 md:px-6 md:py-11"
            >
              <article className="grid grid-cols-1 gap-x-12 gap-y-4 md:grid-cols-12">
                <div className="flex items-baseline gap-4 md:col-span-3 md:block md:pt-2">
                  <span className="eyebrow tabular-nums text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="eyebrow md:mt-3 md:block">{project.year}</span>
                </div>

                <div className="md:col-span-9">
                  <h3 className="flex items-start justify-between gap-6 text-2xl font-medium tracking-tight md:text-[1.75rem]">
                    <span className="transition-colors duration-300">{project.title}</span>
                    <ArrowUpRight className="mt-1.5 size-5 shrink-0 text-line-2 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-bone" />
                  </h3>

                  <p className="measure mt-4 text-base leading-relaxed text-soft">
                    {project.summary}
                  </p>

                  <p className="mt-6 font-mono text-[11px] leading-relaxed tracking-wide text-muted">
                    {project.stack.join("  ·  ")}
                  </p>
                </div>
              </article>
            </a>
          </li>
        ))}
      </ol>
    </Section>
  );
}
