import { Droplets, FlaskConical, SlidersHorizontal, Check } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

const PRODUCTS = [
  {
    icon: Droplets,
    eyebrow: "01 / Frothers",
    title: "Frothers",
    image: "/images/product-frothers.jpg",
    formula: "MIBC · Glycol · Alcohol · Pine Oil · 2EH",
    description:
      "PCS supplies the full range of frother chemistries used in coal and hard rock flotation circuits — from fast-froth MIBC for coal applications to glycol-based and alcohol frothers for sulfide mineral circuits. We stock and custom blend to match your target bubble size, froth stability, and drainage characteristics.",
    items: [
      "MIBC",
      "Polypropylene Glycol",
      "Alcohol Blends",
      "Pine Oil",
      "2-Ethyl Hexanol (2EH)",
    ],
  },
  {
    icon: FlaskConical,
    eyebrow: "02 / Collectors",
    title: "Collectors",
    image: "/images/product-collectors.jpg",
    formula: "Fatty Acid · Xanthate Blends · Custom Formulations",
    description:
      "Our collector portfolio covers fatty acid programs for phosphate and iron ore reverse flotation, xanthate-based programs for sulfide mineral recovery, and custom-blended collector packages engineered to match your specific ore mineralogy and pH conditions.",
    items: [
      "Fatty Acid Programs",
      "Sulfide Mineral Collectors",
      "Coal Flotation Collectors",
      "Blended Collector Packages",
    ],
  },
  {
    icon: SlidersHorizontal,
    eyebrow: "03 / Custom Blending",
    title: "Custom Blending",
    image: "/images/product-custom-blending.jpg",
    formula: "Your Spec. Our Chemistry. Delivered.",
    description:
      "PCS specializes in custom reagent blending for customers who need chemistry that matches their exact circuit specifications. Whether you're optimizing an existing program or developing a new reagent suite from scratch, our blending capabilities let us hit your target — every batch, every time.",
    items: [
      "Customer-Spec Formulation",
      "Batch Consistency",
      "Flexible Pack Sizes",
      "Technical Blending Support",
    ],
  },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-ink py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <Reveal>
            <SectionLabel>Reagent Portfolio</SectionLabel>
            <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold uppercase tracking-tight text-paper sm:text-5xl">
              Built for coal &amp; hard rock circuits.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-balance font-sans text-sm leading-relaxed text-silver-400">
              Three product lines, one technical standard — chemistry
              selected and blended to match how your circuit actually
              behaves, not what's closest on the shelf.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRODUCTS.map((product, i) => (
            <Reveal key={product.title} delay={i * 0.12}>
              <article className="group top-light flex h-full flex-col rounded-2xl border border-graphite-600 bg-graphite-800/60 p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-signal/40 hover:bg-graphite-800 hover:shadow-card-hover">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-graphite-600">
                  <img
                    src={product.image}
                    alt={`${product.title} — ${product.formula}`}
                    loading="lazy"
                    className="h-full w-full object-cover saturate-[0.72] transition-all duration-500 group-hover:scale-105 group-hover:saturate-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
                </div>

                <span className="mt-7 font-mono text-[11px] uppercase tracking-widest2 text-signal-300">
                  {product.eyebrow}
                </span>
                <h3 className="mt-3 font-display text-2xl font-semibold text-paper">
                  {product.title}
                </h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-wide text-silver-500">
                  {product.formula}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-silver-300">
                  {product.description}
                </p>

                <ul className="mt-7 space-y-2.5 border-t border-graphite-600 pt-6">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-silver-300"
                    >
                      <Check
                        className="h-3.5 w-3.5 shrink-0 text-signal-400"
                        strokeWidth={2.5}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
