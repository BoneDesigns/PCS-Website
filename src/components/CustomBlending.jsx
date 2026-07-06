import { ClipboardList, Beaker, ShieldCheck, Truck } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";
import Button from "./Button.jsx";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Your Spec",
    description:
      "We start with your ore body, circuit design, and target recovery objectives — not a standard catalog mix.",
  },
  {
    icon: Beaker,
    title: "Our Chemistry",
    description:
      "Technical blending staff formulate frother and collector packages engineered to your exact requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Batch Consistency",
    description:
      "Every batch is built to hit your target — so performance doesn't drift from drum to drum, tote to tote.",
  },
  {
    icon: Truck,
    title: "Delivered",
    description:
      "Flexible pack sizes, from drums to bulk tote and tanker, scaled to your plant's actual consumption.",
  },
];

export default function CustomBlending() {
  return (
    <section
      id="custom-blending"
      className="section-seam relative overflow-hidden bg-graphite-900 py-28 lg:py-36"
    >
      <div className="absolute inset-0 bg-dot-grid bg-dots opacity-[0.05]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <SectionLabel>Custom Blending</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-lg text-balance font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-paper sm:text-5xl">
                Your spec. Our chemistry.{" "}
                <span className="text-metal">Delivered.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-balance text-base leading-relaxed text-silver-300">
                Most distributors pull from stock. PCS builds to spec. We
                custom blend frother and collector products to match your
                exact circuit requirements — not the closest thing on the
                shelf. Whether you're optimizing an existing program or
                developing a new reagent suite from scratch, our blending
                capabilities let us hit your target, every batch.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <Button href="#contact" variant="accent" className="mt-9">
                Start a Custom Blend
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-graphite-600 shadow-card lg:aspect-auto lg:h-full">
              <img
                src="/images/blending-facility.jpg"
                alt="PCS custom reagent blending facility"
                loading="lazy"
                className="h-full w-full object-cover saturate-[0.72] transition-all duration-500 group-hover:saturate-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-graphite-600 bg-graphite-600 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="group h-full bg-graphite-900 p-8 transition-colors duration-300 hover:bg-graphite-800">
                <span className="tabular font-sans text-[11px] text-signal-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <step.icon
                  className="mt-4 h-6 w-6 text-silver-300 transition-colors duration-300 group-hover:text-signal-400"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-display text-lg font-semibold text-paper">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-silver-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
