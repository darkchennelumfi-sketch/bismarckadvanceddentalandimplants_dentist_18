import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const homeTitle = "Dental Implants in Bismarck, ND | Bismarck Advanced Dental & Implants";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: "%s | Bismarck Advanced Dental & Implants",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  keywords: [
    "dentist Bismarck ND",
    "dental implants Bismarck",
    "Bismarck Advanced Dental & Implants",
    "All-on-4 Bismarck",
    "cosmetic dentistry Bismarck",
    "sedation dentistry Bismarck",
    "emergency dentist Bismarck",
    "in-house dental lab",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: homeTitle,
    description: site.description,
    images: [
      {
        url: "/images/hero-bismarck.jpg",
        width: 1600,
        height: 793,
        alt: "Bismarck, North Dakota",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: site.description,
    images: ["/images/hero-bismarck.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#17382f",
};

const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: site.url,
  description: site.description,
  image: `${site.url}/images/hero-bismarck.jpg`,
  telephone: "+1-701-390-1920",
  faxNumber: "+1-701-751-2640",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Bismarck",
    containedInPlace: {
      "@type": "State",
      name: "North Dakota",
    },
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  sameAs: site.socials.map((social) => social.href),
  medicalSpecialty: "Dentistry",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="min-h-dvh bg-cream text-ink antialiased">
        <a
          href="#main"
          className="skip-link rounded-full bg-pine px-5 py-3 text-sm font-semibold text-cream focus:outline-none focus:ring-2 focus:ring-copper"
        >
          Skip to content
        </a>
        <div className="grain" aria-hidden="true" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
      </body>
    </html>
  );
}
