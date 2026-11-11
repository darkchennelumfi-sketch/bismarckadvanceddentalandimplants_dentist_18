import type { MetadataRoute } from "next";

import { doctors } from "@/data/doctors";
import { allServices, getServiceHref } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" as const },
    { path: "/implants", priority: 0.9, changeFrequency: "monthly" as const },
    {
      path: "/dental-services",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    { path: "/about", priority: 0.8, changeFrequency: "yearly" as const },
    {
      path: "/testimonials",
      priority: 0.7,
      changeFrequency: "weekly" as const,
    },
    { path: "/financial", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...allServices.map((service) => ({
      url: `${site.url}${getServiceHref(service)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...doctors.map((doctor) => ({
      url: `${site.url}/doctors/${doctor.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
