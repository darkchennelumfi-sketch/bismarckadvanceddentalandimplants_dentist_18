import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FlaskConical,
  Phone,
  Sparkles,
} from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { ServiceIcon } from "@/components/service-icon";
import { Button } from "@/components/ui/button";
import { lab } from "@/data/content";
import {
  getRelatedServices,
  getServiceHref,
  getServicesByCategory,
  type Service,
} from "@/data/services";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function ServiceDetail({ service }: { service: Service }) {
  const isImplant = service.category === "implants";
  const categoryLabel = isImplant ? "Dental Implants" : "Dental Services";
  const categoryHref = isImplant ? "/implants" : "/dental-services";
  const siblings = getServicesByCategory(service.category);
  const related = getRelatedServices(service, 3);
  const highlight = isImplant
    ? {
        stat: "98%",
        label: "Implant success rate",
        note: "Placed and restored by one team.",
      }
    : {
        stat: "Same day",
        label: "Emergency appointments",
        note: "For severe tooth and jaw pain, injuries, and more.",
      };

  return (
    <>
      <PageHero
        eyebrow={categoryLabel}
        title={service.title}
        description={service.tagline}
        crumbs={[
          { label: categoryLabel, href: categoryHref },
          { label: service.navTitle },
        ]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Category
              </p>
              <p className="mt-1 font-display text-lg text-cream">
                {categoryLabel}
              </p>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Location
              </p>
              <p className="mt-1 font-display text-lg text-cream">Bismarck, ND</p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="container-x relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div>
            <Reveal>
              <div className="prose-clinic max-w-3xl">
                {service.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-10 flex flex-col gap-5 rounded-[1.5rem] border border-ink/10 bg-bone/60 p-6 sm:flex-row sm:items-center sm:gap-8 sm:p-7">
                <div className="shrink-0 border-b border-ink/10 pb-4 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8">
                  <p className="display text-4xl text-pine sm:text-5xl">
                    {highlight.stat}
                  </p>
                  <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.16em] text-copper">
                    {highlight.label}
                  </p>
                </div>
                <div>
                  <p className="font-display text-xl leading-snug text-ink">
                    {highlight.note}
                  </p>
                  <p className="mt-2 text-[12px] leading-5 text-ink/65">
                    {isImplant
                      ? "Our in-house lab creates custom restorations from dentures to crowns and veneers to implant restorations."
                      : "Call the office for urgent concerns, and we’ll get you in to see one of our dentists as soon as possible."}
                  </p>
                </div>
              </div>
            </Reveal>

            {service.slug === "in-house-lab" ? (
              <Reveal delay={0.05}>
                <div className="mt-12">
                  <h2 className="font-display text-[2rem] text-ink">
                    What we make in our lab
                  </h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {lab.capabilities.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-ink/10 bg-white/40 p-5"
                      >
                        <p className="font-display text-2xl text-ink">
                          {item.title}
                        </p>
                        <p className="mt-2 text-[12px] leading-5 text-ink/65">
                          {item.note}
                        </p>
                      </div>
                    ))}
                  </div>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {lab.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-3 text-[13px] text-ink/65"
                      >
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-copper/12 text-copper">
                          <Check className="size-3" />
                        </span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null}

            <Reveal delay={0.05}>
              <div className="mt-14">
                <div className="flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
                  <h2 className="font-display text-[1.7rem] text-ink">
                    Related treatments
                  </h2>
                  <Link
                    href={categoryHref}
                    className="text-[10px] font-bold uppercase tracking-[0.16em] text-copper transition-colors hover:text-copper-dark"
                  >
                    View all
                  </Link>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      href={getServiceHref(item)}
                      className="group rounded-2xl border border-ink/10 bg-white/35 p-5 transition-all hover:-translate-y-0.5 hover:border-copper/30 hover:bg-white/70"
                    >
                      <ServiceIcon
                        name={item.icon}
                        className="size-5 text-copper"
                      />
                      <p className="mt-5 font-display text-[1.2rem] leading-tight text-ink transition-colors group-hover:text-copper">
                        {item.navTitle}
                      </p>
                      <p className="mt-2 line-clamp-2 text-[11px] leading-5 text-ink/65">
                        {item.tagline}
                      </p>
                      <ArrowUpRight className="mt-4 size-4 text-ink/65 transition-colors group-hover:text-copper" />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-[1.4rem] border border-ink/10 bg-bone/50 p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/65">
                All {isImplant ? "implant treatments" : "dental services"}
              </p>
              <nav aria-label={`All ${categoryLabel}`} className="mt-4">
                <ul className="space-y-0.5">
                  {siblings.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={getServiceHref(item)}
                        className={cn(
                          "flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-[12px] transition-colors",
                          item.slug === service.slug
                            ? "bg-pine text-cream"
                            : "text-ink/65 hover:bg-cream hover:text-ink",
                        )}
                      >
                        <span>{item.navTitle}</span>
                        {item.slug === service.slug ? (
                          <span className="size-1.5 rounded-full bg-copper-soft" />
                        ) : (
                          <ArrowRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-4 rounded-[1.4rem] bg-pine p-6 text-cream">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Talk it through
              </p>
              <p className="mt-3 font-display text-[1.6rem] leading-tight">
                Questions about {service.navTitle.toLowerCase()}?
              </p>
              <p className="mt-3 text-[12px] leading-5 text-cream/65">
                We’ll answer your questions and explain your options — no
                pressure.
              </p>
              <Button asChild size="sm" className="mt-5 w-full">
                <Link href="/contact">
                  Request a consultation
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
              <a
                href={site.phone.href}
                className="mt-3 flex items-center justify-center gap-2 text-[11px] font-semibold text-cream/60 transition-colors hover:text-cream"
              >
                <Phone className="size-3.5 text-copper-soft" />
                {site.phone.display}
              </a>
            </div>

            <div className="mt-4 rounded-[1.4rem] border border-ink/10 bg-cream p-5">
              <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-copper">
                {isImplant ? (
                  <FlaskConical className="size-3.5" />
                ) : (
                  <Sparkles className="size-3.5" />
                )}
                {isImplant ? "In-house lab" : "Comfort first"}
              </span>
              <p className="mt-3 text-[12px] leading-5 text-ink/65">
                {isImplant
                  ? "Your restoration is custom made by our own technicians and ceramists — reducing wait times and cutting out the middle-man."
                  : "Nitrous oxide and oral conscious sedation are available to help make treatment stress-free and pain-free."}
              </p>
              <Link
                href={isImplant ? "/implants/in-house-lab" : "/dental-services/sedation-dentistry"}
                className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-ink/65 transition-colors hover:text-copper"
              >
                Learn more
                <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        eyebrow="Your next step"
        title="Let’s make a plan that fits you."
        description="Request a consultation at our Bismarck office. We’ll answer your questions, walk through your options, and help you feel confident about what comes next."
      />
    </>
  );
}
