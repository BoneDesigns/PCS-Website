/**
 * Differentiator strip — a slow, continuous marquee of PCS's real
 * positioning points (all drawn from the brochure, no invented metrics).
 * Reinforces credibility between the positioning and product sections.
 * Pauses on hover and is hidden from screen readers (decorative repetition);
 * the same facts are stated plainly elsewhere on the page.
 */
const ITEMS = [
  "Custom Blended to Spec",
  "Coal & Hard Rock Expertise",
  "Drum · Tote · Tanker Supply",
  "Batch-to-Batch Consistency",
  "Fast Turnaround",
  "Direct Technical Relationships",
  "Frother & Collector Programs",
  "Serving Operations Across the U.S.",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div
      aria-hidden="true"
      className="relative flex overflow-hidden border-y border-graphite-700 bg-graphite-900/60 py-5"
    >
      {/* edge fades so items dissolve in/out rather than hard-clip */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10 [animation-play-state:running] hover:[animation-play-state:paused]">
        {row.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center gap-10">
            <span className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-silver-400">
              {item}
            </span>
            <span className="h-1 w-1 rounded-full bg-signal/60" />
          </div>
        ))}
      </div>
    </div>
  );
}
