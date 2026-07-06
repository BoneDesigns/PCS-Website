import { ArrowUpRight } from "lucide-react";

export default function Button({
  children,
  href = "#contact",
  variant = "primary",
  icon = true,
  className = "",
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-sans text-sm font-semibold tracking-wide transition-all duration-300 active:scale-[0.97]";
  const variants = {
    primary:
      "bg-paper text-ink shadow-cta hover:bg-signal hover:text-paper hover:shadow-glow",
    secondary:
      "border border-white/20 bg-white/[0.03] text-paper backdrop-blur-sm hover:border-signal hover:bg-white/5 hover:text-signal-300",
    accent: "bg-signal text-paper shadow-cta hover:bg-signal-400 hover:shadow-glow",
  };

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {icon && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </a>
  );
}
