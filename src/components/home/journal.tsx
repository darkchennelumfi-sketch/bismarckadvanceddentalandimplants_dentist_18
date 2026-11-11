import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { PostCard } from "@/components/post-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/posts";

export function HomeJournal() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="The journal"
          title={
            <>
              Notes on a{" "}
              <em className="font-light italic text-copper">healthier smile.</em>
            </>
          }
          description="Ideas, explanations, and practical thinking from our team — written to help you make sense of your options."
          action={
            <Button asChild variant="outline">
              <Link href="/blog">
                Visit the journal
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          }
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.07}>
              <PostCard post={post} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
