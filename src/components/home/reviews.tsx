import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Stars } from "@/components/review-card";
import { Reveal } from "@/components/reveal";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { reviews } from "@/data/reviews";
import { site } from "@/data/site";

const average = (
  reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
).toFixed(1);

export function HomeReviews() {
  return (
    <section className="relative overflow-hidden bg-pine-deep py-20 text-cream sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-0 size-[480px] rounded-full bg-copper/12 blur-[120px]" />

      <div className="container-x relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="eyebrow eyebrow-light">Patient stories</p>
          <h2 className="display mt-5 text-[clamp(2.5rem,4.6vw,4.1rem)] text-cream">
            The measure of our work is how you{" "}
            <em className="font-light italic text-copper-soft">feel.</em>
          </h2>
          <p className="mt-6 max-w-md text-[14px] leading-7 text-cream/65">
            Friendly faces, clear explanations, and care that respects your time.
            Here’s what patients are saying about their visits.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <span className="font-display text-5xl font-light text-cream">
              {average}
            </span>
            <span>
              <Stars />
              <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.14em] text-cream/60">
                {reviews.length} recent patient reviews · Google
              </span>
            </span>
          </div>

          <Link
            href="/testimonials"
            className="link-line mt-9 text-[11px] font-bold uppercase tracking-[0.16em] text-copper-soft transition-colors hover:text-cream"
          >
            Read all reviews
            <ArrowRight className="size-3.5" />
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            {site.reviewLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="grid h-14 w-24 place-items-center rounded-xl bg-cream/95 px-3 transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src={link.image}
                  alt={link.label}
                  width={link.width}
                  height={link.height}
                  className="max-h-8 w-auto"
                />
              </a>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <TestimonialCarousel items={reviews.slice(0, 6)} />
        </Reveal>
      </div>
    </section>
  );
}
