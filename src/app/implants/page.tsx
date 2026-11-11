import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FlaskConical } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { StatsRow } from "@/components/stats-row";
import { Button } from "@/components/ui/button";
import { implantFaqs, processNotes } from "@/data/content";
import { getServiceHref, implantServices } from "@/data/services";

export const metadata: Metadata = {
  title: "Implant Dentistry in Bismarck, ND",
  description:
    "Dental implants in Bismarck, ND with a 98% success rate. We place both the implant and the post, and craft restorations in our on-site dental lab.",
  alternates: { canonical: "/implants" },
  openGraph: {
    title: "Implant Dentistry in Bismarck, ND",
    description:
      "Implant placement, restoration, and supporting treatments from Bismarck Advanced Dental & Implants.",
    url: "/implants",
  },
};

export default function ImplantsPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental implants"
        title={
          <>
            Implants planned, placed, and{" "}
            <em className="font-light italic text-copper-soft">made</em> by one
            team.
          </>
        }
        description="We specialize in dental implants in North Dakota. We place both the dental implant and the post — something most dental offices do not provide — and craft your restoration in our own lab."
        crumbs={[{ label: "Dental Implants" }]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Success rate
              </p>
              <p className="mt-1 font-display text-lg text-cream">98%</p>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Restoration
              </p>
              <p className="mt-1 font-display text-lg text-cream">In-house lab</p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <p className="eyebrow">The foundation</p>
              <h2 className="display mt-5 text-[clamp(2.2rem,4vw,3.5rem)]">
                A long-lasting answer to{" "}
                <em className="font-light italic text-copper">missing teeth.</em>
              </h2>
            </div>
            <div>
              <p className="text-[15px] leading-7 text-ink/65">
                Dental implants are considered an effective, long-lasting
                treatment for patients with missing teeth. With a 98% success
                rate, they are one of our most sought-after treatments. Our goal
                is to make the dental implant convenient and successful for our
                patients.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-ink/65">
                From a single missing tooth to a full-arch restoration, every
                plan begins with a conversation about what you want — and what
                will work for your health, your time, and your budget.
              </p>
            </div>
          </div>

          <StatsRow className="mt-12 border-t border-ink/10 pt-10" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Implant treatments"
            title={
              <>
                The full range of{" "}
                <em className="font-light italic text-copper">implant care.</em>
              </>
            }
            description="From the first implant to the final restoration, our treatments cover the details that make a lasting difference."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {implantServices.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 0.05}>
                <ServiceCard
                  service={service}
                  href={getServiceHref(service)}
                  index={index}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why our approach is different"
            title={
              <>
                One team, from{" "}
                <em className="font-light italic text-copper">start to finish.</em>
              </>
            }
            description="Implant care works best when the people planning it are the same people placing and restoring it. That’s how we’re set up."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {processNotes.implants.map((note, index) => (
              <Reveal key={note.title} delay={index * 0.07}>
                <div className="h-full rounded-[1.4rem] border border-ink/10 bg-white/35 p-6">
                  <span className="font-display text-sm italic text-copper">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-8 font-display text-[1.45rem] leading-tight text-ink">
                    {note.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-6 text-ink/65">
                    {note.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-[1.4rem] bg-pine p-7 text-cream sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-copper/20 text-copper-soft">
                <FlaskConical className="size-5" />
              </span>
              <div>
                <p className="font-display text-[1.4rem] leading-tight">
                  Your restoration is made in our own lab.
                </p>
                <p className="mt-1 text-[12px] leading-5 text-cream/65">
                  Custom dentures, implants, crowns, and bridges — with fewer
                  wait times and no middle-man for adjustments.
                </p>
              </div>
            </div>
            <Button asChild variant="cream" size="sm" className="shrink-0">
              <Link href="/implants/in-house-lab">
                Inside our lab
                <ArrowUpRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="eyebrow">Good questions</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,4vw,3.5rem)]">
              What patients ask{" "}
              <em className="font-light italic text-copper">before starting.</em>
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-7 text-ink/65">
              Every mouth is different, so every plan is too. If your question
              isn’t here, call us — we’ll talk it through.
            </p>
            <Button asChild variant="dark" className="mt-6">
              <Link href="/contact">
                Ask us anything
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div>
            <FaqAccordion items={implantFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Implant consultation"
        title="Start with a conversation — not a commitment."
        description="We’ll answer your questions, explain your options, and help you decide what comes next. No pressure, ever."
      />
    </>
  );
}
