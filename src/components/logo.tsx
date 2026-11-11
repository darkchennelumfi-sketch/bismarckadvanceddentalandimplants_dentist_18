import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Bismarck Advanced Dental & Implants — home"
      className={cn(
        "group inline-flex items-center gap-3 focus-visible:outline-none",
        className,
      )}
    >
      <span
        className={cn(
          "grid size-10 shrink-0 place-items-center rounded-full border transition-colors",
          light
            ? "border-cream/25 text-copper-soft group-hover:border-copper-soft"
            : "border-ink/15 text-copper group-hover:border-copper",
        )}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          className="size-5"
          aria-hidden="true"
        >
          <path
            d="M5 26V16.5C5 10.149 9.925 5 16 5s11 5.149 11 11.5V26"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M11.5 26V17.5a4.5 4.5 0 0 1 9 0V26"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M16 26v-4.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-medium tracking-[-0.02em]",
            light ? "text-cream" : "text-ink",
          )}
        >
          Bismarck
        </span>
        <span
          className={cn(
            "mt-1 text-[9px] font-bold uppercase tracking-[0.22em]",
            light ? "text-cream/65" : "text-ink/65",
          )}
        >
          Advanced Dental &amp; Implants
        </span>
      </span>
    </Link>
  );
}
