import { experience } from "@/lib/content";
import { Badge, Card, Container, SectionHeader, Tag } from "@/components/ui";
import { PipelineDiagram } from "@/components/illustrations/pipeline";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="scroll-mt-24">
      <Container>
        <div className="py-20 md:py-28 lg:py-32">
          <Reveal>
            <SectionHeader
              id="experience-heading"
              badge="Experience"
              align="center"
              title="Fintech infrastructure, in production"
              lede="Backend engineering on live payment rails — where a failed webhook is a real reconciliation problem and a rounding error is a real rupee."
            />
          </Reveal>

          {/* the lifecycle this role owns */}
          <Reveal delay={0.1}>
            <div className="mt-14 overflow-hidden rounded-card border border-line bg-surface px-5 py-7 shadow-soft sm:px-10 sm:py-8">
              <PipelineDiagram className="mx-auto h-auto w-full max-w-[860px]" />
            </div>
          </Reveal>

          {/* the role */}
          {experience.map((role) => (
            <Reveal key={role.title} delay={0.14}>
              <Card className="mt-6 overflow-hidden">
                <div className="flex flex-col gap-4 border-b border-line p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                  <div>
                    <h3 className="text-[22px] tracking-[-0.025em]">{role.title}</h3>
                    <p className="mt-1.5 text-[15px] text-body">{role.org}</p>
                  </div>
                  <Badge className="w-fit shrink-0">{role.period}</Badge>
                </div>

                <div className="p-6 sm:p-8">
                  <p className="measure text-[16px] leading-[1.7] text-body">
                    {role.description}
                  </p>

                  <RevealGroup className="mt-8 grid gap-x-10 gap-y-5 sm:grid-cols-2">
                    {role.highlights.map((point) => (
                      <RevealItem key={point}>
                        <div className="flex gap-3.5">
                          <span
                            aria-hidden
                            className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent"
                          />
                          <p className="text-[15px] leading-[1.6] text-body">{point}</p>
                        </div>
                      </RevealItem>
                    ))}
                  </RevealGroup>

                  <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
                    {role.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
