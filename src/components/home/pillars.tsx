import Link from "next/link";
import {
  ArrowUpRight,
  Heart,
  HeartHandshake,
  MessageSquareText,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { pillars, whyChoose } from "@/data/content";

const icons: Record<(typeof pillars)[number]["icon"], LucideIcon> = {
  message: MessageSquareText,
  heart: Heart,
  handshake: HeartHandshake,
};

export function HomePillars({ showAboutLink = true }: { showAboutLink?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-bone py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-40 top-10 size-[420px] rounded-full bg-copper/7 blur-[110px]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="eyebrow">Changing your view</p>
          <h2 className="display mt-5 text-[clamp(2.4rem,4.4vw,3.9rem)]">
            Care that starts with{" "}
            <em className="font-light italic text-copper">listening.</em>
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-7 text-ink/65">
            Your time and oral health matter to us. From the first hello, our
            team works to understand what you want — and what you don’t.
          </p>

          <blockquote className="mt-9 border-l border-copper/50 pl-6">
            <p className="font-display text-[1.45rem] font-light italic leading-snug text-ink/85">
              “{whyChoose.quote}”
            </p>
            <footer className="mt-3 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/65">
              Our promise to every patient
            </footer>
          </blockquote>

          {showAboutLink ? (
            <Link
              href="/about"
              className="link-line mt-9 text-[11px] font-bold uppercase tracking-[0.16em] text-ink/70 transition-colors hover:text-copper"
            >
              More about our practice
              <ArrowUpRight className="size-3.5" />
            </Link>
          ) : null}
        </div>

        <div className="border-t border-ink/12">
          {pillars.map((pillar, index) => {
            const Icon = icons[pillar.icon];
            return (
              <Reveal key={pillar.title} delay={index * 0.08}>
                <div className="grid grid-cols-[2.5rem_1fr] gap-5 border-b border-ink/12 py-8 sm:grid-cols-[3.5rem_1fr] sm:gap-7 sm:py-10">
                  <span className="font-display text-lg italic text-copper">
                    {pillar.number}
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="grid size-9 place-items-center rounded-full border border-ink/12 text-copper">
                        <Icon className="size-4" strokeWidth={1.6} />
                      </span>
                      <h3 className="font-display text-[1.65rem] text-ink sm:text-[1.85rem]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="mt-4 max-w-2xl text-[14px] leading-7 text-ink/65">
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
