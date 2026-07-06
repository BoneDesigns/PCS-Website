import { Mountain, Gem, SlidersHorizontal, Headset } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const PILLARS = [
  {
    icon: Mountain,
    title: "Coal Flotation Circuits",
    description:
      "Fast-froth MIBC and collector programs for thermal and metallurgical coal.",
  },
  {
    icon: Gem,
    title: "Hard Rock Sulfide Circuits",
    description:
      "Glycol and alcohol frothers with xanthate collectors for sulfide recovery.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom-Blended Programs",
    description:
      "Reagent packages formulated to your exact circuit specifications.",
  },
  {
    icon: Headset,
    title: "Direct Technical Support",
    description:
      "People who know your account, your products, and your plant.",
  },
];

export default function Positioning() {
  return (
    <section className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Who We Are</SectionLabel>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-4xl text-balance font-display text-2xl font-medium leading-tight tracking-tight text-paper sm:text-3xl lg:text-4xl">
            "Your Premier Flotation Provider." We're a specialty reagent
            supplier — not a generalist distributor — built around one job:
            <span className="text-silver-400">
              {" "}
              precisely formulated frother and collector programs for coal
              and hard rock mining operations across the United States.
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-graphite-600 bg-graphite-600 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.title}
                className="group relative flex flex-col bg-ink p-7 transition-colors duration-300 hover:bg-graphite-800"
              >
                <div className="flex items-center justify-between">
                  <pillar.icon
                    className="h-6 w-6 text-signal-400 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <span className="tabular font-sans text-[11px] text-silver-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-7 font-display text-base font-semibold text-paper">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
