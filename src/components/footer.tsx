import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

import { site } from "@/data/site";

const explore = [
  { label: "Dental Implants", href: "/implants" },
  { label: "Dental Services", href: "/dental-services" },
  { label: "In-House Lab", href: "/implants/in-house-lab" },
  { label: "Our Practice", href: "/about" },
  { label: "Patient Reviews", href: "/testimonials" },
  { label: "Journal", href: "/blog" },
  { label: "Financial Options", href: "/financial" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pine-deep text-cream/60">
      <div className="pointer-events-none absolute -left-32 top-0 size-[420px] rounded-full bg-copper/10 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />

      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Image
              src="/images/logo-white.png"
              alt="Bismarck Advanced Dental & Implants"
              width={221}
              height={61}
              className="h-12 w-auto"
            />
            <p className="mt-6 max-w-sm text-[14px] leading-7 text-cream/65">
              Bismarck Advanced Dental and Implants offers various dental and
              implant services to fit the individualized needs of each patient
              that walks through our doors.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-6 min-w-6 items-center justify-center text-[10px] font-bold uppercase tracking-[0.16em] text-cream/60 transition-colors hover:text-copper-soft"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream/60">
              Office
            </h2>
            <address className="mt-5 not-italic text-[14px] leading-7 text-cream/65">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-block transition-colors hover:text-cream"
              >
                {site.address.street}
                <br />
                {site.address.city}, {site.address.state} {site.address.zip}
              </a>
            </address>
            <a
              href={site.phone.href}
              className="mt-4 flex items-center gap-2 text-[15px] font-semibold text-cream transition-colors hover:text-copper-soft"
            >
              <Phone className="size-3.5 text-copper-soft" />
              {site.phone.display}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 flex items-center gap-2 break-all text-[13px] text-cream/65 transition-colors hover:text-cream"
            >
              <ArrowUpRight className="size-3.5 shrink-0 text-copper-soft" />
              {site.email}
            </a>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-copper-soft transition-colors hover:text-cream"
            >
              Get directions
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream/60">
              Hours
            </h2>
            <dl className="mt-5 space-y-2 text-[13px]">
              {site.hours.map((row) => (
                <div
                  key={row.day}
                  className="flex items-baseline justify-between gap-4 border-b border-cream/8 pb-2 last:border-0"
                >
                  <dt className="text-cream/65">{row.day}</dt>
                  <dd
                    className={
                      row.time === "Closed"
                        ? "text-cream/60"
                        : "font-medium text-cream/80"
                    }
                  >
                    {row.time}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.22em] text-cream/60">
              Explore
            </h2>
            <ul className="mt-5 grid gap-2.5">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-[13px] text-cream/65 transition-colors hover:text-cream"
                  >
                    <span className="h-px w-3 bg-copper-soft/50 transition-all group-hover:w-5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-[11px] uppercase tracking-[0.12em] text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bismarck Advanced Dental &amp; Implants. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href={site.referralForm}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream/70"
            >
              Referral Form
            </a>
            <a
              href={site.payBill}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-cream/70"
            >
              Pay Bill
            </a>
            <span className="text-cream/60">Bismarck, North Dakota</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
