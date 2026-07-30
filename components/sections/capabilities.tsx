import { capabilities } from "@/lib/content";
import { Container, IconTile, SectionHeader, Tag } from "@/components/ui";
import { Icon, type IconKey } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="scroll-mt-24">
      <Container>
        <div className="py-20 md:py-28 lg:py-32">
          <Reveal>
            <SectionHeader
              id="capabilities-heading"
              badge="Capabilities"
              align="center"
              title="What I can build for you"
              lede="Grouped by what they let me ship rather than by category label — because a percentage next to a framework name has never told anyone anything."
            />
          </Reveal>

          {/*
            Shared-divider grid: cells carry top and left rules, and the
            wrapper's negative offsets tuck the outermost ones under the
            frame where overflow-hidden clips them. Internal dividers
            survive at every breakpoint with no index maths.
          */}
          <Reveal delay={0.08}>
            <div className="mt-14 overflow-hidden rounded-card border border-line bg-surface shadow-soft">
              <RevealGroup
                className="-mt-px -ml-px grid sm:grid-cols-2 lg:grid-cols-4"
                stagger={0.05}
              >
                {capabilities.map((cap) => (
                  <RevealItem
                    key={cap.title}
                    className="group border-t border-l border-line p-6 transition-colors duration-500 hover:bg-sunken/45 sm:p-7"
                  >
                    <IconTile className="transition-colors duration-500 group-hover:border-line-2">
                      <Icon name={cap.icon as IconKey} />
                    </IconTile>

                    <h3 className="mt-5 text-[16.5px] tracking-[-0.015em]">{cap.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-[1.6] text-body">{cap.blurb}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {cap.items.map((item) => (
                        <Tag key={item} className="text-[11.5px]">
                          {item}
                        </Tag>
                      ))}
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
