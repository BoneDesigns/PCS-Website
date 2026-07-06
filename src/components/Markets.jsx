import { Mountain, Layers, Magnet, Sprout } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const MARKETS = [
  {
    icon: Mountain,
    title: "Coal",
    subtitle: "Thermal & Metallurgical Flotation Circuits",
  },
  {
    icon: Layers,
    title: "Copper / Zinc",
    subtitle: "Sulfide Mineral Differential Flotation",
  },
  {
    icon: Magnet,
    title: "Iron Ore",
    subtitle: "Reverse Amine & Fatty Acid Flotation",
  },
  {
    icon: Sprout,
    title: "Phosphate",
    subtitle: "Reverse Flotation, Fatty Acid Programs",
  },
];

export default function Markets() {
  return (
    <section
      id="markets"
      className="section-seam relative bg-graphite-900 py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Markets Served</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
            Across coal &amp; hard rock, coast to coast.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETS.map((market, i) => (
            <Reveal key={market.title} delay={i * 0.1}>
              <div className="group top-light relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-graphite-600 bg-ink p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/40 hover:shadow-card-hover">
                <div className="absolute inset-0 bg-dot-grid bg-dots opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.08]" />
                <div className="relative">
                  <market.icon
                    className="h-8 w-8 text-signal-400 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-8 font-display text-2xl font-semibold text-paper">
                    {market.title}
                  </h3>
                  <p className="mt-3 font-mono text-[11px] uppercase leading-relaxed tracking-wide text-silver-500">
                    {market.subtitle}
                  </p>
                </div>
                <span className="tabular relative mt-10 font-mono text-[11px] text-silver-500">
                  {String(i + 1).padStart(2, "0")} / {MARKETS.length}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
