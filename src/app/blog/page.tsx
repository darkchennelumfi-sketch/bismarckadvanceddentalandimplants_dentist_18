import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "The Journal — Dental Health Notes",
  description:
    "Practical articles from Bismarck Advanced Dental & Implants on dental implants, sedation dentistry, missing teeth, and long-term oral health.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Journal | Bismarck Advanced Dental & Implants",
    description:
      "Ideas, explanations, and practical thinking from our team — written to help you make sense of your options.",
    url: "/blog",
  },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="The journal"
        title={
          <>
            Notes on a{" "}
            <em className="font-light italic text-copper-soft">healthier smile.</em>
          </>
        }
        description="Ideas, explanations, and practical thinking from our team — written to help you make sense of your options before you ever sit in the chair."
        crumbs={[{ label: "Journal" }]}
        meta={
          <>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Articles
              </p>
              <p className="mt-1 font-display text-lg text-cream">
                {posts.length} reads
              </p>
            </div>
            <div className="hidden h-10 w-px bg-cream/15 lg:block" />
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-cream/60">
                Topics
              </p>
              <p className="mt-1 font-display text-lg text-cream">
                Implants &amp; comfort
              </p>
            </div>
          </>
        }
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute -right-32 top-0 size-[420px] rounded-full bg-copper/7 blur-[110px]" />
        <div className="container-x relative">
          <article className="group grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <a
              href={featured.href}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-sand lg:aspect-[5/4]"
              aria-label={`${featured.title} — read the full article`}
            >
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
              <span className="absolute left-5 top-5 rounded-full bg-cream/90 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-ink backdrop-blur">
                Featured · {featured.category}
              </span>
            </a>

            <div>
              <p className="eyebrow">From the journal</p>
              <h2 className="display mt-5 text-[clamp(2.1rem,4vw,3.4rem)]">
                {featured.title}
              </h2>
              <p className="mt-5 text-[14px] leading-7 text-ink/65 sm:text-[15px]">
                {featured.excerpt}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Button asChild>
                  <a href={featured.href} target="_blank" rel="noreferrer">
                    Read the article
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink/65">
                  Opens in a new tab
                </span>
              </div>
            </div>
          </article>

          <div className="mt-16 flex items-center gap-4 border-t border-ink/10 pt-10">
            <span className="eyebrow whitespace-nowrap">More reading</span>
            <span className="h-px flex-1 bg-ink/10" />
          </div>

          <div className="mt-9 grid gap-10 md:grid-cols-2 lg:gap-12">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={index * 0.07}>
                <PostCard post={post} index={index + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-bone/70 py-14">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Topics in the journal</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {posts.map((post) => (
                <a
                  key={post.slug}
                  href={post.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/12 bg-cream/60 px-4 py-2 text-[11px] font-semibold text-ink/65 transition-colors hover:border-copper/40 hover:text-copper"
                >
                  {post.category}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <p className="max-w-xs text-[13px] leading-6 text-ink/65">
              Have a question the journal doesn’t answer? Our team is happy to
              talk it through.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Ask us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Keep going"
        title="Your next step doesn’t have to be a leap."
        description="Bring us your questions. We’ll explain your options, show you what we see, and help you decide what comes next — on your terms."
      />
    </>
  );
}
