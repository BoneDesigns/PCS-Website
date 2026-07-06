import Logo from "./Logo.jsx";

const LINKS = [
  { label: "Products", href: "#products" },
  { label: "Custom Blending", href: "#custom-blending" },
  { label: "Why PCS", href: "#why-pcs" },
  { label: "Markets", href: "#markets" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-graphite-700 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <Logo />
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-wider text-silver-400 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-graphite-700 pt-8 text-xs text-silver-500 sm:flex-row sm:items-center sm:justify-between">
          <span>
            &copy; {new Date().getFullYear()} Premier Chemical Solution LLC.
            All rights reserved.
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider">
            15 Plant Road, Nitro, WV · Flotation Reagents · Custom Blending
          </span>
        </div>
      </div>
    </footer>
  );
}
