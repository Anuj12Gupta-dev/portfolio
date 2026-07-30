import type { CSSProperties } from "react";
import { education } from "@/lib/content";
import { Section, SectionHeading } from "@/components/primitives";

export function Education() {
  return (
    <Section id="education" index="05" label="Education">
      <SectionHeading id="education">Where the foundations came from.</SectionHeading>

      <ol className="border-t border-dashed border-line">
        {education.map((entry, i) => (
          <li
            key={entry.institution}
            className="border-b border-dashed border-line"
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` } as CSSProperties}
          >
            <article className="grid grid-cols-1 gap-x-12 gap-y-4 py-9 md:grid-cols-12 md:py-12">
              <p className="eyebrow md:col-span-3 md:pt-1.5">{entry.period}</p>

              <div className="md:col-span-9">
                <h3 className="text-xl font-medium tracking-tight md:text-2xl">
                  {entry.qualification}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{entry.institution}</p>
                <p className="measure mt-5 text-base leading-relaxed text-soft">{entry.note}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
