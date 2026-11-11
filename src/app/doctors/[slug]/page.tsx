import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { doctors, getDoctorBySlug } from "@/data/doctors";
import { site } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    return { title: "Doctor not found" };
  }

  return {
    title: doctor.name,
    description: `${doctor.name} is a dentist at Bismarck Advanced Dental & Implants in Bismarck, North Dakota.`,
    alternates: { canonical: `/doctors/${doctor.slug}` },
    openGraph: {
      title: `${doctor.name} | Bismarck Advanced Dental & Implants`,
      description: doctor.bio.slice(0, 160),
      url: `/doctors/${doctor.slug}`,
      images: [{ url: doctor.image, alt: doctor.imageAlt }],
    },
  };
}

export default async function DoctorPage({ params }: PageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const otherDoctor = doctors.find((item) => item.slug !== doctor.slug);

  return (
    <>
      <PageHero
        eyebrow="The team"
        title={doctor.name}
        description="Dentist at Bismarck Advanced Dental & Implants."
        crumbs={[
          { label: "Our Practice", href: "/about" },
          { label: doctor.name },
        ]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Practice
              </p>
              <p className="mt-1 font-display text-lg text-cream">Bismarck, ND</p>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                In-house lab
              </p>
              <p className="mt-1 font-display text-lg text-cream">On site</p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[430px]">
              <div
                className="pointer-events-none absolute -inset-4 rounded-t-full border border-copper/20"
                aria-hidden="true"
              />
              <div className="arch relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={doctor.image}
                  alt={doctor.imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/35 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-5 left-5 rounded-2xl border border-ink/10 bg-cream px-5 py-4 shadow-soft">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/65">
                  Bismarck Advanced Dental
                </p>
                <p className="mt-1 font-display text-xl text-ink">&amp; Implants</p>
              </div>
            </div>
          </Reveal>

          <div className="lg:pt-6">
            <p className="eyebrow">About {doctor.firstName}</p>
            <h2 className="display mt-5 text-[clamp(2.1rem,4vw,3.4rem)]">
              {doctor.pullQuote.includes("one-of-a-kind") ? (
                <>
                  A practice built on{" "}
                  <em className="font-light italic text-copper">passion</em> and
                  excellence.
                </>
              ) : (
                <>
                  Comfort, technology, and{" "}
                  <em className="font-light italic text-copper">esthetic care.</em>
                </>
              )}
            </h2>

            <p className="mt-7 text-[15px] leading-7 text-ink/65">
              {doctor.bio}
            </p>

            <div className="mt-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-ink/65">
                In focus
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {doctor.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] text-ink/65"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-copper/12 text-copper">
                      <Check className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link href="/contact">
                  Book with {doctor.firstName}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a
                href={site.phone.href}
                className="inline-flex items-center gap-2 px-2 text-[12px] font-semibold text-ink/65 transition-colors hover:text-copper"
              >
                <Phone className="size-3.5 text-copper" />
                {site.phone.display}
              </a>
            </div>

            <div className="mt-10 flex items-start gap-3 border-t border-ink/10 pt-6 text-[12px] leading-6 text-ink/65">
              <MapPin className="mt-0.5 size-4 shrink-0 text-copper" />
              <span>
                {doctor.firstName} sees patients at {site.address.street},{" "}
                {site.address.city}, {site.address.state} {site.address.zip}.
              </span>
            </div>
          </div>
        </div>
      </section>

      {otherDoctor ? (
        <section className="border-y border-ink/10 bg-bone py-14">
          <div className="container-x">
            <p className="eyebrow">Also at the practice</p>
            <div className="mt-6 flex flex-col gap-6 rounded-[1.5rem] border border-ink/10 bg-cream/70 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div className="flex items-center gap-5">
                <span className="relative size-20 shrink-0 overflow-hidden rounded-full border border-ink/10">
                  <Image
                    src={otherDoctor.image}
                    alt={otherDoctor.imageAlt}
                    fill
                    sizes="80px"
                    className="object-cover object-top"
                  />
                </span>
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-ink/65">
                    Dentist
                  </p>
                  <p className="mt-1 font-display text-2xl text-ink">
                    {otherDoctor.name}
                  </p>
                  <p className="mt-1 text-[12px] text-ink/65">
                    {otherDoctor.focus.slice(0, 2).join(" · ")}
                  </p>
                </div>
              </div>
              <Button asChild variant="outline">
                <Link href={`/doctors/${otherDoctor.slug}`}>
                  Meet {otherDoctor.firstName}
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        eyebrow="Appointments"
        title="Ready to meet us?"
        description="Request a consultation and we’ll help you find a time that works. Your questions come first."
      />
    </>
  );
}
