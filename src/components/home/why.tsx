import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FlaskConical } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { whyChoose } from "@/data/content";

export function HomeWhy() {
  return (
    <section className="relative overflow-hidden border-t border-ink/10 bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-[440px] pb-10">
            <div
              className="absolute inset-x-0 top-0 aspect-[4/5] rounded-t-full border border-copper/25"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-5 top-5 aspect-[4/5] rounded-t-full border border-ink/10"
              aria-hidden="true"
            />

            <div className="relative mx-auto aspect-[4/5] w-[calc(100%-3rem)] overflow-hidden rounded-t-full bg-pine text-cream">
              <div className="absolute inset-0 bg-grid-light opacity-40" />
              <div className="absolute -left-16 top-10 size-56 rounded-full bg-copper/20 blur-[70px]" />
              <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-cream/60">
                  Dental implant
                </p>
                <p className="display mt-2 text-[clamp(5rem,11vw,7.5rem)] leading-none">
                  98<span className="text-[0.35em] align-top text-copper-soft">%</span>
                </p>
                <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-cream/70">
                  Success rate
                </p>
                <p className="mt-5 max-w-[15rem] text-[12px] leading-6 text-cream/60">
                  Considered an effective, long-lasting treatment for patients
                  with missing teeth.
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-pine-deep/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-2 flex items-center gap-3 rounded-full border border-ink/10 bg-cream p-2 pr-5 shadow-soft sm:left-6">
              <span className="relative size-14 overflow-hidden rounded-full border border-ink/10">
                <Image
                  src="/images/dr-derik-hoerner.jpg"
                  alt="Dr. Derik Hoerner"
                  fill
                  sizes="56px"
                  className="object-cover object-top"
                />
              </span>
              <span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-ink/65">
                  In the practice
                </span>
                <span className="mt-0.5 block font-display text-lg leading-none text-ink">
                  Dr. Derik Hoerner
                </span>
              </span>
            </div>

            <div className="absolute -right-2 top-14 flex items-center gap-2 rounded-full border border-ink/10 bg-cream/90 px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.14em] text-ink/65 shadow-soft backdrop-blur sm:-right-5">
              <FlaskConical className="size-3.5 text-copper" />
              In-house lab
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <p className="eyebrow">Why Bismarck Advanced</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,4.6vw,4rem)]">
            A practice built around the person{" "}
            <em className="font-light italic text-copper">in the chair.</em>
          </h2>

          <div className="mt-7 space-y-5">
            {whyChoose.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-xl text-[14px] leading-7 text-ink/65 sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild variant="dark">
              <Link href="/about">
                Meet our doctors
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Link
              href="/testimonials"
              className="link-line px-2 text-[11px] font-bold uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-copper"
            >
              Read patient reviews
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
