import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CreditCard,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import {
  dentalPlans,
  financingPartners,
  planBenefits,
  planIncludedServices,
  planLimitations,
} from "@/data/financial";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Financial Options & Dental Savings Plan",
  description:
    "Financing, insurance, and in-house dental plans at Bismarck Advanced Dental & Implants. Explore payment options and our Dental Savings Plan.",
  alternates: { canonical: "/financial" },
  openGraph: {
    title: "Financial Options | Bismarck Advanced Dental & Implants",
    description:
      "Convenient financing, insurance support, and an in-house Dental Savings Plan so care stays within reach.",
    url: "/financial",
  },
};

export default function FinancialPage() {
  return (
    <>
      <PageHero
        eyebrow="Financial"
        title={
          <>
            Quality care,{" "}
            <em className="font-light italic text-copper-soft">within reach.</em>
          </>
        }
        description="We believe no patient should have to forgo dental treatment because the cost is a concern. Financing, insurance support, and our in-house Dental Savings Plan help make care more accessible."
        crumbs={[{ label: "Financial" }]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Financing
              </p>
              <p className="mt-1 font-display text-lg text-cream">Available</p>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                In-house plans
              </p>
              <p className="mt-1 font-display text-lg text-cream">
                From $485 / year
              </p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-32 top-0 size-[420px] rounded-full bg-copper/7 blur-[110px]" />
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
            <div>
              <p className="eyebrow">Financing</p>
              <h2 className="display mt-5 text-[clamp(2.3rem,4.2vw,3.7rem)]">
                No one should have to choose between{" "}
                <em className="font-light italic text-copper">cost and care.</em>
              </h2>
            </div>
            <div>
              <p className="text-[15px] leading-7 text-ink/65">
                At Bismarck Advanced Dental and Implants, we understand that the
                cost of even the most basic dental care may be prohibitive for
                some of our patients. However, we believe that no patient should
                have to forgo dental treatment because the cost is a concern.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-ink/65">
                We offer convenient financing and payment options so that even
                the most advanced dentistry treatments are within the reach of
                each of our patients. We also make it a point to fully inform
                patients of the cost of treatment before we begin a procedure, so
                patients will never suffer “sticker shock” when they receive their
                bill.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {financingPartners.map((partner, index) => (
              <Reveal key={partner.name} delay={index * 0.05}>
                <a
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col rounded-[1.4rem] border border-ink/10 bg-white/40 p-5 transition-all hover:-translate-y-0.5 hover:border-copper/30 hover:bg-white/70"
                >
                  <div className="grid h-24 place-items-center rounded-xl bg-white/70 p-4">
                    <Image
                      src={partner.image}
                      alt={`${partner.name} logo`}
                      width={partner.width}
                      height={partner.height}
                      className="max-h-14 w-auto max-w-full object-contain"
                    />
                  </div>
                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-[1.25rem] text-ink">
                        {partner.name}
                      </h3>
                      <ArrowUpRight className="mt-1 size-4 shrink-0 text-copper transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-2 text-[12px] leading-6 text-ink/65">
                      {partner.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[1.4rem] border border-ink/10 bg-bone/60 px-6 py-5 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-[13px] leading-6 text-ink/65">
              Not sure which option fits? Ask a member of our team — we’ll review
              the payment options with you before treatment begins.
            </p>
            <Button asChild variant="dark" size="sm">
              <Link href="/contact">
                Ask a question
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-10 size-[420px] rounded-full bg-copper/8 blur-[110px]" />
        <div className="container-x relative">
          <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="arch relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src="/images/in-house-plans.jpg"
                    alt="In-house dental plan information at Bismarck Advanced Dental & Implants"
                    fill
                    sizes="(min-width: 1024px) 42vw, 92vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-cream/20 bg-pine-deep/45 p-5 backdrop-blur-md">
                    <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/65">
                      Dental Savings Plan
                    </p>
                    <p className="mt-2 font-display text-[1.5rem] font-light leading-snug text-cream">
                      An annual reduced-fee plan for individuals and families.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <p className="eyebrow">In-house dental plans</p>
              <h2 className="display mt-5 text-[clamp(2.2rem,4vw,3.5rem)]">
                A simpler path to{" "}
                <em className="font-light italic text-copper">predictable care.</em>
              </h2>
              <p className="mt-6 text-[15px] leading-7 text-ink/65">
                We offer in-house dental plans for our patients. Our Dental
                Savings Plan is an annual reduced-fee savings plan for individuals
                and families that allows all members access to quality dental
                services at an affordable price.
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {planBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-pine/10 text-pine">
                      <Check className="size-3" strokeWidth={2.5} />
                    </span>
                    <span className="text-[12px] leading-6 text-ink/65">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <SectionHeading
              eyebrow="Choose a plan"
              title={
                <>
                  Four plans. One{" "}
                  <em className="font-light italic text-copper">clear price.</em>
                </>
              }
              description="Every plan includes the same core services and the same straightforward savings — choose the one that matches your care."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {dentalPlans.map((plan, index) => (
                <Reveal key={plan.name} delay={index * 0.05}>
                  <div
                    className={
                      plan.featured
                        ? "relative flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-pine p-6 text-cream"
                        : "relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-ink/10 bg-cream/70 p-6 text-ink"
                    }
                  >
                    {plan.featured ? (
                      <>
                        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" />
                        <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-copper/16 blur-[70px]" />
                      </>
                    ) : null}
                    <div className="relative">
                      <p
                        className={
                          plan.featured
                            ? "text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60"
                            : "text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65"
                        }
                      >
                        Dental Savings Plan
                      </p>
                      <h3 className="mt-3 font-display text-[1.5rem] leading-snug">
                        {plan.name}
                      </h3>
                      <p className="mt-5 flex items-baseline gap-1.5">
                        <span className="font-display text-[2.8rem] font-light leading-none">
                          {plan.price}
                        </span>
                        <span
                          className={
                            plan.featured
                              ? "text-[11px] text-cream/60"
                              : "text-[11px] text-ink/65"
                          }
                        >
                          / year
                        </span>
                      </p>
                      <p
                        className={
                          plan.featured
                            ? "mt-1 text-[10px] text-cream/60"
                            : "mt-1 text-[10px] text-ink/65"
                        }
                      >
                        {plan.joiningFee}
                      </p>
                      <p
                        className={
                          plan.featured
                            ? "mt-5 border-t border-cream/12 pt-5 text-[12px] leading-6 text-cream/65"
                            : "mt-5 border-t border-ink/10 pt-5 text-[12px] leading-6 text-ink/65"
                        }
                      >
                        {plan.audience}
                      </p>
                      <p
                        className={
                          plan.featured
                            ? "mt-3 text-[12px] leading-6 text-cream/80"
                            : "mt-3 text-[12px] leading-6 text-ink/75"
                        }
                      >
                        {plan.cleanings}
                      </p>
                    </div>
                    <div className="relative mt-auto pt-6">
                      <Button
                        asChild
                        variant={plan.featured ? "cream" : "outline"}
                        size="sm"
                        className="w-full"
                      >
                        <Link href="/contact">Sign up today</Link>
                      </Button>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-5 text-ink/65">
              All plans are annual and include a $99 one-time fee to join. Ask
              our team for the full plan details before enrolling.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow">Included in every plan</p>
            <h2 className="display mt-5 text-[clamp(2.1rem,3.8vw,3.25rem)]">
              The care you need,{" "}
              <em className="font-light italic text-copper">already covered.</em>
            </h2>
            <p className="mt-5 max-w-md text-[14px] leading-7 text-ink/65">
              Every Dental Savings Plan includes the services below. Members also
              receive a 10–15% discount on other treatment, with implants
              excluded.
            </p>
            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-copper/25 bg-copper/8 px-5 py-4">
              <Sparkles className="size-5 shrink-0 text-copper" />
              <p className="text-[12px] leading-6 text-ink/65">
                <span className="font-semibold text-ink">10–15% off</span> other
                treatment for plan members. Implants excluded.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {planIncludedServices.map((service, index) => (
              <Reveal key={service} delay={(index % 2) * 0.04}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-ink/10 bg-white/35 px-4 py-4">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full border border-ink/10 text-copper">
                    <Check className="size-3.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-[12px] leading-6 text-ink/70">
                    {service}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="container-x mt-12">
          <details className="group rounded-[1.5rem] border border-ink/10 bg-bone/50">
            <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65">
                  The fine print
                </p>
                <p className="mt-1 font-display text-[1.4rem] text-ink">
                  Limitations and exclusions
                </p>
              </div>
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-transform duration-300 group-open:rotate-180">
                <ChevronDown className="size-4" />
              </span>
            </summary>
            <div className="border-t border-ink/10 px-6 py-6">
              <ul className="grid gap-3 lg:grid-cols-2">
                {planLimitations.map((limitation) => (
                  <li
                    key={limitation}
                    className="flex items-start gap-2.5 text-[12px] leading-6 text-ink/65"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-copper/60" />
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine py-16 text-cream sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
        <div className="pointer-events-none absolute -right-20 top-0 size-[420px] rounded-full bg-copper/12 blur-[120px]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div>
            <p className="eyebrow eyebrow-light">Insurance</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,4vw,3.5rem)] text-cream">
              We work with most{" "}
              <em className="font-light italic text-copper-soft">
                insurance plans.
              </em>
            </h2>
            <p className="mt-6 max-w-md text-[14px] leading-7 text-cream/60">
              Dr. Christopher Klym is proud to work with most insurance plans and
              help you make the most of your benefits. Our team takes care of
              submitting all necessary insurance information for your treatments,
              making the process as simple and stress-free as possible.
            </p>
            <Button asChild variant="cream" className="mt-7">
              <Link href="/contact">
                Ask about coverage
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-[1.75rem] border border-cream/12 bg-cream/[0.045] p-7 backdrop-blur-md sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-cream/15 text-copper-soft">
                <ShieldCheck className="size-5" />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Insurance support
              </p>
            </div>
            <ul className="mt-6 space-y-4 border-t border-cream/10 pt-6">
              {[
                "We work with most insurance plans.",
                "Our team submits all necessary insurance information for your treatments.",
                "Questions about coverage? We’re happy to walk you through your benefits.",
                "Looking for another option? Ask about our in-house Dental Savings Plan.",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-copper/20 text-copper-soft">
                    <Check className="size-3" strokeWidth={2.5} />
                  </span>
                  <span className="text-[13px] leading-6 text-cream/70">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-cream py-14 sm:py-16">
        <div className="container-x flex flex-col items-start justify-between gap-6 rounded-[1.75rem] border border-ink/10 bg-bone/60 px-7 py-8 sm:flex-row sm:items-center sm:px-9">
          <div className="flex items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-full border border-ink/12 text-copper">
              <CreditCard className="size-5" />
            </span>
            <div>
              <p className="font-display text-[1.5rem] text-ink">
                Already a patient? Pay your bill online.
              </p>
              <p className="mt-1 text-[12px] leading-6 text-ink/65">
                You’ll be directed to our secure payment portal.
              </p>
            </div>
          </div>
          <Button asChild variant="dark">
            <a href={site.payBill} target="_blank" rel="noreferrer">
              Pay your bill
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>

      <CTASection
        eyebrow="Next step"
        title="Let’s talk about a plan that fits."
        description="Call the office or request an appointment. We’ll review costs, insurance, and payment options before treatment begins — no surprises."
      />
    </>
  );
}
