import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MoveRight } from "lucide-react";

import { Button } from "@/components/ui/button";

function RotatingSeal() {
  return (
    <div className="absolute -left-5 top-14 grid size-24 place-items-center rounded-full border border-ink/10 bg-cream/95 shadow-[0_20px_50px_-24px_rgba(20,37,31,0.55)] backdrop-blur-md sm:-left-9 sm:size-28">
      <svg
        viewBox="0 0 100 100"
        className="animate-slow-spin absolute inset-0 size-full"
        aria-hidden="true"
      >
        <defs>
          <path
            id="seal-circle"
            d="M50,50 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"
          />
        </defs>
        <text className="fill-copper text-[7px] font-bold uppercase tracking-[0.16em]">
          <textPath href="#seal-circle">
            Bismarck Advanced Dental · Implants ·
          </textPath>
        </text>
      </svg>
      <svg viewBox="0 0 32 32" fill="none" className="size-8 text-pine" aria-hidden="true">
        <path
          d="M5 26V16.5C5 10.149 9.925 5 16 5s11 5.149 11 11.5V26"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M11.5 26V17.5a4.5 4.5 0 0 1 9 0V26M16 26v-4.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_88%)] opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-24 size-[520px] rounded-full bg-copper/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-[420px] rounded-full bg-sage/15 blur-[100px]" />

      <div className="container-x relative grid gap-14 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-16">
        <div>
          <p className="eyebrow animate-rise">Bismarck, North Dakota</p>

          <h1 className="display animate-rise mt-6 text-[clamp(3rem,6.6vw,6rem)] [animation-delay:90ms]">
            Change your{" "}
            <em className="font-light italic text-copper">view</em>
            <br />
            of dentistry.
          </h1>

          <p className="animate-rise mt-7 max-w-lg text-[15px] leading-7 text-ink/65 [animation-delay:180ms] sm:text-base">
            Dental implants, cosmetic, restorative, and sedation dentistry — from
            a team that answers your questions, explains your options, and lets
            you decide what comes next.
          </p>

          <div className="animate-rise mt-8 flex flex-wrap gap-3 [animation-delay:260ms]">
            <Button asChild size="lg">
              <Link href="/contact">
                Schedule a consultation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/implants">
                Explore treatments
                <MoveRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="animate-rise mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-ink/10 pt-5 [animation-delay:340ms]">
            {["Dental implants", "Cosmetic", "Restorative", "Sedation"].map(
              (label, index) => (
                <span key={label} className="flex items-center gap-5">
                  {index > 0 ? (
                    <span className="size-1 rounded-full bg-copper/50" aria-hidden="true" />
                  ) : null}
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/65">
                    {label}
                  </span>
                </span>
              ),
            )}
          </div>
        </div>

        <div className="animate-rise relative mx-auto w-full max-w-[540px] [animation-delay:200ms] lg:mx-0">
          <div
            className="pointer-events-none absolute -inset-4 rounded-t-full border border-copper/20 sm:-inset-5"
            aria-hidden="true"
          />
          <div className="arch relative aspect-[4/5] overflow-hidden bg-sand sm:aspect-[5/6]">
            <Image
              src="/images/hero-bismarck.jpg"
              alt="Bismarck, North Dakota"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 92vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-pine-deep/15 to-transparent" />

            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 sm:inset-x-6 sm:bottom-6">
              <div className="rounded-2xl border border-cream/20 bg-pine-deep/35 p-5 backdrop-blur-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/65">
                  Implant success rate
                </p>
                <p className="mt-1 font-display text-4xl font-light text-cream">
                  98<span className="text-xl text-copper-soft">%</span>
                </p>
                <p className="mt-1 text-[11px] text-cream/65">
                  One team, start to finish
                </p>
              </div>
              <p className="pb-1 text-right text-[9px] font-bold uppercase leading-4 tracking-[0.18em] text-cream/65">
                Bismarck
                <br />
                North Dakota
              </p>
            </div>
          </div>

          <RotatingSeal />

          <div className="absolute -bottom-4 -right-2 hidden rounded-full border border-ink/10 bg-cream px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-ink/65 shadow-soft sm:block">
            Implants · Cosmetic · Sedation
          </div>
        </div>
      </div>
    </section>
  );
}
