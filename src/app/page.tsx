import type { Metadata } from "next";

import { HomeDoctors } from "@/components/home/doctors";
import { HomeHero } from "@/components/home/hero";
import { HomeJournal } from "@/components/home/journal";
import { HomeLab } from "@/components/home/lab";
import { HomePillars } from "@/components/home/pillars";
import { HomeReviews } from "@/components/home/reviews";
import { HomeTreatments } from "@/components/home/treatments";
import { HomeVisit } from "@/components/home/visit";
import { HomeWhy } from "@/components/home/why";
import { Marquee } from "@/components/marquee";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <HomePillars />
      <HomeTreatments />
      <HomeWhy />
      <HomeLab />
      <HomeDoctors />
      <HomeReviews />
      <HomeJournal />
      <HomeVisit />
    </>
  );
}
