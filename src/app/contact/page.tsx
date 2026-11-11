import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Appointments",
  description:
    "Contact Bismarck Advanced Dental & Implants at 1004 S 7th St, Bismarck, ND. Call (701) 390-1920, email the office, or request an appointment online.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Bismarck Advanced Dental & Implants",
    description:
      "Find our office, hours, phone, email, and online appointment request form.",
    url: "/contact",
  },
};

const contactCards = [
  {
    icon: FileText,
    title: "New patient forms",
    text: "Get a head start on your first visit by completing our new patient paperwork.",
    href: site.newPatientForms,
    label: "Open forms",
    external: true,
  },
  {
    icon: FileText,
    title: "Referral form",
    text: "Referring a patient to our office? Download and send the referral form.",
    href: site.referralForm,
    label: "Download PDF",
    external: true,
  },
  {
    icon: MapPin,
    title: "Financial options",
    text: "Explore insurance, in-house dental plans, and financing partners.",
    href: "/financial",
    label: "View options",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s start a{" "}
            <em className="font-light italic text-copper-soft">conversation.</em>
          </>
        }
        description="Questions about treatment, insurance, or your first visit? Call the office, send an email, or request an appointment online. We’ll help you find the right next step."
        crumbs={[{ label: "Contact" }]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Call the office
              </p>
              <a
                href={site.phone.href}
                className="mt-1 block font-display text-lg text-cream transition-colors hover:text-copper-soft"
              >
                {site.phone.display}
              </a>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Office hours
              </p>
              <p className="mt-1 font-display text-lg text-cream">
                Mon–Thu · Closed Fri
              </p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -left-32 top-24 size-[460px] rounded-full bg-copper/7 blur-[110px]" />
        <div className="container-x relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">The office</p>
            <h2 className="display mt-5 text-[clamp(2.2rem,4vw,3.4rem)]">
              Come see us in{" "}
              <em className="font-light italic text-copper">Bismarck.</em>
            </h2>

            <div className="mt-8 space-y-6">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-4"
              >
                <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                  <MapPin className="size-4" />
                </span>
                <span>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65">
                    Address
                  </span>
                  <span className="mt-1 block font-display text-[1.3rem] leading-snug text-ink transition-colors group-hover:text-copper">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </span>
              </a>

              <div className="grid gap-5 border-t border-ink/10 pt-6 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={site.phone.href}
                  className="group flex items-start gap-4"
                >
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                    <Phone className="size-4" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65">
                      Phone
                    </span>
                    <span className="mt-1 block text-[14px] font-semibold text-ink transition-colors group-hover:text-copper">
                      {site.phone.display}
                    </span>
                  </span>
                </a>

                <a
                  href={site.fax.href}
                  className="group flex items-start gap-4"
                >
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-ink/12 text-copper">
                    <Printer className="size-4" />
                  </span>
                  <span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65">
                      Fax
                    </span>
                    <span className="mt-1 block text-[14px] font-semibold text-ink">
                      {site.fax.display}
                    </span>
                  </span>
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-4 sm:col-span-2 lg:col-span-1"
                >
                  <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                    <Mail className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.18em] text-ink/65">
                      Email
                    </span>
                    <span className="mt-1 block break-all text-[14px] font-semibold text-ink transition-colors group-hover:text-copper">
                      {site.email}
                    </span>
                  </span>
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-[1.4rem] border border-ink/10 bg-white/35 p-6">
              <div className="flex items-center gap-2.5">
                <Clock className="size-4 text-copper" />
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/65">
                  Office hours
                </p>
              </div>
              <dl className="mt-4 space-y-2 text-[13px]">
                {site.hours.map((row) => (
                  <div
                    key={row.day}
                    className="flex items-baseline justify-between gap-4 border-b border-ink/8 pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="text-ink/65">{row.day}</dt>
                    <dd
                      className={
                        row.time === "Closed"
                          ? "text-ink/65"
                          : "font-semibold text-ink/80"
                      }
                    >
                      {row.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-6 min-w-6 items-center justify-center text-[10px] font-bold uppercase tracking-[0.14em] text-ink/65 transition-colors hover:text-copper"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-16 sm:py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-sand">
                <Image
                  src="/images/contact-building.jpg"
                  alt="The exterior of Bismarck Advanced Dental & Implants"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-cream/20 bg-pine-deep/60 px-5 py-4 text-cream backdrop-blur-md">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/65">
                    Find us
                  </p>
                  <p className="mt-1 text-[13px] text-cream/85">
                    {site.addressLine}
                  </p>
                </div>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-cream hover:text-pine"
                >
                  Directions
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          <div>
            <p className="eyebrow">First visit</p>
            <h2 className="display mt-5 text-[clamp(2.1rem,3.8vw,3.25rem)]">
              Everything you need{" "}
              <em className="font-light italic text-copper">before you arrive.</em>
            </h2>
            <p className="mt-5 max-w-lg text-[14px] leading-7 text-ink/65">
              Save a little time, or send a referral. If you’d rather just talk
              to a person, call the office — we’re happy to help.
            </p>

            <div className="mt-8 border-t border-ink/12">
              {contactCards.map((card) => {
                const content = (
                  <>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-ink/12 text-copper transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-cream">
                      <card.icon className="size-4" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-display text-[1.2rem] text-ink">
                        {card.title}
                      </span>
                      <span className="mt-1 block text-[12px] leading-6 text-ink/65">
                        {card.text}
                      </span>
                    </span>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-copper">
                      {card.label}
                      {card.external ? (
                        <ArrowUpRight className="size-3.5" />
                      ) : (
                        <ArrowRight className="size-3.5" />
                      )}
                    </span>
                  </>
                );

                return card.external ? (
                  <a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 border-b border-ink/12 py-5 last:border-0"
                  >
                    {content}
                  </a>
                ) : (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="group flex items-center gap-4 border-b border-ink/12 py-5 last:border-0"
                  >
                    {content}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20">
        <div className="container-x">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="eyebrow">Directions</p>
              <h2 className="display mt-5 text-[clamp(2rem,3.6vw,3rem)]">
                On South 7th Street.
              </h2>
              <p className="mt-4 max-w-sm text-[14px] leading-7 text-ink/65">
                We’re easy to find in Bismarck, with parking right at the office.
                Use the map for turn-by-turn directions.
              </p>
              <Button asChild variant="dark" className="mt-6">
                <a href={site.mapLink} target="_blank" rel="noreferrer">
                  Get directions
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>

            <div className="h-[340px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-sand sm:h-[400px]">
              <iframe
                title="Map to Bismarck Advanced Dental & Implants"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[0.35] sepia-[0.06]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-pine-deep py-16 text-cream sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
        <div className="pointer-events-none absolute -right-20 top-0 size-[420px] rounded-full bg-copper/12 blur-[120px]" />
        <div className="container-x relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div>
            <p className="eyebrow eyebrow-light">Need us sooner?</p>
            <h2 className="display mt-4 text-[clamp(2rem,4vw,3.4rem)] text-cream">
              Call the office. A person will answer.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={site.phone.href}>
                <Phone className="size-4" />
                {site.phone.display}
              </a>
            </Button>
            <Button asChild variant="outline-light" size="lg">
              <a href={`mailto:${site.email}`}>
                <Mail className="size-4" />
                Email us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
