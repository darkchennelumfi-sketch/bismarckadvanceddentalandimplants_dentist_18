"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

import { Stars } from "@/components/review-card";
import type { Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

export function TestimonialCarousel({
  items,
  className,
}: {
  items: Review[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (paused || reduceMotion || items.length < 2) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion, items.length]);

  const review = items[index];
  if (!review) return null;

  const go = (direction: number) => {
    setIndex((current) => (current + direction + items.length) % items.length);
  };

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Patient reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
      }}
    >
      <Quote className="size-10 text-copper-soft/50" strokeWidth={1.2} />

      <div className="mt-4 min-h-[250px] sm:min-h-[220px] lg:min-h-[240px]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.blockquote
            key={index}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            aria-live="polite"
          >
            <p className="text-pretty font-display text-[clamp(1.35rem,2.4vw,1.95rem)] font-light leading-[1.45] text-cream">
              “{review.text}”
            </p>
            <footer className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
              <Stars count={Math.round(review.rating)} />
              <span className="text-[13px] font-semibold text-cream/85">
                {review.name}
              </span>
              <span className="size-1 rounded-full bg-cream/25" />
              <span className="text-[10px] uppercase tracking-[0.12em] text-cream/60">
                {review.date} · {review.source}
              </span>
            </footer>
          </motion.blockquote>
        </AnimatePresence>
      </div>

      <div className="mt-7 flex items-center justify-between border-t border-cream/10 pt-5">
        <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-cream/60">
          <span className="text-cream/80">{String(index + 1).padStart(2, "0")}</span>
          <span className="h-px w-8 bg-cream/20" />
          <span>{String(items.length).padStart(2, "0")}</span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream/70 transition-all hover:border-cream hover:bg-cream hover:text-pine"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next review"
            className="grid size-10 place-items-center rounded-full border border-cream/20 text-cream/70 transition-all hover:border-cream hover:bg-cream hover:text-pine"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
