export default function Logo({ className = "", showWordmark = true, onClick }) {
  return (
    <a href="#top" onClick={onClick} className={`flex items-center gap-3 ${className}`}>
      <img
        src="/images/logo-mark.png?v=2"
        alt="Premier Chemical Solution mark"
        className="h-12 w-12 object-contain"
      />
      {showWordmark && (
        <span className="font-display text-sm font-semibold leading-tight tracking-tight text-paper">
          PREMIER CHEMICAL
          <span className="block font-sans text-[10px] font-medium tracking-widest2 text-silver-400">
            SOLUTION LLC
          </span>
        </span>
      )}
    </a>
  );
}
