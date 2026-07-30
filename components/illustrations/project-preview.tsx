/**
 * Abstract browser preview for a project card.
 *
 * Each project gets a different wireframe layout so the grid reads as
 * six distinct products rather than one repeated placeholder. Nothing
 * here is a screenshot — it is a schematic of the interface.
 */
export type PreviewKind = "editor" | "dashboard" | "feed" | "chat" | "chain" | "map";

const BAR = "fill-sunken";
const SOFT = "fill-accent/25";
const STRONG = "fill-accent/70";

function Body({ kind }: { kind: PreviewKind }) {
  switch (kind) {
    case "editor":
      return (
        <>
          <rect x="14" y="44" width="86" height="98" rx="6" className={BAR} />
          {[54, 66, 78, 90, 102, 114].map((y, i) => (
            <rect
              key={y}
              x="22"
              y={y}
              width={i % 3 === 0 ? 60 : 44}
              height="4"
              rx="2"
              className={STRONG}
            />
          ))}
          <rect x="110" y="44" width="116" height="60" rx="6" className={BAR} />
          <circle cx="140" cy="74" r="12" className={SOFT} />
          <circle cx="172" cy="74" r="12" className={SOFT} />
          <rect x="110" y="112" width="116" height="30" rx="6" className={BAR} />
          <rect x="118" y="123" width="70" height="4" rx="2" className={STRONG} />
        </>
      );
    case "dashboard":
      return (
        <>
          <rect x="14" y="44" width="100" height="42" rx="6" className={BAR} />
          <rect x="22" y="54" width="40" height="5" rx="2.5" className={STRONG} />
          <rect x="22" y="66" width="64" height="10" rx="3" className={SOFT} />
          <rect x="122" y="44" width="104" height="42" rx="6" className={BAR} />
          <rect x="130" y="54" width="34" height="5" rx="2.5" className={STRONG} />
          <rect x="130" y="66" width="56" height="10" rx="3" className={SOFT} />
          <rect x="14" y="94" width="212" height="48" rx="6" className={BAR} />
          {[24, 44, 64, 84, 104, 124, 144, 164, 184, 204].map((x, i) => (
            <rect
              key={x}
              x={x}
              y={132 - (6 + ((i * 7) % 26))}
              width="10"
              height={6 + ((i * 7) % 26)}
              rx="2"
              className={i % 3 === 1 ? STRONG : SOFT}
            />
          ))}
        </>
      );
    case "feed":
      return (
        <>
          <rect x="14" y="44" width="60" height="98" rx="6" className={BAR} />
          <circle cx="30" cy="60" r="7" className={SOFT} />
          {[76, 90, 104].map((y) => (
            <rect key={y} x="22" y={y} width="44" height="4" rx="2" className={STRONG} />
          ))}
          {[44, 96].map((y) => (
            <g key={y}>
              <rect x="82" y={y} width="144" height="44" rx="6" className={BAR} />
              <circle cx="98" cy={y + 16} r="7" className={SOFT} />
              <rect x="112" y={y + 12} width="52" height="4" rx="2" className={STRONG} />
              <rect x="90" y={y + 28} width="120" height="4" rx="2" className={SOFT} />
            </g>
          ))}
        </>
      );
    case "chat":
      return (
        <>
          <rect x="14" y="44" width="212" height="76" rx="6" className={BAR} />
          <rect x="24" y="54" width="96" height="18" rx="9" className={SOFT} />
          <rect x="120" y="78" width="96" height="18" rx="9" className={STRONG} />
          <rect x="24" y="100" width="72" height="12" rx="6" className={SOFT} />
          <rect x="14" y="128" width="176" height="14" rx="7" className={BAR} />
          <rect x="198" y="128" width="28" height="14" rx="7" className={STRONG} />
        </>
      );
    case "chain":
      return (
        <>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect
                x={16 + i * 72}
                y="60"
                width="56"
                height="56"
                rx="8"
                className={BAR}
              />
              <rect
                x={26 + i * 72}
                y="72"
                width="36"
                height="4"
                rx="2"
                className={STRONG}
              />
              <rect
                x={26 + i * 72}
                y="82"
                width="24"
                height="4"
                rx="2"
                className={SOFT}
              />
              <circle cx={44 + i * 72} cy="102" r="6" className={SOFT} />
              {i < 2 ? (
                <path
                  d={`M${72 + i * 72} 88 h16`}
                  className="stroke-blueprint"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                />
              ) : null}
            </g>
          ))}
          <rect x="16" y="128" width="208" height="14" rx="7" className={BAR} />
        </>
      );
    case "map":
      return (
        <>
          <rect x="14" y="44" width="132" height="98" rx="6" className={BAR} />
          <path
            d="M28 120 C 56 96, 74 112, 96 88 S 124 66, 134 58"
            className="stroke-accent"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            fill="none"
          />
          <circle cx="28" cy="120" r="4" className={STRONG} />
          <circle cx="134" cy="58" r="4" className={STRONG} />
          <rect x="154" y="44" width="72" height="98" rx="6" className={BAR} />
          {[54, 72, 90, 108, 126].map((y) => (
            <rect key={y} x="162" y={y} width="52" height="6" rx="3" className={SOFT} />
          ))}
        </>
      );
  }
}

export function ProjectPreview({
  kind,
  className,
}: {
  kind: PreviewKind;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 240 156" fill="none" className={className} aria-hidden>
      <rect
        x="0.5"
        y="0.5"
        width="239"
        height="155"
        rx="11.5"
        className="fill-paper stroke-line"
        strokeWidth="1"
      />
      {/* browser chrome */}
      <path d="M0 30 H240" className="stroke-line" strokeWidth="1" />
      <circle cx="16" cy="15" r="3.5" className="fill-accent/60" />
      <circle cx="28" cy="15" r="3.5" className="fill-accent/60" />
      <circle cx="40" cy="15" r="3.5" className="fill-accent/60" />
      <rect x="56" y="8.5" width="132" height="13" rx="6.5" className="fill-sunken" />
      <Body kind={kind} />
    </svg>
  );
}
