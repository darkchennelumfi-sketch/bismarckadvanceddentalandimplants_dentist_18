import Link from "next/link";
import { ArrowRight, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function CTASection({
  eyebrow = "Next step",
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-pine-deep py-20 text-cream sm:py-24",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
      <div className="pointer-events-none absolute -right-20 top-0 size-[440px] rounded-full bg-copper/14 blur-[120px]" />
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[420px] rounded-full bg-sage/8 blur-[120px]" />
      <div
        className="pointer-events-none absolute -left-28 top-1/2 hidden h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-cream/8 lg:block"
        aria-hidden="true"
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="eyebrow eyebrow-light mb-6">{eyebrow}</p>
          <h2 className="display max-w-2xl text-[clamp(2.5rem,5vw,4.4rem)] text-cream">
            {title ?? (
              <>
                Let’s start with a{" "}
                <em className="font-light italic text-copper-soft">
                  conversation.
                </em>
              </>
            )}
          </h2>
          <p className="mt-6 max-w-xl text-[15px] leading-7 text-cream/60">
            {description ??
              "Tell us what’s on your mind. We’ll answer your questions, explain your options, and help you decide what comes next — on your terms."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/contact">
                Request a consultation
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <a href={site.phone.href}>
                <Phone className="size-4" />
                {site.phone.display}
              </a>
            </Button>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-cream/12 bg-cream/[0.045] p-7 backdrop-blur-md sm:p-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cream/60">
            Visit the office
          </p>
          <a
            href={site.mapLink}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-start gap-3 text-[15px] leading-6 text-cream/80 transition-colors hover:text-cream"
          >
            <MapPin className="mt-0.5 size-4 shrink-0 text-copper-soft" />
            <span>
              {site.address.street}
              <br />
              {site.address.city}, {site.address.state} {site.address.zip}
            </span>
          </a>
          <div className="mt-6 grid gap-2 border-t border-cream/10 pt-5 text-[13px]">
            {site.hours.slice(0, 4).map((row) => (
              <div key={row.day} className="flex justify-between gap-4">
                <span className="text-cream/60">{row.day}</span>
                <span className="text-cream/75">{row.time}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[11px] leading-5 text-cream/60">
            Friday, Saturday, and Sunday: Closed
          </p>
        </div>
      </div>
    </section>
  );
}
