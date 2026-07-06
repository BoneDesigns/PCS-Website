/**
 * Designed stand-in for photography that hasn't been dropped in yet.
 * Swap by replacing the section's <ImagePlaceholder /> with an <img>/<div
 * style={{ backgroundImage }}> pointing at the real photo — the corner
 * brackets + label make it obvious where real photography belongs.
 */
export default function ImagePlaceholder({
  label = "INDUSTRIAL PHOTOGRAPHY",
  icon: Icon,
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-graphite-600 bg-graphite-800 ${className}`}
    >
      <div className="absolute inset-0 bg-grid-lines bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-br from-graphite-700/60 via-transparent to-ink/80" />

      {/* corner brackets */}
      <div className="absolute left-4 top-4 h-5 w-5 border-l-2 border-t-2 border-silver-500/50" />
      <div className="absolute right-4 top-4 h-5 w-5 border-r-2 border-t-2 border-silver-500/50" />
      <div className="absolute bottom-4 left-4 h-5 w-5 border-b-2 border-l-2 border-silver-500/50" />
      <div className="absolute bottom-4 right-4 h-5 w-5 border-b-2 border-r-2 border-silver-500/50" />

      <div className="relative flex h-full min-h-[220px] flex-col items-center justify-center gap-3 p-8 text-center">
        {Icon && (
          <Icon className="h-7 w-7 text-silver-500" strokeWidth={1.25} />
        )}
        <span className="font-sans text-[10px] uppercase tracking-widest2 text-silver-500">
          {label}
        </span>
        <span className="font-sans text-[10px] uppercase tracking-wider text-graphite-500">
          Replace with photography
        </span>
      </div>
    </div>
  );
}
