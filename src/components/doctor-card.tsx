import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Doctor } from "@/data/doctors";
import { cn } from "@/lib/utils";

export function DoctorCard({
  doctor,
  className,
}: {
  doctor: Doctor;
  className?: string;
}) {
  return (
    <article className={cn("group", className)}>
      <Link
        href={`/doctors/${doctor.slug}`}
        className="block focus-visible:outline-none"
      >
        <div className="arch relative aspect-[4/5] overflow-hidden border border-ink/10 bg-sand">
          <Image
            src={doctor.image}
            alt={doctor.imageAlt}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/45 via-transparent to-transparent opacity-60" />
          <span className="absolute bottom-4 left-4 rounded-full border border-cream/25 bg-pine-deep/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-cream backdrop-blur-md">
            Dentist
          </span>
        </div>

        <div className="mt-6 flex items-start justify-between gap-5">
          <div>
            <h3 className="font-display text-[1.75rem] text-ink transition-colors group-hover:text-copper">
              {doctor.name}
            </h3>
            <p className="mt-2 max-w-md text-[13px] leading-6 text-ink/65">
              {doctor.pullQuote}
            </p>
          </div>
          <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-ink/12 text-ink transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
            <ArrowRight className="size-4" />
          </span>
        </div>
      </Link>
    </article>
  );
}
