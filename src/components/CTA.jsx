import { MapPin, Globe, Send } from "lucide-react";
import Reveal from "./Reveal.jsx";
import SectionLabel from "./SectionLabel.jsx";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-28 lg:py-36">
      <div className="absolute inset-0">
        <img
          src="/images/hero-plant.jpg?v=2"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-[0.14] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/95 to-ink" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <div>
            <Reveal>
              <SectionLabel>Get Started</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-balance font-display text-4xl font-semibold uppercase leading-[1.02] tracking-tight text-paper sm:text-5xl lg:text-6xl">
                Ready to build your custom reagent program?
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-md text-balance text-base leading-relaxed text-silver-300">
                Tell us about your circuit and recovery targets. A PCS
                technical contact will follow up to scope a frother,
                collector, or custom-blended program built to your spec.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 space-y-5 border-t border-graphite-600 pt-8">
                <div className="flex items-start gap-3.5">
                  <MapPin
                    className="mt-0.5 h-5 w-5 shrink-0 text-signal-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-silver-300">
                    15 Plant Road, Nitro, WV
                  </span>
                </div>
                <div className="flex items-start gap-3.5">
                  <Globe
                    className="mt-0.5 h-5 w-5 shrink-0 text-signal-400"
                    strokeWidth={1.5}
                  />
                  <span className="text-sm text-silver-300">
                    premierchemsolution.com
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="mt-12 font-display text-lg italic text-silver-400">
                "Your Premier Flotation Provider"
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <form
              className="top-light rounded-2xl border border-graphite-600 bg-graphite-800/70 p-8 shadow-card backdrop-blur-sm sm:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field label="Name" id="name" />
                <Field label="Company" id="company" />
                <Field label="Email" id="email" type="email" />
                <Field label="Phone" id="phone" type="tel" />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="font-sans text-[11px] uppercase tracking-wider text-silver-500"
                >
                  Tell us about your circuit
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Commodity, circuit type, current reagent program, target recovery..."
                  className="mt-2.5 w-full resize-none rounded-lg border border-graphite-600 bg-ink/70 px-4 py-3 text-sm text-paper transition-all duration-200 placeholder:text-graphite-500 focus:border-signal/70 focus:shadow-input-focus focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-signal px-7 py-3.5 font-sans text-sm font-semibold text-paper transition-colors duration-300 hover:bg-signal-400 sm:w-auto"
              >
                Submit Inquiry
                <Send
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  strokeWidth={2}
                />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text" }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-sans text-[11px] uppercase tracking-wider text-silver-500"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="mt-2.5 w-full rounded-lg border border-graphite-600 bg-ink/70 px-4 py-3 text-sm text-paper transition-all duration-200 placeholder:text-graphite-500 focus:border-signal/70 focus:shadow-input-focus focus:outline-none"
      />
    </div>
  );
}
