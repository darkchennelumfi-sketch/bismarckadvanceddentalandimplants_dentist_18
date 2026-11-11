const items = [
  "Dental Implants",
  "All-on-4",
  "Bone Grafting",
  "Invisalign",
  "Sedation Dentistry",
  "In-House Lab",
  "Emergency Care",
  "Cosmetic Dentistry",
];

function MarqueeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center whitespace-nowrap px-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70 sm:px-8"
        >
          <svg
            viewBox="0 0 12 12"
            className="mr-6 size-2 text-copper-soft sm:mr-8"
            aria-hidden="true"
          >
            <path
              d="M6 0v12M0 6h12"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-pine-deep py-4">
      <div className="animate-marquee flex w-max">
        <MarqueeRow />
        <MarqueeRow hidden />
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-pine-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-pine-deep to-transparent" />
    </div>
  );
}
