import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function HomeVisit() {
  return (
    <section className="relative overflow-hidden bg-bone py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-32 top-0 size-[420px] rounded-full bg-copper/8 blur-[110px]" />
      <div className="container-x relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">Visit the office</p>
          <h2 className="display mt-5 text-[clamp(2.6rem,5vw,4.4rem)]">
            Come see us in{" "}
            <em className="font-light italic text-copper">Bismarck.</em>
          </h2>
          <p className="mt-6 max-w-md text-[14px] leading-7 text-ink/65">
            We’re on South 7th Street, ready to welcome you and your family.
            Call ahead or request an appointment online — whichever feels easier.
          </p>

          <div className="mt-9 space-y-5">
            <a
              href={site.mapLink}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4"
            >
              <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                <MapPin className="size-4" />
              </span>
              <span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65">
                  Address
                </span>
                <span className="mt-1 block font-display text-[1.35rem] leading-snug text-ink transition-colors group-hover:text-copper">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </span>
            </a>

            <a href={site.phone.href} className="group flex items-start gap-4">
              <span className="mt-1 grid size-10 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                <Phone className="size-4" />
              </span>
              <span>
                <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65">
                  Phone
                </span>
                <span className="mt-1 block font-display text-[1.35rem] leading-snug text-ink transition-colors group-hover:text-copper">
                  {site.phone.display}
                </span>
              </span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">
                Request an appointment
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href={site.mapLink} target="_blank" rel="noreferrer">
                Get directions
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>

        <Reveal delay={0.08}>
          <div className="relative">
            <div className="relative h-[380px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-sand sm:h-[440px]">
              <iframe
                title="Map to Bismarck Advanced Dental & Implants"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.35] sepia-[0.06]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-pine-deep/35 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cream/20 bg-pine-deep/55 px-5 py-4 text-cream backdrop-blur-md">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                    Office hours
                  </p>
                  <p className="mt-1 text-[13px] text-cream/85">
                    Mon–Wed 8–5 · Thu 8–2
                  </p>
                </div>
                <span className="rounded-full border border-cream/20 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-cream/65">
                  Fri–Sun closed
                </span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/65">
              <span>1004 S 7th St · Bismarck, ND</span>
              <span>Bismarck Advanced Dental &amp; Implants</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
