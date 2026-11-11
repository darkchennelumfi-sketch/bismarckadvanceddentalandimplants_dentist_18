import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,black,transparent_85%)] opacity-60" />
      <div className="pointer-events-none absolute -left-32 top-20 size-[460px] rounded-full bg-copper/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-[420px] rounded-full bg-sage/15 blur-[100px]" />

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1fr_0.85fr]">
        <div>
          <p className="eyebrow">Page not found</p>
          <h1 className="display mt-6 text-[clamp(3.2rem,8vw,7rem)]">
            404<span className="text-copper">.</span>
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-7 text-ink/65">
            This page isn’t part of our site — or it may have moved. Let’s get you
            back to something useful. If you were looking for a treatment or your
            appointment, we can help.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="size-4" />
                Back to home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Contact the office
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-5">
            {[
              { label: "Dental Implants", href: "/implants" },
              { label: "Dental Services", href: "/dental-services" },
              { label: "Our Practice", href: "/about" },
              { label: "Patient Reviews", href: "/testimonials" },
              { label: "Financial", href: "/financial" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink/65 transition-colors hover:text-copper"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px]">
          <div
            className="pointer-events-none absolute -inset-4 rounded-t-full border border-copper/20"
            aria-hidden="true"
          />
          <div className="arch relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden bg-pine p-8 text-center text-cream">
            <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" />
            <div className="pointer-events-none absolute -right-16 top-0 size-52 rounded-full bg-copper/18 blur-[70px]" />
            <span className="relative font-display text-[6rem] font-light leading-none text-cream/15">
              404
            </span>
            <p className="relative mt-2 font-display text-[1.75rem] font-light italic leading-snug">
              A wrong turn is easy to fix.
            </p>
            <a
              href={site.phone.href}
              className="relative mt-7 inline-flex items-center gap-2 rounded-full border border-cream/25 px-5 py-3 text-[12px] font-semibold text-cream transition-colors hover:bg-cream hover:text-pine"
            >
              <Phone className="size-4" />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
