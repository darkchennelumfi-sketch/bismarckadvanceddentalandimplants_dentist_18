import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { lab } from "@/data/content";
import { cn } from "@/lib/utils";

export function HomeLab() {
  return (
    <section className="relative overflow-hidden bg-pine py-20 text-cream sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-10 size-[460px] rounded-full bg-sage/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 size-[420px] rounded-full bg-copper/15 blur-[110px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <p className="eyebrow eyebrow-light">The in-house advantage</p>
          <h2 className="display mt-5 text-[clamp(2.5rem,4.8vw,4.3rem)] text-cream">
            Made <em className="font-light italic text-copper-soft">here.</em>
            <br />
            Made for you.
          </h2>

          <div className="mt-7 space-y-5">
            {lab.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-xl text-[14px] leading-7 text-cream/65 sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {lab.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-[13px] leading-5 text-cream/70"
              >
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-copper/20 text-copper-soft">
                  <Check className="size-3" />
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <Link
            href="/implants/in-house-lab"
            className="link-line mt-9 text-[11px] font-bold uppercase tracking-[0.16em] text-copper-soft transition-colors hover:text-cream"
          >
            Inside our lab
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <Reveal delay={0.1}>
          <div className="relative mx-auto w-full max-w-[480px]">
            <div
              className="pointer-events-none absolute -inset-5 rounded-t-full border border-cream/10"
              aria-hidden="true"
            />
            <div
              className="animate-slow-spin pointer-events-none absolute -right-10 -top-10 size-32 rounded-full border border-dashed border-copper-soft/25"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-2 gap-3">
              {lab.capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={cn(
                    "rounded-[1.35rem] border border-cream/12 bg-cream/[0.045] p-5 backdrop-blur-md transition-colors hover:border-copper-soft/30 hover:bg-cream/[0.075]",
                    index === 0 && "translate-y-5",
                    index === 3 && "translate-y-5",
                  )}
                >
                  <span className="font-display text-sm italic text-copper-soft/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-8 font-display text-[1.55rem] leading-none text-cream">
                    {capability.title}
                  </p>
                  <p className="mt-3 text-[11px] leading-5 text-cream/60">
                    {capability.note}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-10 flex items-center justify-between gap-4 rounded-full border border-cream/12 bg-cream/[0.045] px-5 py-3 backdrop-blur">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Custom made · Custom fit
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-copper-soft">
                Bismarck, ND
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
