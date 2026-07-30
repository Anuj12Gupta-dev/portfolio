import type { CSSProperties } from "react";
import { skills } from "@/lib/content";
import { Section, SectionHeading } from "@/components/primitives";
import { cn } from "@/lib/utils";

export function Capabilities() {
  return (
    <Section id="capabilities" index="04" label="Capabilities">
      <SectionHeading
        id="capabilities"
        lede="The tools I reach for. Listed plainly, because a percentage next to a framework name has never told anyone anything."
      >
        What I work with.
      </SectionHeading>

      {/*
        Shared-divider grid. Two tricks are at work:

        1. `-mt-px -ml-px` pushes each cell's outer rules under the
           container edge, where overflow-hidden clips them — so only
           internal dividers survive, at any breakpoint, no index maths.
        2. The outer `-mx-6` exactly cancels each cell's `px-6`, so the
           first column's text lands flush with the section heading
           instead of sitting a cell-padding's width to its right.
      */}
      <div className="-mx-6 overflow-hidden border-y border-dashed border-line" data-reveal>
        <div className="-mt-px -ml-px grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <div
              key={category.group}
              className={cn(
                "border-t border-l border-dashed border-line px-6 py-8 transition-colors duration-500 hover:bg-ink-2 sm:py-10",
                category.wide && "sm:col-span-2 lg:col-span-3",
              )}
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as CSSProperties}
            >
              <h3 className="eyebrow">{category.group}</h3>
              <ul
                className={cn(
                  "mt-5",
                  category.wide ? "flex flex-wrap gap-x-8 gap-y-2" : "space-y-2",
                )}
              >
                {category.items.map((item) => (
                  <li key={item} className="text-[0.9375rem] leading-snug text-soft">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
