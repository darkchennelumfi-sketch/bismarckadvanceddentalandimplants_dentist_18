import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/breadcrumbs";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  meta,
  children,
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  crumbs: Crumb[];
  meta?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-pine text-cream",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" />
      <div className="pointer-events-none absolute -right-24 -top-40 size-[520px] rounded-full bg-copper/14 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-64 left-1/4 size-[420px] rounded-full bg-sage/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 hidden h-[430px] w-[430px] translate-y-1/4 rounded-t-full border border-cream/10 lg:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-2 bottom-0 hidden h-[330px] w-[330px] translate-y-1/4 rounded-t-full border border-cream/8 lg:block"
        aria-hidden="true"
      />

      <div className="container-x relative pb-16 pt-8 sm:pb-20 lg:pb-24 lg:pt-10">
        <Breadcrumbs items={crumbs} light />

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-4xl">
            <p className="eyebrow eyebrow-light mb-6">{eyebrow}</p>
            <h1 className="display text-[clamp(2.8rem,6.2vw,5.6rem)] text-cream">
              {title}
            </h1>
            {description ? (
              <p className="mt-7 max-w-2xl text-[15px] leading-7 text-cream/60 sm:text-base">
                {description}
              </p>
            ) : null}
            {children}
          </div>

          {meta ? (
            <div className="flex shrink-0 items-center gap-6 border-t border-cream/15 pt-5 lg:flex-col lg:items-start lg:border-l lg:border-t-0 lg:pb-2 lg:pl-8 lg:pt-0">
              {meta}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
