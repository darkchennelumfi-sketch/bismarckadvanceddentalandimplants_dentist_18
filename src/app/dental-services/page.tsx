import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartPulse, Moon, Users } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { dentalFaqs } from "@/data/content";
import { dentalServices, getServiceHref } from "@/data/services";

export const metadata: Metadata = {
  title: "Dental Services in Bismarck, ND",
  description:
    "Family, preventive, cosmetic, restorative, and sedation dentistry in Bismarck, ND. Same-day emergency appointments are available at Bismarck Advanced Dental & Implants.",
  alternates: { canonical: "/dental-services" },
  openGraph: {
    title: "Dental Services in Bismarck, ND",
    description:
      "Complete dental care for the whole family at Bismarck Advanced Dental & Implants.",
    url: "/dental-services",
  },
};

const highlights = [
  {
    icon: Users,
    title: "All ages, one office",
    text: "Family dental care designed to treat patients of all ages, from preventive visits to restorative work.",
    href: "/dental-services/family-dentistry",
    link: "Family dentistry",
  },
  {
    icon: Moon,
    title: "A calmer visit",
    text: "Nitrous oxide and oral conscious sedation for patients who feel anxious about dental treatment.",
    href: "/dental-services/sedation-dentistry",
    link: "Sedation dentistry",
  },
  {
    icon: HeartPulse,
    title: "When you need us now",
    text: "Same day emergency appointments for severe tooth and jaw pain, injuries, abscesses, and more.",
    href: "/dental-services/emergency-dentist",
    link: "Emergency care",
  },
];

export default function DentalServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental services"
        title={
          <>
            Complete care for{" "}
            <em className="font-light italic text-copper-soft">every stage</em> of
            life.
          </>
        }
        description="From routine cleanings and preventive care to cosmetic and restorative treatment, we care for the whole family — with sedation options for anyone who needs a calmer visit."
        crumbs={[{ label: "Dental Services" }]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Services
              </p>
              <p className="mt-1 font-display text-lg text-cream">
                {dentalServices.length} treatments
              </p>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Emergencies
              </p>
              <p className="mt-1 font-display text-lg text-cream">Same day</p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
            <div>
              <p className="eyebrow">The everyday</p>
              <h2 className="display mt-5 text-[clamp(2.2rem,4vw,3.5rem)]">
                Healthy teeth start with{" "}
                <em className="font-light italic text-copper">regular care.</em>
              </h2>
            </div>
            <div>
              <p className="text-[15px] leading-7 text-ink/65">
                We provide comprehensive dental care for our patients, with
                services designed to treat patients of all ages. That includes
                the diagnosis, treatment, and maintenance of conditions affecting
                the teeth, gums, and jaw.
              </p>
              <p className="mt-4 text-[14px] leading-7 text-ink/65">
                Regular visits can aid in reducing invasive and expensive dental
                treatments later in life. Whether you’re due for a cleaning or
                something doesn’t feel right, we’re here to help.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Link
                  href={item.href}
                  className="group flex h-full flex-col justify-between rounded-[1.4rem] border border-ink/10 bg-white/35 p-6 transition-all hover:-translate-y-0.5 hover:border-copper/30 hover:bg-white/70"
                >
                  <span className="grid size-11 place-items-center rounded-full border border-ink/10 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                    <item.icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <div className="mt-8">
                    <h3 className="font-display text-[1.4rem] text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-6 text-ink/65">
                      {item.text}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-copper">
                      {item.link}
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Dental treatments"
            title={
              <>
                Care for the{" "}
                <em className="font-light italic text-copper">whole smile.</em>
              </>
            }
            description="Everyday dentistry, cosmetic improvements, restorative work, and urgent care — all under one roof."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dentalServices.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 0.05}>
                <ServiceCard
                  service={service}
                  href={getServiceHref(service)}
                  index={index}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <div>
            <p className="eyebrow">Good questions</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,4vw,3.5rem)]">
              The things patients{" "}
              <em className="font-light italic text-copper">want to know.</em>
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-7 text-ink/65">
              If you don’t see your question here, call the office. We’re happy
              to talk it through before you book.
            </p>
            <Button asChild variant="dark" className="mt-6">
              <Link href="/contact">
                Ask us anything
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div>
            <FaqAccordion items={dentalFaqs} />
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Appointments"
        title="Let’s find a time that works."
        description="Request an appointment online or call the office. We’ll help you find the right next step — whether that’s a cleaning, a consultation, or urgent care."
      />
    </>
  );
}
