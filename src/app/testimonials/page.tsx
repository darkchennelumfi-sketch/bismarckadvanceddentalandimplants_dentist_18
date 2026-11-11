import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Quote } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ReviewCard, Stars } from "@/components/review-card";
import { Button } from "@/components/ui/button";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Patient Reviews & Testimonials",
  description:
    "Read recent Google reviews for Bismarck Advanced Dental & Implants. See what patients say about their visits, treatment, and care in Bismarck, ND.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Patient Reviews | Bismarck Advanced Dental & Implants",
    description:
      "Friendly faces, clear explanations, and care that respects your time — in our patients’ own words.",
    url: "/testimonials",
  },
};

const average = (
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient stories"
        title={
          <>
            The measure of our work is how you{" "}
            <em className="font-light italic text-copper-soft">feel.</em>
          </>
        }
        description="Friendly faces, clear explanations, and care that respects your time. These are recent reviews from patients who trusted us with their smiles."
        crumbs={[{ label: "Testimonials" }]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Average rating
              </p>
              <p className="mt-1 font-display text-lg text-cream">
                {average} out of 5
              </p>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Recent reviews
              </p>
              <p className="mt-1 font-display text-lg text-cream">
                {reviews.length} and counting
              </p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <div className="pointer-events-none absolute -left-32 top-0 size-[420px] rounded-full bg-copper/7 blur-[110px]" />
        <div className="container-x relative">
          <div className="grid gap-8 rounded-[1.75rem] border border-ink/10 bg-bone/55 p-7 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <div className="flex items-center gap-5">
                <span className="font-display text-[4.5rem] font-light leading-none text-pine sm:text-[5.5rem]">
                  {average}
                </span>
                <div>
                  <Stars className="[&_svg]:size-4" />
                  <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.16em] text-ink/65">
                    {reviews.length} recent Google reviews
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-md text-[14px] leading-7 text-ink/65">
                Every review below is shared as written by the patient. We’re
                grateful for each one — and for the trust behind it.
              </p>
            </div>

            <div className="lg:border-l lg:border-ink/10 lg:pl-12">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65">
                Find us on
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {site.reviewLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="grid h-16 w-28 place-items-center rounded-xl border border-ink/8 bg-cream px-3 transition-transform hover:-translate-y-0.5"
                  >
                    <Image
                      src={link.image}
                      alt={link.label}
                      width={link.width}
                      height={link.height}
                      className="max-h-9 w-auto"
                    />
                  </a>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="dark" size="sm">
                  <a
                    href={site.reviewLinks[0].href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read on Google
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="/contact">
                    Share your experience
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-14 hidden items-center gap-4 sm:flex">
            <span className="eyebrow whitespace-nowrap">In their own words</span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>

          <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {reviews.map((review, index) => (
              <Reveal
                key={`${review.name}-${review.date}`}
                delay={(index % 3) * 0.04}
                className="mb-4 break-inside-avoid"
              >
                <ReviewCard review={review} className="h-full" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-full border border-ink/12 text-copper">
              <Quote className="size-5" strokeWidth={1.5} />
            </span>
            <blockquote className="mt-7 font-display text-[clamp(1.9rem,3.8vw,3rem)] font-light italic leading-snug text-ink">
              “We don’t do anything unless you give us the thumbs up.”
            </blockquote>
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.18em] text-ink/65">
              Our promise to every patient
            </p>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Your turn"
        title="We’d love to earn your review."
        description="If you’re ready for a different kind of dental visit, we’re ready to welcome you. Call the office or request an appointment online."
      />
    </>
  );
}
