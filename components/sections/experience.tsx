import type { CSSProperties } from "react";
import { experience } from "@/lib/content";
import { Section, SectionHeading } from "@/components/primitives";

export function Experience() {
  return (
    <Section id="experience" index="02" label="Experience">
      <SectionHeading
        id="experience"
        lede="Backend engineering on live payment rails — where a rounding error is a real rupee and a failed webhook is a real reconciliation problem."
      >
        Fintech infrastructure, in production.
      </SectionHeading>

      <ol className="border-t border-dashed border-line">
        {experience.map((role, i) => (
          <li
            key={role.title}
            className="border-b border-dashed border-line"
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
          >
            <article className="grid grid-cols-1 gap-x-12 gap-y-4 py-9 md:grid-cols-12 md:py-12">
              <p className="eyebrow md:col-span-3 md:pt-1.5">{role.period}</p>

              <div className="md:col-span-9">
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">{role.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{role.org}</p>

                <p className="measure mt-5 text-base leading-relaxed text-soft">
                  {role.description}
                </p>

                <ul className="mt-7 space-y-3.5">
                  {role.highlights.map((point) => (
                    <li
                      key={point}
                      className="measure relative pl-6 text-[0.9375rem] leading-relaxed text-soft before:absolute before:top-[0.72em] before:left-0 before:h-px before:w-3 before:bg-line-2 before:content-['']"
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                  {role.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 font-mono text-[11px] tracking-wide text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
