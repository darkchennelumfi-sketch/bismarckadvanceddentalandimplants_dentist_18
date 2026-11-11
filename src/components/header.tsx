import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";
import { ServiceIcon } from "@/components/service-icon";
import { dentalServices, implantServices } from "@/data/services";
import { site } from "@/data/site";

const navItems = [
  { label: "Our Practice", href: "/about" },
  { label: "In-House Lab", href: "/implants/in-house-lab" },
  { label: "Reviews", href: "/testimonials" },
  { label: "Financial", href: "/financial" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

function MegaColumn({
  title,
  href,
  services,
}: {
  title: string;
  href: string;
  services: typeof implantServices;
}) {
  return (
    <div className="p-5">
      <div className="mb-3 flex items-center justify-between px-2">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/65">
          {title}
        </p>
        <Link
          href={href}
          className="text-[10px] font-semibold uppercase tracking-[0.14em] text-copper transition-colors hover:text-copper-dark"
        >
          View all
        </Link>
      </div>
      <ul>
        {services
          .filter((service) => service.featured)
          .map((service) => (
            <li key={service.slug}>
              <Link
                href={`${href}/${service.slug}`}
                className="group/item flex items-center gap-3 rounded-xl px-2 py-2.5 transition-colors hover:bg-bone"
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full border border-ink/10 text-copper transition-colors group-hover/item:border-copper/40 group-hover/item:bg-cream">
                  <ServiceIcon name={service.icon} className="size-3.5" />
                </span>
                <span className="flex-1 text-[13px] font-medium text-ink/80 transition-colors group-hover/item:text-ink">
                  {service.navTitle}
                </span>
                <ArrowRight className="size-3.5 -translate-x-1 text-copper opacity-0 transition-all group-hover/item:translate-x-0 group-hover/item:opacity-100" />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      <div className="bg-pine-deep text-cream/65">
        <div className="container-x flex h-9 items-center justify-between gap-4 text-[10px] font-medium uppercase tracking-[0.14em]">
          <div className="flex items-center gap-5">
            <a
              href={site.mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-cream"
            >
              <MapPin className="size-3 text-copper-soft" />
              <span className="hidden sm:inline">{site.addressLine}</span>
              <span className="sm:hidden">Bismarck, ND</span>
            </a>
            <a
              href={site.phone.href}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-cream"
            >
              <Phone className="size-3 text-copper-soft" />
              {site.phone.display}
            </a>
          </div>
          <div className="hidden items-center gap-5 md:flex">
            <span className="text-cream/60">Mon–Wed 8–5 · Thu 8–2</span>
            <Link
              href="/financial"
              className="text-copper-soft transition-colors hover:text-cream"
            >
              Financing available
            </Link>
          </div>
        </div>
      </div>

      <div className="border-b border-ink/10 bg-cream/90 backdrop-blur-xl">
        <div className="container-x flex h-[78px] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            <div className="group relative">
              <Link
                href="/implants"
                className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-[12px] font-semibold text-ink/75 transition-colors hover:text-ink xl:px-4"
              >
                Treatments
                <ChevronDown className="size-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              <div className="invisible absolute left-1/2 top-full w-[690px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid grid-cols-2 divide-x divide-ink/10 overflow-hidden rounded-[1.6rem] border border-ink/10 bg-cream shadow-[0_40px_90px_-40px_rgba(20,37,31,0.45)]">
                  <MegaColumn
                    title="Dental Implants"
                    href="/implants"
                    services={implantServices}
                  />
                  <MegaColumn
                    title="Dental Services"
                    href="/dental-services"
                    services={dentalServices}
                  />
                </div>
                <div className="mx-3 mt-2 flex items-center justify-between rounded-2xl border border-ink/8 bg-bone/60 px-5 py-3">
                  <span className="text-[12px] text-ink/65">
                    Not sure where to start? Our team can help.
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-copper transition-colors hover:text-copper-dark"
                  >
                    Talk to us
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-[12px] font-semibold text-ink/75 transition-colors hover:text-ink xl:px-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild size="sm" className="hidden xl:inline-flex">
              <Link href="/contact">
                Schedule a consultation
                <ArrowRight className="size-3.5" />
              </Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
