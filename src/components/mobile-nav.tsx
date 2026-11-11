"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Logo } from "@/components/logo";
import { site } from "@/data/site";
import { dentalServices, implantServices } from "@/data/services";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="inset-y-0 right-0 h-full w-[90%] max-w-[420px] overflow-y-auto p-7 pt-20">
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <DialogDescription className="sr-only">
          Site navigation and contact information
        </DialogDescription>

        <Logo />

        <nav aria-label="Mobile" className="mt-10">
          <ul className="space-y-1 border-t border-ink/10 pt-4">
            {[
              { label: "Treatments", href: "/implants" },
              { label: "Our Practice", href: "/about" },
              { label: "In-House Lab", href: "/implants/in-house-lab" },
              { label: "Reviews", href: "/testimonials" },
              { label: "Financial", href: "/financial" },
              { label: "Journal", href: "/blog" },
              { label: "Contact", href: "/contact" },
            ].map((item) => (
              <li key={item.href}>
                <DialogClose asChild>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-ink/8 py-3.5 font-display text-[1.65rem] text-ink transition-colors hover:text-copper"
                  >
                    {item.label}
                    <ArrowRight className="size-4 text-copper" />
                  </Link>
                </DialogClose>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 grid gap-5">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/65">
              Dental Implants
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {implantServices
                .filter((service) => service.featured)
                .slice(0, 6)
                .map((service) => (
                  <li key={service.slug}>
                    <DialogClose asChild>
                      <Link
                        href={`/implants/${service.slug}`}
                        className="text-[13px] text-ink/70 transition-colors hover:text-copper"
                      >
                        {service.navTitle}
                      </Link>
                    </DialogClose>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/65">
              Dental Services
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {dentalServices
                .filter((service) => service.featured)
                .slice(0, 6)
                .map((service) => (
                  <li key={service.slug}>
                    <DialogClose asChild>
                      <Link
                        href={`/dental-services/${service.slug}`}
                        className="text-[13px] text-ink/70 transition-colors hover:text-copper"
                      >
                        {service.navTitle}
                      </Link>
                    </DialogClose>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-3">
          <Button asChild variant="primary" size="lg" className="w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Schedule a consultation
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href={site.phone.href}>
              <Phone className="size-4" />
              {site.phone.display}
            </a>
          </Button>
        </div>

        <div className="mt-8 border-t border-ink/10 pt-6 text-[13px] leading-6 text-ink/65">
          <p>{site.addressLine}</p>
          <p className="mt-1">Mon–Wed 8 AM–5 PM · Thu 8 AM–2 PM</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-6 min-w-6 items-center justify-center text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/65 transition-colors hover:text-copper"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
