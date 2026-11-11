import { CountUp } from "@/components/count-up";
import { stats } from "@/data/content";
import { cn } from "@/lib/utils";

export function StatsRow({
  light = false,
  className,
}: {
  light?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-8 sm:grid-cols-3 sm:gap-6", className)}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "border-t pt-5",
            light ? "border-cream/15" : "border-ink/15",
          )}
        >
          <div
            className={cn(
              "display text-[clamp(3rem,5vw,4.4rem)] leading-none",
              light ? "text-cream" : "text-ink",
            )}
          >
            {stat.countTo !== null ? (
              <CountUp value={stat.countTo} suffix={stat.suffix} />
            ) : (
              stat.value
            )}
          </div>
          <p
            className={cn(
              "mt-4 text-[11px] font-bold uppercase tracking-[0.18em]",
              light ? "text-copper-soft" : "text-copper",
            )}
          >
            {stat.label}
          </p>
          <p
            className={cn(
              "mt-2 max-w-[17rem] text-[12px] leading-5",
              light ? "text-cream/60" : "text-ink/65",
            )}
          >
            {stat.note}
          </p>
        </div>
      ))}
    </div>
  );
}
