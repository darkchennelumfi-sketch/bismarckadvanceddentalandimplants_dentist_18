import { Star } from "lucide-react";

import type { Review } from "@/data/reviews";
import { cn } from "@/lib/utils";

export function Stars({ count = 5, className }: { count?: number; className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <Star
          key={index}
          className="size-3.5 fill-copper text-copper"
          strokeWidth={1}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function ReviewCard({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "break-inside-avoid rounded-[1.4rem] border border-ink/10 bg-white/40 p-6 transition-colors hover:border-copper/25 hover:bg-white/70",
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <Stars count={Math.round(review.rating)} />
        <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/65">
          {review.source}
        </span>
      </div>
      <blockquote className="mt-4 text-[14px] leading-7 text-ink/70">
        “{review.text}”
      </blockquote>
      <footer className="mt-5 flex items-center justify-between gap-4 border-t border-ink/8 pt-4">
        <span className="text-[13px] font-semibold text-ink">{review.name}</span>
        <span className="text-[10px] uppercase tracking-[0.1em] text-ink/65">
          {review.date}
        </span>
      </footer>
    </article>
  );
}
