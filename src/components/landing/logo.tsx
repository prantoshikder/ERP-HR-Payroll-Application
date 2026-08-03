export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="from-brand-500 to-brand-700 shadow-glow relative grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br">
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M5 18V7.5M12 18V4M19 18v-7"
            stroke="white"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="19" cy="7" r="2.2" fill="#34d399" />
        </svg>
      </span>
      <span
        className={`font-display text-[1.15rem] font-extrabold tracking-tight ${
          inverted ? "text-white" : "text-ink-900"
        }`}
      >
        Kormo<span className="text-brand-600">Pay</span>
      </span>
    </span>
  );
}
