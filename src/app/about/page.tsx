import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, MapPin, Phone } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { HomeDoctors } from "@/components/home/doctors";
import { HomeLab } from "@/components/home/lab";
import { HomePillars } from "@/components/home/pillars";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { StatsRow } from "@/components/stats-row";
import { Button } from "@/components/ui/button";
import { associations, whyChoose } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About Our Practice",
  description:
    "Meet Bismarck Advanced Dental & Implants — a Bismarck, ND dental office built around patient-first care, 3D dental implants, and an on-site dental lab.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bismarck Advanced Dental & Implants",
    description:
      "A different kind of dental office in Bismarck, North Dakota.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our practice"
        title={
          <>
            A <em className="font-light italic text-copper-soft">different</em>{" "}
            kind of dental office.
          </>
        }
        description={whyChoose.short}
        crumbs={[{ label: "Our Practice" }]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Located in
              </p>
              <p className="mt-1 font-display text-lg text-cream">Bismarck, ND</p>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                On site
              </p>
              <p className="mt-1 font-display text-lg text-cream">Dental lab</p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[480px]">
              <div
                className="pointer-events-none absolute -inset-4 rounded-t-full border border-copper/20"
                aria-hidden="true"
              />
              <div className="arch relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src="/images/hero-bismarck.jpg"
                  alt="Bismarck, North Dakota"
                  fill
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/80 via-pine-deep/15 to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-cream/20 bg-pine-deep/40 p-5 backdrop-blur-md">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                    Our promise
                  </p>
                  <p className="mt-2 font-display text-[1.4rem] font-light italic leading-snug text-cream">
                    “{whyChoose.quote}”
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 top-8 rounded-2xl border border-ink/10 bg-cream px-5 py-4 text-center shadow-soft sm:-right-6">
                <p className="display text-4xl text-pine">98%</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-ink/65">
                  Implant success
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="display mt-5 text-[clamp(2.3rem,4.4vw,3.8rem)]">
              Care that feels{" "}
              <em className="font-light italic text-copper">human.</em>
            </h2>

            <div className="mt-7 space-y-5">
              {whyChoose.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-[14px] leading-7 text-ink/65 sm:text-[15px]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-ink/10 pt-6 sm:grid-cols-2">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3"
              >
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                  <MapPin className="size-4" />
                </span>
                <span className="text-[12px] leading-5 text-ink/65">
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </a>
              <a href={site.phone.href} className="group flex items-start gap-3">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                  <Phone className="size-4" />
                </span>
                <span className="text-[12px] leading-5 text-ink/65">
                  {site.phone.display}
                  <br />
                  Mon–Wed 8–5 · Thu 8–2
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
                <Link href="/testimonials">
                  Patient reviews
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-bone/70 py-14">
        <div className="container-x">
          <StatsRow />
        </div>
      </section>

      <HomePillars showAboutLink={false} />

      <HomeDoctors showAction={false} />

      <HomeLab />

      <section className="border-t border-ink/10 bg-cream py-16 sm:py-20">
        <div className="container-x">
          <div className="text-center">
            <p className="eyebrow justify-center before:hidden">
              Professional affiliations
            </p>
            <h2 className="display mx-auto mt-4 max-w-2xl text-[clamp(2rem,3.6vw,3rem)]">
              Part of a broader standard of care.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {associations.map((association, index) => (
              <Reveal key={association.name} delay={index * 0.06}>
                <div className="flex h-36 items-center justify-center rounded-[1.4rem] border border-ink/10 bg-white/40 p-6">
                  <Image
                    src={association.image}
                    alt={association.name}
                    width={association.width}
                    height={association.height}
                    className="max-h-16 w-auto max-w-full object-contain"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Come in"
        title="We’d love to meet you."
        description="Whether you’re new to Bismarck or looking for a different kind of dental office, we’re ready to welcome you. Call or request an appointment online."
      />
    </>
  );
}
