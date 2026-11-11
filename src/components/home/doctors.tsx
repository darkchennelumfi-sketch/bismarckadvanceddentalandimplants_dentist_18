import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { DoctorCard } from "@/components/doctor-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctors";

export function HomeDoctors({ showAction = true }: { showAction?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-bone py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-40 bottom-0 size-[420px] rounded-full bg-copper/7 blur-[110px]" />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              Meet the doctors behind{" "}
              <em className="font-light italic text-copper">the practice.</em>
            </>
          }
          description="Two dentists, one shared standard: care that is personal, considered, and built around you."
          action={
            showAction ? (
              <Button asChild variant="outline">
                <Link href="/about">
                  More about our practice
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            ) : undefined
          }
        />

        <div className="mt-12 grid gap-12 md:grid-cols-2 lg:gap-16">
          {doctors.map((doctor, index) => (
            <Reveal key={doctor.slug} delay={index * 0.08}>
              <DoctorCard doctor={doctor} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
