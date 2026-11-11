import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetail } from "@/components/service-detail";
import { dentalServices, getServiceBySlug } from "@/data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return dentalServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug("dentistry", slug);

  if (!service) {
    return { title: "Treatment not found" };
  }

  return {
    title: service.title,
    description: service.tagline,
    alternates: { canonical: `/dental-services/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.tagline,
      url: `/dental-services/${service.slug}`,
    },
  };
}

export default async function DentalServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug("dentistry", slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
