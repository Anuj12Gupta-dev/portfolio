import { education, recognition } from "@/lib/content";
import { Card, Container, IconTile, SectionHeader } from "@/components/ui";
import { Icon } from "@/components/icons";
import { Reveal, RevealGroup, RevealItem } from "@/components/reveal";

/**
 * Education and recognition share one movement — they answer the same
 * question — but keep separate anchors so navigation stays predictable.
 */
export function Credentials() {
  return (
    <>
      <section id="education" aria-labelledby="education-heading" className="scroll-mt-24">
        <Container>
          <div className="pt-20 md:pt-28 lg:pt-32">
            <Reveal>
              <SectionHeader
                id="education-heading"
                badge="Education"
                title="Where the foundations came from"
              />
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-2">
              {education.map((entry) => (
                <RevealItem key={entry.institution} className="h-full">
                  <Card hover className="flex h-full flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <IconTile>
                        <Icon name="graduation" />
                      </IconTile>
                      <span className="font-mono text-[11.5px] text-muted">
                        {entry.period}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[18px] tracking-[-0.02em]">
                      {entry.qualification}
                    </h3>
                    <p className="mt-1.5 text-[14.5px] text-body">{entry.institution}</p>
                    <p className="mt-4 text-[14px] leading-[1.6] text-muted">{entry.note}</p>
                  </Card>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>

      <section id="recognition" aria-labelledby="recognition-heading" className="scroll-mt-24">
        <Container>
          <div className="py-20 md:py-28 lg:py-32">
            <Reveal>
              <SectionHeader
                id="recognition-heading"
                badge="Recognition"
                title="Competitions and coursework"
              />
            </Reveal>

            <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
              {recognition.map((item) => (
                <RevealItem key={item.title} className="h-full">
                  <Card hover className="flex h-full flex-col p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <IconTile>
                        <Icon name="trophy" />
                      </IconTile>
                      <span className="font-mono text-[11.5px] text-muted">
                        {item.period}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[17px] tracking-[-0.02em]">{item.title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.6] text-body">{item.role}</p>
                  </Card>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </section>
    </>
  );
}
