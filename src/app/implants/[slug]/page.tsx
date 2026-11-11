import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetail } from "@/components/service-detail";
import { getServiceBySlug, implantServices } from "@/data/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return implantServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug("implants", slug);

  if (!service) {
    return { title: "Treatment not found" };
  }

  return {
    title: service.title,
    description: service.tagline,
    alternates: { canonical: `/implants/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.tagline,
      url: `/implants/${service.slug}`,
    },
  };
}

export default async function ImplantServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug("implants", slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}
