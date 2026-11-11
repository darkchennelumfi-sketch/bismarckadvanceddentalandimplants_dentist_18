import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ServiceIcon } from "@/components/service-icon";
import type { Service } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  href,
  index,
  className,
}: {
  service: Service;
  href: string;
  index: number;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] border border-ink/10 bg-white/35 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-copper/35 hover:bg-white/70 hover:shadow-[0_30px_70px_-40px_rgba(20,37,31,0.5)]",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-full border border-ink/10 bg-cream text-copper transition-colors duration-300 group-hover:border-copper/30 group-hover:bg-copper group-hover:text-cream">
          <ServiceIcon name={service.icon} className="size-5" />
        </span>
        <span className="font-display text-sm italic text-ink/65">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-10">
        <h3 className="font-display text-[1.55rem] leading-tight text-ink transition-colors group-hover:text-copper">
          {service.navTitle}
        </h3>
        <p className="mt-3 text-[13px] leading-6 text-ink/65">
          {service.tagline}
        </p>
      </div>

      <span className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/65 transition-colors group-hover:text-copper">
        Explore treatment
        <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
