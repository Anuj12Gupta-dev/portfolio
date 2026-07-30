import { about, profile } from "@/lib/content";
import { BlueprintFrame, Container, SectionHeader, SpecTable, Tag } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";

const SPEC = [
  { key: "role", value: "Backend Engineer" },
  { key: "company", value: "Playto" },
  { key: "location", value: profile.location },
  { key: "stack", value: "Django · DRF · PostgreSQL" },
  { key: "status", value: "Open to opportunities" },
] as const;

const FOCUS = ["Payments", "Reconciliation", "REST APIs", "Webhooks", "Ops tooling"];

export function Profile() {
  return (
    <section id="profile" aria-labelledby="profile-heading" className="scroll-mt-24">
      <Container>
        <div className="py-20 md:py-28 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <Reveal>
                <SectionHeader
                  id="profile-heading"
                  badge="Profile"
                  title={about.lead}
                />
              </Reveal>

              <div className="mt-8 space-y-5">
                {about.paragraphs.map((p, i) => (
                  <Reveal key={p} delay={0.06 * (i + 1)}>
                    <p className="measure text-[16.5px] leading-[1.7] text-body">{p}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.24}>
                <div className="mt-9">
                  <p className="eyebrow">Current focus</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {FOCUS.map((f) => (
                      <Tag key={f}>{f}</Tag>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* profile readout card */}
            <Reveal delay={0.14} y={18}>
              <BlueprintFrame className="rounded-card p-3 sm:p-4">
                <div className="card p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-tile border border-line bg-sunken text-ink">
                      <Icon name="server" className="size-5" />
                    </span>
                    <div>
                      <p className="text-[15px] font-semibold text-ink">{profile.name}</p>
                      <p className="font-mono text-[11.5px] text-muted">
                        {profile.githubHandle}
                      </p>
                    </div>
                  </div>

                  <SpecTable rows={SPEC} className="mt-5" />

                  <p className="mt-5 text-[13.5px] leading-relaxed text-body">
                    Currently shipping invoice, payout and reconciliation services used by
                    merchants in production.
                  </p>
                </div>
              </BlueprintFrame>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
