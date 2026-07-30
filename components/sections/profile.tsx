import type { CSSProperties } from "react";
import { about, profile } from "@/lib/content";
import { Section, SectionHeading } from "@/components/primitives";

const details = [
  { term: "Based in", detail: profile.location },
  { term: "Currently", detail: "Backend engineer, Playto" },
  { term: "Focus", detail: "Fintech backend, payments" },
  { term: "Availability", detail: profile.status },
];

export function Profile() {
  return (
    <Section id="profile" index="01" label="Profile">
      <SectionHeading id="profile">{about.lead}</SectionHeading>

      <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
        <div className="space-y-6 text-base leading-relaxed text-soft md:col-span-1">
          {about.paragraphs.slice(0, 2).map((paragraph, i) => (
            <p
              key={paragraph}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as CSSProperties}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="space-y-10">
          <p
            className="text-base leading-relaxed text-soft"
            data-reveal
            style={{ "--reveal-delay": "140ms" } as CSSProperties}
          >
            {about.paragraphs[2]}
          </p>

          <dl
            className="border-t border-dashed border-line"
            data-reveal
            style={{ "--reveal-delay": "210ms" } as CSSProperties}
          >
            {details.map((row) => (
              <div
                key={row.term}
                className="flex items-baseline justify-between gap-6 border-b border-dashed border-line py-4"
              >
                <dt className="eyebrow">{row.term}</dt>
                <dd className="text-right text-sm text-bone">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
