const STAGES = [
  { label: "Invoice", sub: "created" },
  { label: "Gateway", sub: "routed" },
  { label: "Payout", sub: "executed" },
  { label: "Ledger", sub: "reconciled" },
] as const;

/**
 * The merchant payment lifecycle, drawn as a four-stage pipeline.
 * Sits alongside the experience entry it describes.
 */
export function PipelineDiagram({ className }: { className?: string }) {
  const W = 620;
  const boxW = 122;
  const gap = (W - STAGES.length * boxW) / (STAGES.length - 1);

  return (
    <svg
      viewBox={`0 0 ${W} 150`}
      fill="none"
      className={className}
      role="img"
      aria-label="Pipeline: invoice created, gateway routed, payout executed, ledger reconciled."
    >
      {/* baseline rail */}
      <path
        d={`M0 58 H${W}`}
        className="stroke-blueprint/30"
        strokeWidth="1"
        strokeDasharray="2 6"
      />

      {STAGES.map((stage, i) => {
        const x = i * (boxW + gap);
        return (
          <g key={stage.label}>
            <rect
              x={x}
              y="32"
              width={boxW}
              height="52"
              rx="12"
              className="fill-surface stroke-line"
              strokeWidth="1"
            />
            <text
              x={x + boxW / 2}
              y="55"
              textAnchor="middle"
              className="fill-ink font-sans text-[13px] font-semibold"
            >
              {stage.label}
            </text>
            <text
              x={x + boxW / 2}
              y="71"
              textAnchor="middle"
              className="fill-muted font-mono text-[10px]"
            >
              {stage.sub}
            </text>

            {/* connector to the next stage */}
            {i < STAGES.length - 1 ? (
              <>
                <path
                  id={`stage-${i}`}
                  d={`M${x + boxW} 58 H${x + boxW + gap}`}
                  className="flow stroke-blueprint"
                  strokeWidth="1"
                />
                <circle
                  r="2.5"
                  className="fill-accent [@media(prefers-reduced-motion:reduce)]:hidden"
                >
                  <animateMotion dur="2.8s" begin={`${i * 0.7}s`} repeatCount="indefinite">
                    <mpath href={`#stage-${i}`} />
                  </animateMotion>
                </circle>
              </>
            ) : null}

            {/* tick marks under each stage */}
            <path
              d={`M${x + boxW / 2} 96 v10`}
              className="stroke-blueprint/40"
              strokeWidth="1"
            />
            <circle cx={x + boxW / 2} cy="112" r="3" className="fill-accent/70" />
          </g>
        );
      })}

      <text
        x={W / 2}
        y="136"
        textAnchor="middle"
        className="fill-muted font-mono text-[10px] tracking-[0.16em] uppercase"
      >
        Merchant payment lifecycle
      </text>
    </svg>
  );
}
