import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { dentalServices, implantServices, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

function TreatmentPanel({
  number,
  label,
  title,
  description,
  services,
  href,
  ctaLabel,
  dark = false,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
  services: Service[];
  href: string;
  ctaLabel: string;
  dark?: boolean;
}) {
  const items = services.filter((service) => service.featured).slice(0, 6);

  return (
    <div
      className={cn(
        "relative flex h-full flex-col overflow-hidden rounded-[1.75rem] p-7 sm:p-9",
        dark
          ? "bg-pine text-cream"
          : "border border-ink/10 bg-bone/70 text-ink",
      )}
    >
      {dark ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" />
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-copper/14 blur-[80px]" />
        </>
      ) : (
        <div className="pointer-events-none absolute -right-24 -top-24 size-64 rounded-full bg-copper/8 blur-[80px]" />
      )}

      <div className="relative flex items-start justify-between gap-6">
        <div>
          <p
            className={cn(
              "text-[9px] font-bold uppercase tracking-[0.2em]",
              dark ? "text-cream/60" : "text-ink/65",
            )}
          >
            {label}
          </p>
          <h3 className="mt-3 font-display text-[2rem] leading-tight sm:text-[2.4rem]">
            {title}
          </h3>
          <p
            className={cn(
              "mt-3 max-w-sm text-[13px] leading-6",
              dark ? "text-cream/65" : "text-ink/65",
            )}
          >
            {description}
          </p>
        </div>
        <span
          className={cn(
            "font-display text-3xl italic",
            dark ? "text-cream/15" : "text-ink/15",
          )}
        >
          {number}
        </span>
      </div>

      <ul
        className={cn(
          "relative mt-8 border-t",
          dark ? "border-cream/12" : "border-ink/12",
        )}
      >
        {items.map((service) => (
          <li key={service.slug}>
            <Link
              href={`${href}/${service.slug}`}
              className={cn(
                "group flex items-center gap-3 border-b py-3.5 transition-colors",
                dark
                  ? "border-cream/12 hover:text-copper-soft"
                  : "border-ink/12 hover:text-copper",
              )}
            >
              <ServiceIcon
                name={service.icon}
                className={cn(
                  "size-4 shrink-0",
                  dark ? "text-copper-soft/70" : "text-copper/70",
                )}
              />
              <span className="flex-1 text-[13px] font-medium">
                {service.navTitle}
              </span>
              <ArrowUpRight className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
        <Button
          asChild
          variant={dark ? "cream" : "dark"}
          size="sm"
          className="w-fit"
        >
          <Link href={href}>
            {ctaLabel}
            <ArrowRight className="size-3.5" />
          </Link>
        </Button>
        <span
          className={cn(
            "text-[9px] font-bold uppercase tracking-[0.16em]",
            dark ? "text-cream/60" : "text-ink/65",
          )}
        >
          {services.length} treatments
        </span>
      </div>
    </div>
  );
}

export function HomeTreatments() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Our treatments"
          title={
            <>
              Two paths to a{" "}
              <em className="font-light italic text-copper">healthier smile.</em>
            </>
          }
          description="Whether you’re rebuilding your smile or keeping it healthy, our care starts with the outcome you want — then works backward from there."
          action={
            <Button asChild variant="outline">
              <Link href="/dental-services">
                View all dental services
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          }
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal className="h-full">
            <TreatmentPanel
              number="01"
              label="Restore"
              title="Dental Implants"
              description="Implant placement, restoration, and the supporting treatments that make both possible."
              services={implantServices}
              href="/implants"
              ctaLabel="Explore dental implants"
              dark
            />
          </Reveal>
          <Reveal className="h-full" delay={0.08}>
            <TreatmentPanel
              number="02"
              label="Maintain"
              title="Dental Services"
              description="Everyday, preventive, cosmetic, restorative, and emergency care for the whole family."
              services={dentalServices}
              href="/dental-services"
              ctaLabel="Explore dental services"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
