import {
  SlidersHorizontal,
  Mountain,
  Truck,
  Zap,
  Users,
} from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const REASONS = [
  {
    icon: SlidersHorizontal,
    title: "Custom Blending Capability",
    description:
      "Most distributors pull from stock. PCS builds to spec — matching your exact circuit requirements instead of the closest thing on the shelf.",
  },
  {
    icon: Mountain,
    title: "Coal & Hard Rock Expertise",
    description:
      "We understand the chemistry differences between coal flotation and hard rock sulfide circuits. You'll work with technical professionals who know your application.",
  },
  {
    icon: Truck,
    title: "Flexible Supply",
    description:
      "From drum quantities to bulk tote and tanker delivery, PCS scales supply to match your plant's consumption without forcing minimum orders that don't fit.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description:
      "Custom blends shouldn't mean long lead times. Our blending operations are built for speed — so your circuit doesn't wait on chemistry.",
  },
  {
    icon: Users,
    title: "Direct Relationships",
    description:
      "No layers of reps and distributors. When you call PCS, you talk to someone who knows your account, your products, and your plant.",
  },
];

export default function WhyPCS() {
  return (
    <section
      id="why-pcs"
      className="section-seam relative bg-ink py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>Why Premier Chemical Solution</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
            A technical partner, not a parts counter.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-graphite-600 border-y border-graphite-600">
          {REASONS.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.08}>
              <div className="group -mx-4 grid grid-cols-1 items-start gap-4 rounded-xl px-4 py-9 transition-colors duration-300 hover:bg-graphite-800/40 sm:grid-cols-12 sm:gap-6 sm:py-10">
                <div className="flex items-center gap-4 sm:col-span-5 sm:gap-6">
                  <span className="tabular font-mono text-xs text-silver-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <reason.icon
                    className="h-6 w-6 shrink-0 text-signal-400 transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-display text-xl font-semibold text-paper sm:text-2xl">
                    {reason.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-silver-400 sm:col-span-7 sm:text-base">
                  {reason.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
