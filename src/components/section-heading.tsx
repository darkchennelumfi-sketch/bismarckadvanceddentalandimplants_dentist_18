import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  align = "left",
  className,
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-8",
        action && "md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div
        className={cn(
          "max-w-3xl",
          align === "center" && "mx-auto flex flex-col items-center text-center",
        )}
      >
        {eyebrow ? (
          <p className={cn("eyebrow mb-5", light && "eyebrow-light")}>
            {eyebrow}
          </p>
        ) : null}
        <h2
          className={cn(
            "display text-[clamp(2.35rem,4.6vw,4.15rem)]",
            light ? "text-cream" : "text-ink",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-6 max-w-2xl text-[15px] leading-7 sm:text-base",
              light ? "text-cream/65" : "text-ink/65",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}
