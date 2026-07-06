export default function SectionLabel({ children, light = false }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`h-px w-8 ${light ? "bg-graphite-600" : "bg-signal"}`}
      />
      <span
        className={`font-sans text-[11px] font-medium uppercase tracking-widest2 ${
          light ? "text-graphite-500" : "text-signal-300"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
