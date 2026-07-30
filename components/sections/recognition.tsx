import type { CSSProperties } from "react";
import { recognition } from "@/lib/content";
import { Section, SectionHeading } from "@/components/primitives";

export function Recognition() {
  return (
    <Section id="recognition" index="06" label="Recognition">
      <SectionHeading id="recognition">Competitions and coursework.</SectionHeading>

      <ol className="border-t border-dashed border-line">
        {recognition.map((item, i) => (
          <li
            key={item.title}
            className="border-b border-dashed border-line"
            data-reveal
            style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
          >
            <article className="grid grid-cols-1 gap-x-12 gap-y-2 py-7 md:grid-cols-12 md:py-8">
              <p className="eyebrow md:col-span-3 md:pt-1">{item.period}</p>

              <div className="md:col-span-9">
                <h3 className="text-lg font-medium tracking-tight md:text-xl">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted">{item.role}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
