import Link from "next/link";

import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className={cn(
          "flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em]",
          light ? "text-cream/60" : "text-ink/65",
        )}
      >
        <li>
          <Link
            href="/"
            className={cn(
              "transition-colors",
              light ? "hover:text-cream" : "hover:text-ink",
            )}
          >
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-copper">
              /
            </span>
            {item.href ? (
              <Link
                href={item.href}
                className={cn(
                  "transition-colors",
                  light ? "hover:text-cream" : "hover:text-ink",
                )}
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={light ? "text-cream/70" : "text-ink/70"}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
