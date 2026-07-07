import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Button from "./Button.jsx";

const TAGS = [
  "Frothers",
  "Collectors",
  "Glycol",
  "Alcohol / MIBC",
  "Fatty Acid",
  "Pine Oil",
  "2-Ethyl Hexanol (2EH)",
  "Custom Blends",
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-ink pt-28">
      {/* background photo */}
      <motion.div
        initial={{ scale: reduce ? 1 : 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduce ? 0.4 : 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <img
          src="/images/hero-plant.jpg?v=2"
          alt="Premier Chemical Solution tanker truck at a chemical plant at dusk"
          className="h-full w-full object-cover object-[75%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10 md:via-ink/75 md:to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-ink/10 to-transparent md:from-ink/90 md:via-ink/20" />
        {/* cinematic vignette for depth */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 40%, transparent 55%, rgba(0,0,0,0.55) 100%)",
          }}
        />
      </motion.div>

      {/* diagonal wedge motif, echoes the brochure mark */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 md:block">
        <div
          className="h-full w-full bg-gradient-to-bl from-graphite-600/40 via-transparent to-transparent"
          style={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 75% 100%)" }}
        />
      </div>
      <div className="absolute inset-0 bg-dot-grid bg-dots opacity-[0.07]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-20 pt-16 lg:px-10 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-signal" />
          <span className="font-sans text-[11px] font-medium uppercase tracking-widest2 text-signal-300">
            Coal &amp; Hard Rock Mining · Flotation Reagents
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-4xl font-display text-[12vw] font-semibold uppercase leading-[0.95] tracking-tight text-paper sm:text-6xl lg:text-7xl"
        >
          Flotation chemistry
          <br />
          <span className="text-metal">engineered for you.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-xl text-balance font-sans text-base leading-relaxed text-silver-300 sm:text-lg"
        >
          Premier Chemical Solution LLC is a specialty flotation reagent
          supplier serving coal and hard rock mining operations across the
          United States — combining technical expertise with custom blending
          to match your ore body, circuit design, and recovery targets.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="#contact" variant="primary">
            Build Your Reagent Program
          </Button>
          <Button href="#products" variant="secondary">
            Explore Products
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 max-w-2xl border-t border-white/10 pt-6"
        >
          <a
            href="#products"
            className="group mb-4 inline-flex items-center gap-2 font-sans text-[11px] font-medium uppercase tracking-widest2 text-silver-400 transition-colors hover:text-paper"
          >
            Full Reagent Portfolio
            <ArrowRight
              className="h-3.5 w-3.5 text-signal-400 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </a>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
            {TAGS.map((tag, i) => (
              <span key={tag} className="flex items-center gap-x-3">
                <span className="font-sans text-[13px] font-medium uppercase tracking-wide text-silver-300">
                  {tag}
                </span>
                {i < TAGS.length - 1 && (
                  <span
                    className="h-1 w-1 rounded-full bg-signal/50"
                    aria-hidden="true"
                  />
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={reduce ? {} : { y: [0, 8, 0] }}
        transition={
          reduce ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-silver-500 lg:block"
      >
        <ChevronDown className="h-5 w-5" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
